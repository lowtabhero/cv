<script>
	import '$lib/style/components/sections/_section-experience.scss';
	import Section from '$lib/components/sections/Section.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import BulletListItem from '../BulletListItem.svelte';
	import BackgroundCircle from '$lib/components/BackgroundCircle.svelte';

	let { companies } = $props();
</script>

<Section id="experience" title="Experience" contentClass="section-experience">
	<BackgroundCircle
		size={'clamp(180px, 28vw, 340px)'}
		left={'-14%'}
		top={'12%'}
		color={'#c084fc'}
	/>
	<BackgroundCircle
		size={'clamp(120px, 20vw, 220px)'}
		left={'82%'}
		top={'58%'}
		color={'#2dd4bf'}
	/>
	<div class="line"></div>
	<div class="wrapper">
		{#each companies as company}
			<div class="container">
				<div class="timeline-point">
					<div class="center"></div>
					<div class="pulse-border"></div>
				</div>
				<div class="top">
					<h3>{company.companyName}</h3>
					<p class="bold">{company.position}</p>
				</div>
				<div class="date">
					<Tag text={company.date} />
				</div>
				<p class="summary">{company.summary}</p>
				<div class="bullet-list">
					{#each company.summaryPoints as point}
						<BulletListItem text={point} />
					{/each}
				</div>
				<div class="links">
					{#each company.webLinks as link}
						<a href={link.v} target="_blank" rel="noopener noreferrer">{link.n}</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</Section>
