import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
};

export type Player = {
  __typename?: 'Player';
  description: Scalars['String'];
  id: Scalars['ID'];
  team?: Maybe<Team>;
};

export type Query = {
  __typename?: 'Query';
  player: Player;
  team: Team;
};


export type QueryPlayerArgs = {
  id: Scalars['ID'];
};


export type QueryTeamArgs = {
  id: Scalars['ID'];
};

export type Team = {
  __typename?: 'Team';
  description: Scalars['String'];
  id: Scalars['ID'];
  player?: Maybe<Player>;
};

export type Player_FragmentFragment = { __typename?: 'Player', id: string, description: string, team?: { __typename?: 'Team', id: string, description: string } | null | undefined };

export type PlayerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PlayerQuery = { __typename?: 'Query', player: { __typename?: 'Player', id: string, description: string, team?: { __typename?: 'Team', id: string, description: string } | null | undefined } };

export type Team_FragmentFragment = { __typename?: 'Team', id: string, description: string };

export type TeamQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TeamQuery = { __typename?: 'Query', team: { __typename?: 'Team', id: string, description: string, player?: { __typename?: 'Player', id: string, description: string, team?: { __typename?: 'Team', id: string, description: string } | null | undefined } | null | undefined } };

export const Team_FragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TEAM_FRAGMENT"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<Team_FragmentFragment, unknown>;
export const Player_FragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PLAYER_FRAGMENT"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TEAM_FRAGMENT"}}]}}]}}]} as unknown as DocumentNode<Player_FragmentFragment, unknown>;
export const PlayerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"player"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"player"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PLAYER_FRAGMENT"}}]}}]}},...Player_FragmentFragmentDoc.definitions,...Team_FragmentFragmentDoc.definitions]} as unknown as DocumentNode<PlayerQuery, PlayerQueryVariables>;
export const TeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"team"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TEAM_FRAGMENT"}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PLAYER_FRAGMENT"}}]}}]}}]}},...Team_FragmentFragmentDoc.definitions,...Player_FragmentFragmentDoc.definitions]} as unknown as DocumentNode<TeamQuery, TeamQueryVariables>;