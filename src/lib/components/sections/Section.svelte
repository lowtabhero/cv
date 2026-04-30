<script>
	import '$lib/style/components/sections/_section.scss';
	let { children, id, title, contentClass } = $props();
</script>

<section {id} class="section">
	<h2>{title}</h2>
	<div class={`content ${contentClass}`}>
		{@render children?.()}
	</div>
</section>
