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
};

export type Mutation = {
  __typename?: 'Mutation';
  generateUrl: UrlOutputDto;
};


export type MutationGenerateUrlArgs = {
  url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  url: UrlOutputDto;
  urls: Array<UrlOutputDto>;
};


export type QueryUrlArgs = {
  shortUrl: Scalars['String'];
};


export type QueryUrlsArgs = {
  ids?: InputMaybe<Array<Scalars['Float']>>;
};

export type UrlOutputDto = {
  __typename?: 'UrlOutputDto';
  id: Scalars['Int'];
  shortUrl: Scalars['String'];
  url: Scalars['String'];
};
