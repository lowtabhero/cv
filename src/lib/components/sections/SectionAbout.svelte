<script>
	import '$lib/style/components/sections/_section-about.scss';
	import Section from '$lib/components/sections/Section.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import BulletListItem from '../BulletListItem.svelte';

	let { name, jobTitle, located, openToWork, summary } = $props();
</script>

<section id="about" class="section-about">
	<div class="tags">
		<Tag text={located} />
		{#if openToWork}
			<Tag text="Open to Work" variant="status" />
		{/if}
	</div>
	<div class="info">
		<p class="page-role bold uppercase">Personal cv / Portfolio</p>
		<h1>{name}</h1>
		<p class="job-title">{jobTitle}</p>
	</div>
	<p>{summary}</p>
</section>
