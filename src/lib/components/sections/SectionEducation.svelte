<script>
	import '$lib/style/components/sections/_section-education.scss';
	import Section from '$lib/components/sections/Section.svelte';

	let { educations } = $props();
</script>

<Section id="education" title="Education" contentClass="section-education">
	{#each educations as education}
		<div class="container">
			<h3>{education.title}</h3>
			<p>{education.years}</p>
			<p>{education.institution}, {education.location}</p>
		</div>
	{/each}
</Section>
