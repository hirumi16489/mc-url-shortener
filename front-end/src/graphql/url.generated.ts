import * as Types from '../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetUrlQueryVariables = Types.Exact<{
  shortUrl: Types.Scalars['String'];
}>;


export type GetUrlQuery = { __typename?: 'Query', url: { __typename?: 'Url', id: number, url: string, shortUrl: string, clicks: Array<{ __typename?: 'UrlClick', date: any }> } };

export type CreateUrlMutationVariables = Types.Exact<{
  url: Types.Scalars['String'];
}>;


export type CreateUrlMutation = { __typename?: 'Mutation', generateUrl: { __typename?: 'Url', id: number, url: string, shortUrl: string } };

export type CreateUrlCLickMutationVariables = Types.Exact<{
  urlId: Types.Scalars['Int'];
}>;


export type CreateUrlCLickMutation = { __typename?: 'Mutation', newClick: { __typename?: 'UrlClick', date: any } };


export const GetUrlDocument = gql`
    query getUrl($shortUrl: String!) {
  url(shortUrl: $shortUrl) {
    id
    url
    shortUrl
    clicks {
      date
    }
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
export const CreateUrlCLickDocument = gql`
    mutation createUrlCLick($urlId: Int!) {
  newClick(urlId: $urlId) {
    date
  }
}
    `;
export function useCreateUrlCLickMutation(baseOptions?: Apollo.MutationHookOptions<CreateUrlCLickMutation, CreateUrlCLickMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUrlCLickMutation, CreateUrlCLickMutationVariables>(CreateUrlCLickDocument, options);
      }
export type CreateUrlCLickMutationHookResult = ReturnType<typeof useCreateUrlCLickMutation>;
export type CreateUrlCLickMutationResult = Apollo.MutationResult<CreateUrlCLickMutation>;
export type CreateUrlCLickMutationOptions = Apollo.BaseMutationOptions<CreateUrlCLickMutation, CreateUrlCLickMutationVariables>;