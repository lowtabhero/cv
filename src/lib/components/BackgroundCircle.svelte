<script>
	import '$lib/style/components/_background-circle.scss';
	let { size, left, top, color } = $props();
</script>

<div
	class="background-circle"
	style="width: {size}; height: {size}; left: {left}; top: {top}; background: {color};"
></div>
