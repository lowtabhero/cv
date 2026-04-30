<script>
	import '$lib/style/components/sections/_section-skills.scss';
	import Section from '$lib/components/sections/Section.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import BulletListItem from '../BulletListItem.svelte';
</script>

<Section id="skills" title="Skills & workflow" contentClass="section-skills">
	<div class="container">
		<h3 class="title">Frontend</h3>
		<div class="tags">
			<Tag text="SvelteKit" />
			<Tag text="JavaScript" />
			<Tag text="React" />
			<Tag text="TypeScript" />
			<Tag text="HTML" />
			<Tag text="SCSS" />
		</div>
	</div>
	<div class="container">
		<h3 class="title">Backend</h3>
		<div class="tags">
			<Tag text="PHP" />
			<Tag text="SQL" />
			<Tag text="REST API" />
			<Tag text="WordPress Headless CMS" />
		</div>
	</div>
	<div class="container">
		<h3 class="title">Workflow</h3>
		<div class="tags">
			<Tag text="Figma" />
			<Tag text="Github" />
			<Tag text="Vercel" />
		</div>
	</div>
	<div class="container">
		<h3 class="title">Languages</h3>
		<div class="tags">
			<Tag text="English" />
			<Tag text="Spanish" />
			<Tag text="Russian" />
		</div>
	</div>
	<div class="container">
		<h3 class="title">What I usually work on</h3>
		<div class="bullet-list">
			<BulletListItem text="Figma-to-production website implementation" />
			<BulletListItem text="CMS-driven websites with WordPress integrations" />
			<BulletListItem text="Internal tools and admin interfaces" />
			<BulletListItem text="REST API integrations" />
			<BulletListItem text="Multilingual websites" />
			<BulletListItem text="Website maintenance, fixes, and deployment setup" />
		</div>
	</div>
</Section>
