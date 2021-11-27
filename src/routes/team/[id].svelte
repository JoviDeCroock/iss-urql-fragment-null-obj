<script lang="ts">
	import { operationStore, query } from '@urql/svelte';

	import { TeamDocument } from '$lib/graphql/generated/queries';

	const team = operationStore(TeamDocument, { id: '2' }, { requestPolicy: 'cache-and-network' });

	query(team);
</script>

team.player: {JSON.stringify($team.data?.team?.player)}

<br /><br />

{#if $team.fetching}
	Loading...
{:else if $team.error}
	Error: {$team.error}
{:else}
	Data: {JSON.stringify($team.data)}
{/if}

<br /><br />

<a href="/">Go to Player 1</a>
