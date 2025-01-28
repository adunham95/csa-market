<script lang="ts">
	import { TextInput } from 'svelte-input-components';

	interface Props {
		title: string;
		description: string;
		emailListId: string;
		features: { title: string; description: string }[];
	}

	const { title, description, emailListId, features }: Props = $props();
</script>

<form class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
			<div class="max-w-xl lg:max-w-lg">
				<h2 class="text-4xl font-semibold tracking-tight text-white">
					{title}
				</h2>
				<p class="mt-4 text-lg text-gray-300">
					{description}
				</p>
				<input type="hidden" class="hidden" value={emailListId} name="emailListID" />
				<div class="mt-6 flex max-w-md gap-x-4">
					<TextInput id="email-address" label="Email Address" hideLabel class="bg-transparent" />
					<!-- <label for="email-address" class="sr-only">Email address</label>
					<input
						id="email-address"
						name="email"
						type="email"
						autocomplete="email"
						required
						class="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
						placeholder="Enter your email"
					/> -->
					<button
						type="submit"
						class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
					>
						Subscribe
					</button>
				</div>
			</div>
			<dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
				{#each features as feature}
					<div class="flex flex-col items-start">
						<dt class="mt-4 text-base font-semibold text-white">{feature.title}</dt>
						<dd class="mt-2 text-base/7 text-gray-400">
							{feature.description}
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</form>
