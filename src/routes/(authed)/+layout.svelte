<script>
	import '../../app.postcss';
	import TopNavbar from '$lib/components/top-navbar.svelte';
</script>

<div class="min-h-screen">
	<div style="position: fixed; z-index: 9999; inset: 16px; pointer-events: none;" />
	<TopNavbar>
		<slot />
	</TopNavbar>
</div>
