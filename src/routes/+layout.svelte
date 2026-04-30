<script>
	import '$lib/style/style.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { data } from '$lib/data';
</script>

<Header name={data.name} jobTitle={data.jobTitle} socialLinks={data.socialLinks} />
<main>
	<slot />
</main>
<Footer />
