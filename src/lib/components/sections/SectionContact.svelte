<script>
	import '$lib/style/components/sections/_section-contact.scss';
	import Section from '$lib/components/sections/Section.svelte';
	import BackgroundCircle from '$lib/components/BackgroundCircle.svelte';

	let { contactCta, contactParagraph, email, socialLinks } = $props();
</script>

<Section id="contact" title="Contact" contentClass="section-contact">
	<BackgroundCircle
		size={'clamp(210px, 30vw, 360px)'}
		left={'56%'}
		top={'-22%'}
		color={'#74D4FF'}
	/>
	<BackgroundCircle
		size={'clamp(130px, 20vw, 220px)'}
		left={'-8%'}
		top={'78%'}
		color={'#f472b6'}
	/>
	<p class="cta">{contactCta}</p>
	<p>{contactParagraph}</p>
	<div class="links">
		<a class="light" href="mailto:{email}">Email</a>
		{#each socialLinks as link}
			<a href={link.v} target="_blank">{link.n}</a>
		{/each}
	</div>
</Section>
