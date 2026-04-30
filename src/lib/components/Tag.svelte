<script>
	import '$lib/style/components/_tag.scss';
	let { text, variant = 'default' } = $props();
</script>

{#if variant === 'default'}
	<div class="tag">
		<span>
			{text}
		</span>
	</div>
{/if}

{#if variant === 'status'}
	<div class="tag status">
		<div class="status-point">
			<div class="pulse-border"></div>
		</div>
		<span class="bold">
			{text}
		</span>
	</div>
{/if}
