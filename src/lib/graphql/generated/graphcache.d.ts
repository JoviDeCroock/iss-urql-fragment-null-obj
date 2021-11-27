import { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver, StorageAdapter as GraphCacheStorageAdapter } from '@urql/exchange-graphcache';
import { IntrospectionData } from '@urql/exchange-graphcache/dist/types/ast';
export type WithTypename<T extends { __typename?: any }> = { [K in Exclude<keyof T, '__typename'>]?: T[K] } & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  Player?: (data: WithTypename<Player>) => null | string,
  Team?: (data: WithTypename<Team>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    player?: GraphCacheResolver<WithTypename<Query>, QueryPlayerArgs, WithTypename<Player> | string>,
    team?: GraphCacheResolver<WithTypename<Query>, QueryTeamArgs, WithTypename<Team> | string>
  },
  Player?: {
    id?: GraphCacheResolver<WithTypename<Player>, Record<string, never>, Scalars['ID'] | string>,
    description?: GraphCacheResolver<WithTypename<Player>, Record<string, never>, Scalars['String'] | string>,
    team?: GraphCacheResolver<WithTypename<Player>, Record<string, never>, WithTypename<Team> | string>
  },
  Team?: {
    id?: GraphCacheResolver<WithTypename<Team>, Record<string, never>, Scalars['ID'] | string>,
    description?: GraphCacheResolver<WithTypename<Team>, Record<string, never>, Scalars['String'] | string>,
    player?: GraphCacheResolver<WithTypename<Team>, Record<string, never>, WithTypename<Player> | string>
  }
};

export type GraphCacheOptimisticUpdaters = {
  {}
};

export type GraphCacheUpdaters = {
  Mutation?: {},
  Subscription?: {},
};

export type GraphCacheConfig = {
  schema?: IntrospectionData,
  updates?: GraphCacheUpdaters,
  keys?: GraphCacheKeysConfig,
  optimistic?: GraphCacheOptimisticUpdaters,
  resolvers?: GraphCacheResolvers,
  storage?: GraphCacheStorageAdapter
};