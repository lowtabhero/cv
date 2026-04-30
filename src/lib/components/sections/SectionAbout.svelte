<script>
	import '$lib/style/components/sections/_section-about.scss';
	import Section from '$lib/components/sections/Section.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import BulletListItem from '../BulletListItem.svelte';
</script>

<section id="about" class="section-about">
	<div class="tags">
		<Tag text="Based in Spain" />
		<Tag text="Open to Work" variant="status" />
	</div>
	<div class="info">
		<p class="page-role bold uppercase">Personal cv / Portfolio</p>
		<h1>Alexey Riazantsev</h1>
		<p class="job-title">Full Stack Web Developer</p>
	</div>
	<p>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem fuga voluptatem dolorum.
		Excepturi modi sunt debitis assumenda vel minus consequatur! Tempore, numquam. Perspiciatis ut
		dignissimos provident. Ipsa laudantium voluptate voluptatum.
	</p>
</section>
