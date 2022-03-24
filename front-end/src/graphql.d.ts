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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  generateUrl: Url;
  newClick: UrlClick;
};


export type MutationGenerateUrlArgs = {
  url: Scalars['String'];
};


export type MutationNewClickArgs = {
  urlId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  url: Url;
  urls: Array<Url>;
};


export type QueryUrlArgs = {
  shortUrl: Scalars['String'];
};


export type QueryUrlsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Url = {
  __typename?: 'Url';
  clicks: Array<UrlClick>;
  id: Scalars['Int'];
  shortUrl: Scalars['String'];
  url: Scalars['String'];
};

export type UrlClick = {
  __typename?: 'UrlClick';
  date: Scalars['DateTime'];
  id: Scalars['Int'];
};
