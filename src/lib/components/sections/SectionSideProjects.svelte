<script>
	import '$lib/style/components/sections/_section-side-projects.scss';
	import Section from '$lib/components/sections/Section.svelte';
	import Tag from '$lib/components/Tag.svelte';
</script>

<Section id="side-projects" title="Side projects" contentClass="section-side-projects">
	<div class="container">
		<div class="top">
			<span class="short-desc bold uppercase">Multilingual SvelteKit Website</span>
			<h3>Lumica Center</h3>
			<p>
				Built a multilingual website using SvelteKit with content separated by language-specific
				JSON files. Integrated WordPress blog content and managed deployment through GitHub and
				Vercel.
			</p>
		</div>
		<div class="bottom">
			<div class="tags">
				<Tag text="SvelteKit" />
				<Tag text="WordPress REST API" />
				<Tag text="Vercel" />
			</div>
			<a href="https://lumicacenter.com" target="_blank" rel="noreferrer noopener">
				lumicacenter.com
			</a>
		</div>
	</div>
	<div class="container">
		<div class="top">
			<span class="short-desc bold uppercase">Internal Tool</span>
			<h3>SEO Content Cluster Automation Tool</h3>
			<p>
				Internal tool for generating SEO content clusters and saving them as WordPress drafts
				through REST API integrations. Focused on practical content workflows, review, and
				publishing support.
			</p>
		</div>
		<div class="bottom">
			<div class="tags">
				<Tag text="SvelteKit" />
				<Tag text="WordPress REST API" />
				<Tag text="OpenAI API" />
				<Tag text="Content automation" />
			</div>
			<a href="https://internal.stockscout.eu" target="_blank" rel="noreferrer noopener">
				internal.stockscout.eu
			</a>
		</div>
	</div>
</Section>
