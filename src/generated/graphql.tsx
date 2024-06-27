import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ISO8601DateTime: { input: any; output: any; }
};

export type Artist = {
  __typename?: 'Artist';
  createdAt: Scalars['ISO8601DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type Item = {
  __typename?: 'Item';
  artist: Artist;
  artistId: Scalars['Int']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createItem: Item;
  deleteItem: Scalars['Boolean']['output'];
  updateItem: Item;
};


export type MutationCreateItemArgs = {
  artistId: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};


export type MutationDeleteItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateItemArgs = {
  artistId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** Return a list of artists */
  fetchArtists: Array<Artist>;
  /** Return a list of items */
  fetchItems: Array<Item>;
};

export type FetchArtistsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchArtistsQuery = { __typename?: 'Query', fetchArtists: Array<{ __typename?: 'Artist', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, fullName?: string | null }> };


export const FetchArtistsDocument = gql`
    query FetchArtists {
  fetchArtists {
    id
    firstName
    lastName
    email
    fullName
  }
}
    `;

/**
 * __useFetchArtistsQuery__
 *
 * To run a query within a React component, call `useFetchArtistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchArtistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchArtistsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchArtistsQuery(baseOptions?: Apollo.QueryHookOptions<FetchArtistsQuery, FetchArtistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchArtistsQuery, FetchArtistsQueryVariables>(FetchArtistsDocument, options);
      }
export function useFetchArtistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchArtistsQuery, FetchArtistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchArtistsQuery, FetchArtistsQueryVariables>(FetchArtistsDocument, options);
        }
export function useFetchArtistsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FetchArtistsQuery, FetchArtistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetchArtistsQuery, FetchArtistsQueryVariables>(FetchArtistsDocument, options);
        }
export type FetchArtistsQueryHookResult = ReturnType<typeof useFetchArtistsQuery>;
export type FetchArtistsLazyQueryHookResult = ReturnType<typeof useFetchArtistsLazyQuery>;
export type FetchArtistsSuspenseQueryHookResult = ReturnType<typeof useFetchArtistsSuspenseQuery>;
export type FetchArtistsQueryResult = Apollo.QueryResult<FetchArtistsQuery, FetchArtistsQueryVariables>;