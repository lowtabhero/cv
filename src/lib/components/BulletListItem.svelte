<script>
	import '$lib/style/components/_bullet-list-item.scss';
	let { text } = $props();
</script>

<div class="bullet-list-item">
	<div class="bullet"></div>
	<p>{text}</p>
</div>
