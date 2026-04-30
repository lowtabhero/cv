<script>
	import '$lib/style/components/sections/_section-experience.scss';
	import Section from '$lib/components/sections/Section.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import BulletListItem from '../BulletListItem.svelte';
</script>

<Section id="experience" title="Experience" contentClass="section-experience">
	<div class="line"></div>
	<div class="wrapper">
		<div class="container">
			<div class="timeline-point">
				<div class="center"></div>
				<div class="pulse-border"></div>
			</div>
			<div class="date">
				<Tag text="Jan 2025 - Apr 2026" />
			</div>
			<div class="top">
				<h3>Velmure Studio</h3>
				<p>Web Developer / Full Stack Web Developer</p>
			</div>
			<p class="summary">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo perspiciatis totam
				itaque iure neque magni voluptate at sit enim similique non fuga eum, pariatur libero error
				tenetur aliquid impedit velit.
			</p>
			<div class="bullet-list">
				<BulletListItem
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
				/>
				<BulletListItem
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
				/>
			</div>
			<div class="links">
				<a href="https://studio.velmure.com" target="_blank" rel="noopener noreferrer">
					studio.velmure.com
				</a>
				<a href="https://tyrian.es" target="_blank" rel="noopener noreferrer"> tyrian.es </a>
				<a href="https://studio.velmure.com" target="_blank" rel="noopener noreferrer">
					exclusive.tyrian.es
				</a>
			</div>
		</div>
		<div class="container">
			<div class="timeline-point">
				<div class="center"></div>
				<div class="pulse-border"></div>
			</div>
			<div class="date">
				<Tag text="Nov 2024 - Dec 2024" />
			</div>
			<div class="top">
				<h3>Prestige Expo</h3>
				<p>Web Developer / Full Stack Web Developer</p>
			</div>
			<p class="summary">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo perspiciatis totam
				itaque iure neque magni voluptate at sit enim similique non fuga eum, pariatur libero error
				tenetur aliquid impedit velit.
			</p>
			<div class="bullet-list">
				<BulletListItem
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
				/>
				<BulletListItem
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
				/>
			</div>
		</div>
		<div class="container">
			<div class="timeline-point">
				<div class="center"></div>
				<div class="pulse-border"></div>
			</div>
			<div class="date">
				<Tag text="Aug 2024 - Oct 2024" />
			</div>
			<div class="top">
				<h3>The Agency RE</h3>
				<p>Web Developer / Full Stack Web Developer</p>
			</div>
			<p class="summary">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo perspiciatis totam
				itaque iure neque magni voluptate at sit enim similique non fuga eum, pariatur libero error
				tenetur aliquid impedit velit.
			</p>
			<div class="bullet-list">
				<BulletListItem
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
				/>
				<BulletListItem
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
				/>
			</div>
		</div>
	</div>
</Section>
