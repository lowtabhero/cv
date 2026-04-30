<script>
	import '$lib/style/components/_header.scss';

	let { name, jobTitle, socialLinks } = $props();
</script>

<header>
	<div class="content">
		<div class="left">
			<p class="bold">Alexey Riazantsev</p>
			<span>Full Stack Web Developer</span>
		</div>
		<nav>
			<a class="simple" href="#about">About</a>
			<a class="simple" href="#skills">Skills</a>
			<a class="simple" href="#experience">Experience</a>
			<a class="simple" href="#side-projects">Projects</a>
			<a class="simple" href="#education">Education</a>
			<a class="simple" href="#contact">Contact</a>
		</nav>
		<div class="social">
			{#each socialLinks as link}
				<a href={link.v} target="_blank" rel="noopener noreferrer"> {link.n} </a>
			{/each}
		</div>
	</div>
</header>
