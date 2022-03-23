import * as Types from '../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetUrlQueryVariables = Types.Exact<{
  shortUrl: Types.Scalars['String'];
}>;


export type GetUrlQuery = { __typename?: 'Query', url: { __typename?: 'UrlOutputDto', id: number, url: string, shortUrl: string } };

export type CreateUrlMutationVariables = Types.Exact<{
  url: Types.Scalars['String'];
}>;


export type CreateUrlMutation = { __typename?: 'Mutation', generateUrl: { __typename?: 'UrlOutputDto', id: number, url: string, shortUrl: string } };


export const GetUrlDocument = gql`
    query getUrl($shortUrl: String!) {
  url(shortUrl: $shortUrl) {
    id
    url
    shortUrl
  }
}
    `;
export function useGetUrlQuery(baseOptions: Apollo.QueryHookOptions<GetUrlQuery, GetUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUrlQuery, GetUrlQueryVariables>(GetUrlDocument, options);
      }
export function useGetUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUrlQuery, GetUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUrlQuery, GetUrlQueryVariables>(GetUrlDocument, options);
        }
export type GetUrlQueryHookResult = ReturnType<typeof useGetUrlQuery>;
export type GetUrlLazyQueryHookResult = ReturnType<typeof useGetUrlLazyQuery>;
export type GetUrlQueryResult = Apollo.QueryResult<GetUrlQuery, GetUrlQueryVariables>;
export const CreateUrlDocument = gql`
    mutation createUrl($url: String!) {
  generateUrl(url: $url) {
    id
    url
    shortUrl
  }
}
    `;
export function useCreateUrlMutation(baseOptions?: Apollo.MutationHookOptions<CreateUrlMutation, CreateUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUrlMutation, CreateUrlMutationVariables>(CreateUrlDocument, options);
      }
export type CreateUrlMutationHookResult = ReturnType<typeof useCreateUrlMutation>;
export type CreateUrlMutationResult = Apollo.MutationResult<CreateUrlMutation>;
export type CreateUrlMutationOptions = Apollo.BaseMutationOptions<CreateUrlMutation, CreateUrlMutationVariables>;