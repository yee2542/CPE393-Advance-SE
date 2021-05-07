import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
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

export type AppModel = {
  __typename?: 'AppModel';
  status: Scalars['Int'];
};

export type BookmarkCreateInputDto = {
  note: Scalars['String'];
  original: Scalars['String'];
  owner: Scalars['String'];
  tags: Array<Scalars['String']>;
};

export type BookmarkDto = {
  __typename?: 'BookmarkDTO';
  _id: Scalars['String'];
  createAt?: Maybe<Scalars['DateTime']>;
  domain: Scalars['String'];
  note: Scalars['String'];
  original: Scalars['String'];
  owner: Scalars['String'];
  tags: Array<Scalars['String']>;
  updateAt?: Maybe<Scalars['DateTime']>;
};

export type BookmarkEditInputDto = {
  _id: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  original?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
};

export type BookmarkGetInputDto = {
  bookmarkId: Scalars['String'];
};


export type Mutation = {
  __typename?: 'Mutation';
  addBookmark: BookmarkDto;
  addTagToBookmark: BookmarkDto;
  createAccount: UserResponseDto;
  createTag: TagDto;
  deleteTag: BookmarkDto;
  editBookmark: BookmarkDto;
  editTag: TagDto;
  setArchiveTag: BookmarkDto;
  userLogin: UserLoginResponseDto;
};


export type MutationAddBookmarkArgs = {
  BookmarkCreateInputDTO: BookmarkCreateInputDto;
};


export type MutationAddTagToBookmarkArgs = {
  TagAddToBookmarkDTO: TagAddToBookmarkDto;
};


export type MutationCreateAccountArgs = {
  UserRegisterInputDTO: UserRegisterInputDto;
};


export type MutationCreateTagArgs = {
  TagCreateInputDTO: TagCreateInputDto;
};


export type MutationDeleteTagArgs = {
  BookmarkGetInputDTO: BookmarkGetInputDto;
};


export type MutationEditBookmarkArgs = {
  BookmarkEditInputDTO: BookmarkEditInputDto;
};


export type MutationEditTagArgs = {
  TagEditInputDTO: TagEditInputDto;
};


export type MutationSetArchiveTagArgs = {
  BookmarkGetInputDTO: BookmarkGetInputDto;
};


export type MutationUserLoginArgs = {
  UserLoginInputDTO: UserLoginInputDto;
};

export type Query = {
  __typename?: 'Query';
  allTextSearchBookmark: SearchDto;
  getABookmark: BookmarkDto;
  getAccount: UserResponseDto;
  getRecentBookmark: Array<BookmarkDto>;
  listAllTag: TagListDto;
  searchFilterText: SearchDto;
  serverStatus: AppModel;
};


export type QueryAllTextSearchBookmarkArgs = {
  SearchTextInputDTO: SearchTextInputDto;
};


export type QueryGetABookmarkArgs = {
  bookmarkId: Scalars['String'];
};


export type QueryGetAccountArgs = {
  UserGetAccountInputDTO: Scalars['String'];
};


export type QueryGetRecentBookmarkArgs = {
  limit?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  userId: Scalars['String'];
};


export type QueryListAllTagArgs = {
  owner: Scalars['String'];
};


export type QuerySearchFilterTextArgs = {
  SearchFilterTag: SearchFilterTag;
};

export type SearchDto = {
  __typename?: 'SearchDTO';
  results: Array<BookmarkDto>;
};

export type SearchFilterTag = {
  owner: Scalars['String'];
  tags: Array<Scalars['String']>;
};

export type SearchTextInputDto = {
  owner: Scalars['String'];
  tags?: Maybe<Array<Scalars['String']>>;
  text?: Maybe<Scalars['String']>;
};

export type TagAddToBookmarkDto = {
  _id: Scalars['String'];
  bookmarkId: Scalars['String'];
};

export type TagCreateInputDto = {
  label: Scalars['String'];
  owner: Scalars['String'];
};

