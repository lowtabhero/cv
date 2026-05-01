<script>
	import '$lib/style/components/sections/_section-education.scss';
	import Section from '$lib/components/sections/Section.svelte';
	import BackgroundCircle from '$lib/components/BackgroundCircle.svelte';

	let { educations } = $props();
</script>

<Section id="education" title="Education" contentClass="section-education">
	<BackgroundCircle
		size={'clamp(170px, 26vw, 300px)'}
		left={'-10%'}
		top={'18%'}
		color={'#a3e635'}
	/>
	<BackgroundCircle
		size={'clamp(110px, 18vw, 190px)'}
		left={'84%'}
		top={'70%'}
		color={'#ff7a59'}
	/>
	{#each educations as education}
		<div class="container">
			<h3>{education.title}</h3>
			<p>{education.years}</p>
			<p>{education.institution}, {education.location}</p>
		</div>
	{/each}
</Section>
