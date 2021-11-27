import { dedupExchange, fetchExchange, setClient } from '@urql/svelte';
import { Client } from '@urql/core';
import { offlineExchange } from '@urql/exchange-graphcache';
import { makeDefaultStorage } from '@urql/exchange-graphcache/default-storage';

import type { GraphCacheConfig } from './generated/graphcache';
import introspection from "./generated/schema.json";

const schema = introspection as GraphCacheConfig['schema'];

function newClient() {
	const storage = makeDefaultStorage({
		idbName: 'graphcache-v3',
		maxAge: 7
	});

	const exchanges = [
		dedupExchange,
		offlineExchange({
			schema,
			storage,
		}),
		fetchExchange
	];

	return new Client({
		url: 'https://h1pcl.sse.codesandbox.io',
		exchanges,
		maskTypename: true
	});
}

let client;

function OnInit() {
	if (!client) {
		client = newClient();
	}

	setClient(client);
}

export default { OnInit };
