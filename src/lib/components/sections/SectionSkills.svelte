<script>
	import '$lib/style/components/sections/_section-skills.scss';
	import Section from '$lib/components/sections/Section.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import BulletListItem from '../BulletListItem.svelte';

	let { skills, routineWork } = $props();
</script>

<Section id="skills" title="Skills & workflow" contentClass="section-skills">
	{#each skills as skill}
		<div class="container">
			<h3 class="title">{skill.title}</h3>
			<div class="tags">
				{#each skill.values as value}
					<Tag text={value} />
				{/each}
			</div>
		</div>
	{/each}
	<div class="container">
		<h3 class="title">What I usually work on</h3>
		<div class="bullet-list">
			{#each routineWork as work}
				<BulletListItem text={work} />
			{/each}
		</div>
	</div>
</Section>
