-- ============================================
-- Being Muslim — Database Schema
-- ============================================
-- Database-agnostic SQL (Postgres-flavored)
-- Designed for: Supabase / any Postgres instance
-- ============================================

-- ============================================
-- 1. USERS & AUTH
-- ============================================

CREATE TABLE users (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email           TEXT UNIQUE NOT NULL,
    full_name       TEXT NOT NULL,
    avatar_url      TEXT,
    bio             TEXT,
    journey_type    TEXT CHECK (journey_type IN ('exploring', 'new_muslim', 'reconnecting', 'lifelong')),
    role            TEXT NOT NULL DEFAULT 'member' CHECK (role IN ('member', 'admin', 'moderator', 'instructor', 'editor')),
    auth_provider   TEXT, -- 'email', 'google', 'apple'
    profile_visible BOOLEAN DEFAULT true,
    created_at      TIMESTAMPTZ DEFAULT now(),
    updated_at      TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- 2. ARTICLES / BLOG
-- ============================================

CREATE TABLE article_categories (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            TEXT UNIQUE NOT NULL,
    slug            TEXT UNIQUE NOT NULL,
    description     TEXT,
    sort_order      INT DEFAULT 0,
    created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE articles (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title           TEXT NOT NULL,
    slug            TEXT UNIQUE NOT NULL,
    excerpt         TEXT,
    body            TEXT NOT NULL, -- markdown or rich text
    cover_image_url TEXT,
    author_id       UUID REFERENCES users(id) ON DELETE SET NULL,
    category_id     UUID REFERENCES article_categories(id) ON DELETE SET NULL,
    status          TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'published', 'archived')),
    published_at    TIMESTAMPTZ,
    scheduled_at    TIMESTAMPTZ, -- for scheduled publishing
    reading_time    INT, -- minutes, auto-calculated
    featured        BOOLEAN DEFAULT false,
    created_at      TIMESTAMPTZ DEFAULT now(),
    updated_at      TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE article_tags (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            TEXT UNIQUE NOT NULL,
    slug            TEXT UNIQUE NOT NULL
);

CREATE TABLE article_tag_map (
    article_id      UUID REFERENCES articles(id) ON DELETE CASCADE,
    tag_id          UUID REFERENCES article_tags(id) ON DELETE CASCADE,
    PRIMARY KEY (article_id, tag_id)
);

-- ============================================
-- 3. LMS — COURSES & LESSONS
-- ============================================
-- NOTE: Course structure TBD — lesson types,
-- quizzes, certificates, paid vs free, and
-- who can create courses are pending confirmation.
-- This is a starting schema to be refined.
-- ============================================

CREATE TABLE courses (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title           TEXT NOT NULL,
    slug            TEXT UNIQUE NOT NULL,
    description     TEXT,
    cover_image_url TEXT,
    instructor_id   UUID REFERENCES users(id) ON DELETE SET NULL,
    difficulty      TEXT CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
    status          TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    -- TBD: pricing fields (free vs paid)
    -- TBD: certificate_enabled BOOLEAN
    sort_order      INT DEFAULT 0,
    created_at      TIMESTAMPTZ DEFAULT now(),
    updated_at      TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE course_modules (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id       UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    title           TEXT NOT NULL,
    description     TEXT,
    sort_order      INT DEFAULT 0,
    created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE lessons (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    module_id       UUID NOT NULL REFERENCES course_modules(id) ON DELETE CASCADE,
    title           TEXT NOT NULL,
    slug            TEXT NOT NULL,
    -- TBD: lesson type may expand (video, text, quiz, download)
    lesson_type     TEXT NOT NULL DEFAULT 'video' CHECK (lesson_type IN ('video', 'text', 'quiz', 'download')),
    content         TEXT, -- markdown for text lessons
    video_url       TEXT, -- YouTube/external URL
    duration        INT, -- seconds
    sort_order      INT DEFAULT 0,
    created_at      TIMESTAMPTZ DEFAULT now(),
    updated_at      TIMESTAMPTZ DEFAULT now(),
    UNIQUE(module_id, slug)
);

CREATE TABLE user_course_enrollment (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    course_id       UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    enrolled_at     TIMESTAMPTZ DEFAULT now(),
    completed_at    TIMESTAMPTZ,
    UNIQUE(user_id, course_id)
);

CREATE TABLE user_lesson_progress (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    lesson_id       UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
    status          TEXT NOT NULL DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'completed')),
    progress_pct    INT DEFAULT 0 CHECK (progress_pct >= 0 AND progress_pct <= 100),
    completed_at    TIMESTAMPTZ,
    updated_at      TIMESTAMPTZ DEFAULT now(),
    UNIQUE(user_id, lesson_id)
);

-- ============================================
-- 4. COMMUNITY — FORUMS & CHAT
-- ============================================
-- NOTE: Group structure TBD — individual
-- community-run groups vs global groups,
-- moderation queue details pending.
-- ============================================

CREATE TABLE community_groups (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            TEXT NOT NULL,
    slug            TEXT UNIQUE NOT NULL,
    description     TEXT,
    cover_image_url TEXT,
    group_type      TEXT NOT NULL DEFAULT 'global' CHECK (group_type IN ('global', 'community')),
    owner_id        UUID REFERENCES users(id) ON DELETE SET NULL, -- for community-run groups
    is_private      BOOLEAN DEFAULT false,
    created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE group_memberships (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    group_id        UUID NOT NULL REFERENCES community_groups(id) ON DELETE CASCADE,
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role            TEXT NOT NULL DEFAULT 'member' CHECK (role IN ('member', 'moderator', 'admin')),
    joined_at       TIMESTAMPTZ DEFAULT now(),
    UNIQUE(group_id, user_id)
);

-- Forum-style threaded posts
CREATE TABLE forum_posts (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    group_id        UUID NOT NULL REFERENCES community_groups(id) ON DELETE CASCADE,
    author_id       UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title           TEXT, -- null for replies
    body            TEXT NOT NULL,
    parent_id       UUID REFERENCES forum_posts(id) ON DELETE CASCADE, -- null = top-level, set = reply
    is_pinned       BOOLEAN DEFAULT false,
    -- TBD: moderation fields
    -- moderation_status TEXT DEFAULT 'approved' CHECK (...)
    created_at      TIMESTAMPTZ DEFAULT now(),
    updated_at      TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE post_reactions (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    post_id         UUID NOT NULL REFERENCES forum_posts(id) ON DELETE CASCADE,
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    reaction_type   TEXT NOT NULL DEFAULT 'like' CHECK (reaction_type IN ('like', 'heart', 'jazakallah')),
    created_at      TIMESTAMPTZ DEFAULT now(),
    UNIQUE(post_id, user_id, reaction_type)
);

-- Real-time chat
CREATE TABLE chat_channels (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    group_id        UUID NOT NULL REFERENCES community_groups(id) ON DELETE CASCADE,
    name            TEXT NOT NULL,
    description     TEXT,
    created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE chat_messages (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    channel_id      UUID NOT NULL REFERENCES chat_channels(id) ON DELETE CASCADE,
    author_id       UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    body            TEXT NOT NULL,
    -- TBD: attachments, reply_to_id
    created_at      TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- 5. ADMIN — ANALYTICS & EMAIL
-- ============================================

CREATE TABLE admin_audit_log (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    admin_id        UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    action          TEXT NOT NULL, -- 'article.publish', 'user.ban', 'course.create', etc.
    target_type     TEXT, -- 'article', 'user', 'course', etc.
    target_id       UUID,
    metadata        JSONB, -- extra context
    created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE email_templates (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            TEXT UNIQUE NOT NULL, -- 'welcome', 'course_reminder', 'community_reply'
    subject         TEXT NOT NULL,
    body_html       TEXT NOT NULL,
    body_text       TEXT,
    created_at      TIMESTAMPTZ DEFAULT now(),
    updated_at      TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- 6. MEDIA LIBRARY
-- ============================================

CREATE TABLE media (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    uploaded_by     UUID REFERENCES users(id) ON DELETE SET NULL,
    file_name       TEXT NOT NULL,
    file_url        TEXT NOT NULL,
    file_type       TEXT NOT NULL, -- 'image/jpeg', 'application/pdf', etc.
    file_size       INT, -- bytes
    alt_text        TEXT,
    created_at      TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- 7. INDEXES
-- ============================================

CREATE INDEX idx_articles_status ON articles(status);
CREATE INDEX idx_articles_published_at ON articles(published_at DESC);
CREATE INDEX idx_articles_author ON articles(author_id);
CREATE INDEX idx_articles_category ON articles(category_id);
CREATE INDEX idx_articles_slug ON articles(slug);

CREATE INDEX idx_courses_status ON courses(status);
CREATE INDEX idx_lessons_module ON lessons(module_id, sort_order);

CREATE INDEX idx_enrollment_user ON user_course_enrollment(user_id);
CREATE INDEX idx_enrollment_course ON user_course_enrollment(course_id);
CREATE INDEX idx_lesson_progress_user ON user_lesson_progress(user_id);

CREATE INDEX idx_forum_posts_group ON forum_posts(group_id, created_at DESC);
CREATE INDEX idx_forum_posts_parent ON forum_posts(parent_id);
CREATE INDEX idx_forum_posts_author ON forum_posts(author_id);

CREATE INDEX idx_chat_messages_channel ON chat_messages(channel_id, created_at);

CREATE INDEX idx_group_memberships_user ON group_memberships(user_id);
CREATE INDEX idx_group_memberships_group ON group_memberships(group_id);

CREATE INDEX idx_audit_log_admin ON admin_audit_log(admin_id, created_at DESC);
CREATE INDEX idx_audit_log_target ON admin_audit_log(target_type, target_id);