export type TagDto = {
  __typename?: 'TagDTO';
  _id: Scalars['String'];
  createAt?: Maybe<Scalars['DateTime']>;
  label: Scalars['String'];
  owner: Scalars['String'];
  updateAt?: Maybe<Scalars['DateTime']>;
};

export type TagEditInputDto = {
  _id: Scalars['String'];
  label?: Maybe<Scalars['String']>;
};

export type TagListDto = {
  __typename?: 'TagListDTO';
  result: Array<TagDto>;
};

export type UserLoginInputDto = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserLoginResponseDto = {
  __typename?: 'UserLoginResponseDTO';
  _id: Scalars['String'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
};

export type UserRegisterInputDto = {
  displayName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponseDto = {
  __typename?: 'UserResponseDTO';
  _id: Scalars['String'];
  createAt?: Maybe<Scalars['DateTime']>;
  deactivate?: Maybe<Scalars['Boolean']>;
  displayName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
};

export type DemoQueryVariables = Exact<{ [key: string]: never; }>;


export type DemoQuery = (
  { __typename?: 'Query' }
  & { serverStatus: (
    { __typename?: 'AppModel' }
    & Pick<AppModel, 'status'>
  ) }
);

export type UserLoginMutationVariables = Exact<{
  user: UserLoginInputDto;
}>;


export type UserLoginMutation = (
  { __typename?: 'Mutation' }
  & { userLogin: (
    { __typename?: 'UserLoginResponseDTO' }
    & Pick<UserLoginResponseDto, '_id' | 'username' | 'displayName' | 'email'>
  ) }
);

export type CreateAccountMutationVariables = Exact<{
  user: UserRegisterInputDto;
}>;


export type CreateAccountMutation = (
  { __typename?: 'Mutation' }
  & { createAccount: (
    { __typename?: 'UserResponseDTO' }
    & Pick<UserResponseDto, '_id' | 'displayName' | 'email' | 'username'>
  ) }
);

export type GetBookmarkByTagsQueryVariables = Exact<{
  opts: SearchFilterTag;
}>;


export type GetBookmarkByTagsQuery = (
  { __typename?: 'Query' }
  & { searchFilterText: (
    { __typename?: 'SearchDTO' }
    & { results: Array<(
      { __typename?: 'BookmarkDTO' }
      & Pick<BookmarkDto, '_id' | 'domain' | 'original' | 'owner' | 'tags' | 'note'>
    )> }
  ) }
);

export type GetTagsByOwnerQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetTagsByOwnerQuery = (
  { __typename?: 'Query' }
  & { listAllTag: (
    { __typename?: 'TagListDTO' }
    & { result: Array<(
      { __typename?: 'TagDTO' }
      & Pick<TagDto, '_id' | 'label' | 'createAt'>
    )> }
  ) }
);


export const DemoDocument = gql`
    query demo {
  serverStatus {
    status
  }
}
    `;

/**
 * __useDemoQuery__
 *
 * To run a query within a React component, call `useDemoQuery` and pass it any options that fit your needs.
 * When your component renders, `useDemoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDemoQuery({
 *   variables: {
 *   },
 * });
 */
export function useDemoQuery(baseOptions?: Apollo.QueryHookOptions<DemoQuery, DemoQueryVariables>) {
        return Apollo.useQuery<DemoQuery, DemoQueryVariables>(DemoDocument, baseOptions);
      }
export function useDemoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DemoQuery, DemoQueryVariables>) {
          return Apollo.useLazyQuery<DemoQuery, DemoQueryVariables>(DemoDocument, baseOptions);
        }
export type DemoQueryHookResult = ReturnType<typeof useDemoQuery>;
export type DemoLazyQueryHookResult = ReturnType<typeof useDemoLazyQuery>;
export type DemoQueryResult = Apollo.QueryResult<DemoQuery, DemoQueryVariables>;
export const UserLoginDocument = gql`
    mutation userLogin($user: UserLoginInputDTO!) {
  userLogin(UserLoginInputDTO: $user) {
    _id
    username
    displayName
    email
  }
}
    `;
export type UserLoginMutationFn = Apollo.MutationFunction<UserLoginMutation, UserLoginMutationVariables>;

/**
 * __useUserLoginMutation__
 *
 * To run a mutation, you first call `useUserLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLoginMutation, { data, loading, error }] = useUserLoginMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUserLoginMutation(baseOptions?: Apollo.MutationHookOptions<UserLoginMutation, UserLoginMutationVariables>) {
        return Apollo.useMutation<UserLoginMutation, UserLoginMutationVariables>(UserLoginDocument, baseOptions);
      }
export type UserLoginMutationHookResult = ReturnType<typeof useUserLoginMutation>;
export type UserLoginMutationResult = Apollo.MutationResult<UserLoginMutation>;
export type UserLoginMutationOptions = Apollo.BaseMutationOptions<UserLoginMutation, UserLoginMutationVariables>;
export const CreateAccountDocument = gql`
    mutation createAccount($user: UserRegisterInputDTO!) {
  createAccount(UserRegisterInputDTO: $user) {
    _id
    displayName
    email
    username
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, baseOptions);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const GetBookmarkByTagsDocument = gql`
    query getBookmarkByTags($opts: SearchFilterTag!) {
  searchFilterText(SearchFilterTag: $opts) {
    results {
      _id
      domain
      original
      owner
      tags
      note
    }
  }
}
    `;

/**
 * __useGetBookmarkByTagsQuery__
 *
 * To run a query within a React component, call `useGetBookmarkByTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookmarkByTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookmarkByTagsQuery({
 *   variables: {
 *      opts: // value for 'opts'
 *   },
 * });
 */
export function useGetBookmarkByTagsQuery(baseOptions: Apollo.QueryHookOptions<GetBookmarkByTagsQuery, GetBookmarkByTagsQueryVariables>) {
        return Apollo.useQuery<GetBookmarkByTagsQuery, GetBookmarkByTagsQueryVariables>(GetBookmarkByTagsDocument, baseOptions);
      }
export function useGetBookmarkByTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookmarkByTagsQuery, GetBookmarkByTagsQueryVariables>) {
          return Apollo.useLazyQuery<GetBookmarkByTagsQuery, GetBookmarkByTagsQueryVariables>(GetBookmarkByTagsDocument, baseOptions);
        }
