<script>
	import '$lib/style/components/sections/_section-contact.scss';
	import Section from '$lib/components/sections/Section.svelte';

	let { contactCta, contactParagraph, email, socialLinks } = $props();
</script>

<Section id="contact" title="Contact" contentClass="section-contact">
	<p class="cta">{contactCta}</p>
	<p>{contactParagraph}</p>
	<div class="links">
		<a class="light" href="mailto:{email}">Email</a>
		{#each socialLinks as link}
			<a href={link.v} target="_blank">{link.n}</a>
		{/each}
	</div>
</Section>
