<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	console.log(data);
</script>

<div aria-hidden="true" class="relative">
	<img src={data.bannerImg} alt="" class="h-96 w-full object-cover" />
	<div class="absolute inset-0 bg-gradient-to-t from-white"></div>
</div>

<!-- <div class="h-16 w-full"></div> -->

<div class="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
	<div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data.title}</h2>
		<p class="mt-4 text-gray-500">
			{data.description}
		</p>
	</div>
</div>
