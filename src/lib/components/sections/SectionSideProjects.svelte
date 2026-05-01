<script>
	import '$lib/style/components/sections/_section-side-projects.scss';
	import Section from '$lib/components/sections/Section.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import BackgroundCircle from '$lib/components/BackgroundCircle.svelte';

	let { sideProjects } = $props();
</script>

<Section id="side-projects" title="Side projects" contentClass="section-side-projects">
	<BackgroundCircle
		size={'clamp(140px, 22vw, 240px)'}
		left={'78%'}
		top={'6%'}
		color={'#fb7185'}
	/>
	<BackgroundCircle
		size={'clamp(200px, 30vw, 380px)'}
		left={'8%'}
		top={'72%'}
		color={'#51b9e2'}
	/>
	{#each sideProjects as project}
		<div class="container">
			<div class="top">
				<span class="short-desc bold uppercase">{project.shortDesc}</span>
				<h3>{project.name}</h3>
				<p>{project.desc}</p>
			</div>
			<div class="bottom">
				<div class="tags">
					{#each project.tags as tag}
						<Tag text={tag} />
					{/each}
				</div>
				<a href={project.link.v} target="_blank" rel="noreferrer noopener">{project.link.n}</a>
			</div>
		</div>
	{/each}
</Section>
