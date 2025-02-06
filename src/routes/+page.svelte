<script>
	import EmailList from '$lib/components/emailList.svelte';
	import FeatureList from '$lib/components/featureList.svelte';
	import Hero from '$lib/components/hero.svelte';
</script>

<Hero />

<FeatureList
	title="All-in-one Marketplace"
	features={[
		{
			title: 'Automated Subscription Management',
			description: ''
		},
		{ title: 'Fulfillment', description: 'Packing slips, labels and sign in sheets' },
		{ title: 'Customization', description: 'Customize the about page for your farm' },
		{
			title: 'Build Community',
			description:
				'Building community with newsletters, a consolidated inbox and automated facebook sharing'
		}
	]}
/>

<div id="email-signup">
	<EmailList
		emailListId="follow-project"
		title="Sign up"
		description="Follow the project and get exclusive access"
		features={[
			{ title: 'Exclusive Access', description: 'Gain access to beta software when available' },
			{
				title: 'Follow The Development',
				description: 'Access our newsletter and get detailed updates about what we are working on'
			}
		]}
	/>
</div>
