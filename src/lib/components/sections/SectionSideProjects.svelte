<script>
	import '$lib/style/components/sections/_section-side-projects.scss';
	import Section from '$lib/components/sections/Section.svelte';
	import Tag from '$lib/components/Tag.svelte';

	let { sideProjects } = $props();
</script>

<Section id="side-projects" title="Side projects" contentClass="section-side-projects">
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
