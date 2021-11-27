<script lang="ts">
	import urql from '$lib/graphql/urql';

	urql.OnInit();

	function clearStorage() {
		window.localStorage.clear();
		window.indexedDB.deleteDatabase('graphcache-v3');
		window.location.reload();
	}
</script>

<button on:click={clearStorage}>Clear storage</button>

<br /><br />

<slot />
