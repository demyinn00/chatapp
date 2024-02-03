/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateBlogPost = /* GraphQL */ `subscription OnCreateBlogPost {
  onCreateBlogPost {
    id
    title
    content
    likes
    comments {
      nextToken
      __typename
    }
    shares
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBlogPostSubscriptionVariables,
  APITypes.OnCreateBlogPostSubscription
>;
export const onUpdateBlogPost = /* GraphQL */ `subscription OnUpdateBlogPost {
  onUpdateBlogPost {
    id
    title
    content
    likes
    comments {
      nextToken
      __typename
    }
    shares
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBlogPostSubscriptionVariables,
  APITypes.OnUpdateBlogPostSubscription
>;
export const onDeleteBlogPost = /* GraphQL */ `subscription OnDeleteBlogPost {
  onDeleteBlogPost {
    id
    title
    content
    likes
    comments {
      nextToken
      __typename
    }
    shares
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBlogPostSubscriptionVariables,
  APITypes.OnDeleteBlogPostSubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment {
  onCreateComment {
    id
    content
    blogPostId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment {
  onUpdateComment {
    id
    content
    blogPostId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment {
  onDeleteComment {
    id
    content
    blogPostId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
