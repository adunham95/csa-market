<script lang="ts">
	import SmallFooter from '$lib/components/smallFooter.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>CSA Marketplace</title>
</svelte:head>

{@render children()}

<SmallFooter />
