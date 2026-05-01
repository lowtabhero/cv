<script>
	import '$lib/style/components/sections/_section-skills.scss';
	import Section from '$lib/components/sections/Section.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import BulletListItem from '../BulletListItem.svelte';
	import BackgroundCircle from '$lib/components/BackgroundCircle.svelte';

	let { skills, routineWork } = $props();
</script>

<Section id="skills" title="Skills & workflow" contentClass="section-skills">
	<BackgroundCircle size={'clamp(160px, 24vw, 280px)'} left={'72%'} top={'10%'} color={'#facc15'} />
	<BackgroundCircle
		size={'clamp(190px, 28vw, 360px)'}
		left={'-12%'}
		top={'64%'}
		color={'#38bdf8'}
	/>
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
