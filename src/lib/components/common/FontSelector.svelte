<script lang="ts">
	import { ChevronDown, Type } from 'lucide-svelte';

	const fontPairings = [
		{ label: 'Source Serif 4 + DM Sans', serif: "'Source Serif 4', serif", sans: "'DM Sans', sans-serif", google: '' },
		{ label: 'Fraunces + Outfit', serif: "'Fraunces', serif", sans: "'Outfit', sans-serif", google: 'family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Outfit:wght@300..700' },
		{ label: 'Cormorant Garamond + Manrope', serif: "'Cormorant Garamond', serif", sans: "'Manrope', sans-serif", google: 'family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Manrope:wght@300..700' },
		{ label: 'Newsreader + Albert Sans', serif: "'Newsreader', serif", sans: "'Albert Sans', sans-serif", google: 'family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Albert+Sans:ital,wght@0,300..700;1,300..700' },
		{ label: 'Playfair Display + Inter', serif: "'Playfair Display', serif", sans: "'Inter', sans-serif", google: 'family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300..700' },
		{ label: 'Libre Baskerville + Space Grotesk', serif: "'Libre Baskerville', serif", sans: "'Space Grotesk', sans-serif", google: 'family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Grotesk:wght@300..700' },
		{ label: 'Lora + Inter', serif: "'Lora', serif", sans: "'Inter', sans-serif", google: 'family=Lora:ital,wght@0,400..700;1,400..700&family=Inter:wght@300..700' },
		{ label: 'DM Serif Display + DM Sans', serif: "'DM Serif Display', serif", sans: "'DM Sans', sans-serif", google: 'family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700' },
	];

	let isOpen = $state(false);
	let selectedIndex = $state(0);
	let loadedFonts = $state<Set<number>>(new Set([0]));

	function selectFont(index: number) {
		selectedIndex = index;
		isOpen = false;

		// Load Google Font if needed
		if (!loadedFonts.has(index) && fontPairings[index].google) {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = `https://fonts.googleapis.com/css2?${fontPairings[index].google}&display=swap`;
			document.head.appendChild(link);
			loadedFonts.add(index);
			loadedFonts = new Set(loadedFonts);
		}

		// Apply fonts to CSS variables
		const pairing = fontPairings[index];
		document.documentElement.style.setProperty('--bm-font-serif', pairing.serif);
		document.documentElement.style.setProperty('--bm-font-sans', pairing.sans);

		// Also update any elements using font-family inline styles
		document.querySelectorAll('[style*="font-family"]').forEach((el) => {
			const style = (el as HTMLElement).style;
			const ff = style.fontFamily;
			if (ff.includes('Source Serif') || ff.includes('Fraunces') || ff.includes('Cormorant') || ff.includes('Newsreader') || ff.includes('Playfair') || ff.includes('Libre Baskerville') || ff.includes('Lora') || ff.includes('DM Serif')) {
				style.fontFamily = pairing.serif;
			} else if (ff.includes('DM Sans') || ff.includes('Outfit') || ff.includes('Manrope') || ff.includes('Albert Sans') || ff.includes('Inter') || ff.includes('Space Grotesk')) {
				style.fontFamily = pairing.sans;
			}
		});
	}
</script>

<!-- Floating font selector -->
<div style="position: fixed; bottom: 24px; right: 24px; z-index: 9999;">
	{#if isOpen}
		<!-- Dropdown panel -->
		<div style="
			position: absolute;
			bottom: 56px;
			right: 0;
			width: 300px;
			background: #fff;
			border-radius: 12px;
			box-shadow: 0 8px 32px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08);
			border: 1px solid rgba(0,0,0,0.08);
			overflow: hidden;
			animation: fontSelectorFadeIn 0.15s ease-out;
		">
			<div style="padding: 12px 16px; border-bottom: 1px solid rgba(0,0,0,0.06);">
				<p style="font-family: system-ui; font-size: 11px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.08em; margin: 0;">Font Pairing</p>
			</div>
			<div style="max-height: 320px; overflow-y: auto;">
				{#each fontPairings as pairing, i}
					<button
						onclick={() => selectFont(i)}
						style="
							width: 100%;
							text-align: left;
							padding: 12px 16px;
							border: none;
							background: {selectedIndex === i ? 'rgba(42,32,24,0.06)' : 'transparent'};
							cursor: pointer;
							display: flex;
							flex-direction: column;
							gap: 2px;
							transition: background 0.15s;
							border-bottom: 1px solid rgba(0,0,0,0.04);
						"
						onmouseenter={(e) => { if (selectedIndex !== i) (e.currentTarget as HTMLElement).style.background = 'rgba(42,32,24,0.03)'; }}
						onmouseleave={(e) => { if (selectedIndex !== i) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
					>
						<span style="font-family: system-ui; font-size: 13px; font-weight: 500; color: #2a2018;">
							{pairing.label}
							{#if selectedIndex === i}
								<span style="color: #7a9e7e; margin-left: 4px;">&#10003;</span>
							{/if}
						</span>
						<span style="font-family: system-ui; font-size: 11px; color: #8a7e70;">
							{pairing.serif.split("'")[1]} (headings) + {pairing.sans.split("'")[1]} (body)
						</span>
					</button>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Toggle button -->
	<button
		onclick={() => (isOpen = !isOpen)}
		style="
			width: 48px;
			height: 48px;
			border-radius: 999px;
			background: #2a2018;
			color: #fff;
			border: none;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			box-shadow: 0 4px 16px rgba(0,0,0,0.2);
			transition: all 0.2s;
		"
		onmouseenter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)'; }}
		onmouseleave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
		aria-label="Font selector"
	>
		<Type style="width: 20px; height: 20px;" />
	</button>
</div>

<style>
	@keyframes fontSelectorFadeIn {
		from { opacity: 0; transform: translateY(8px); }
		to { opacity: 1; transform: translateY(0); }
	}
</style>
