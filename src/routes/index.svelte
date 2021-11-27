<script lang="ts">
	import { operationStore, query } from '@urql/svelte';

	import { PlayerDocument } from '$lib/graphql/generated/queries';

	const player = operationStore(
		PlayerDocument,
		{ id: '1' },
		{ requestPolicy: 'cache-and-network' }
	);

	query(player);
</script>

player.team: {JSON.stringify($player.data?.player?.team)}

<br /><br />

{#if $player.fetching}
	Loading...
{:else if $player.error}
	Error: {$player.error}
{:else}
	Data: {JSON.stringify($player.data)}
{/if}

<br /><br />

<a href="/team/2">Go to Team 2</a>