export type GetBookmarkByTagsQueryHookResult = ReturnType<typeof useGetBookmarkByTagsQuery>;
export type GetBookmarkByTagsLazyQueryHookResult = ReturnType<typeof useGetBookmarkByTagsLazyQuery>;
export type GetBookmarkByTagsQueryResult = Apollo.QueryResult<GetBookmarkByTagsQuery, GetBookmarkByTagsQueryVariables>;
export const GetTagsByOwnerDocument = gql`
    query getTagsByOwner($userId: String!) {
  listAllTag(owner: $userId) {
    result {
      _id
      label
      createAt
    }
  }
}
    `;

/**
 * __useGetTagsByOwnerQuery__
 *
 * To run a query within a React component, call `useGetTagsByOwnerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTagsByOwnerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTagsByOwnerQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetTagsByOwnerQuery(baseOptions: Apollo.QueryHookOptions<GetTagsByOwnerQuery, GetTagsByOwnerQueryVariables>) {
        return Apollo.useQuery<GetTagsByOwnerQuery, GetTagsByOwnerQueryVariables>(GetTagsByOwnerDocument, baseOptions);
      }
export function useGetTagsByOwnerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTagsByOwnerQuery, GetTagsByOwnerQueryVariables>) {
          return Apollo.useLazyQuery<GetTagsByOwnerQuery, GetTagsByOwnerQueryVariables>(GetTagsByOwnerDocument, baseOptions);
        }
export type GetTagsByOwnerQueryHookResult = ReturnType<typeof useGetTagsByOwnerQuery>;
export type GetTagsByOwnerLazyQueryHookResult = ReturnType<typeof useGetTagsByOwnerLazyQuery>;
export type GetTagsByOwnerQueryResult = Apollo.QueryResult<GetTagsByOwnerQuery, GetTagsByOwnerQueryVariables>;