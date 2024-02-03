/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createBlogPost = /* GraphQL */ `mutation CreateBlogPost(
  $input: CreateBlogPostInput!
  $condition: ModelBlogPostConditionInput
) {
  createBlogPost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBlogPostMutationVariables,
  APITypes.CreateBlogPostMutation
>;
export const updateBlogPost = /* GraphQL */ `mutation UpdateBlogPost(
  $input: UpdateBlogPostInput!
  $condition: ModelBlogPostConditionInput
) {
  updateBlogPost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBlogPostMutationVariables,
  APITypes.UpdateBlogPostMutation
>;
export const deleteBlogPost = /* GraphQL */ `mutation DeleteBlogPost(
  $input: DeleteBlogPostInput!
  $condition: ModelBlogPostConditionInput
) {
  deleteBlogPost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBlogPostMutationVariables,
  APITypes.DeleteBlogPostMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
    id
    content
    blogPostId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
    id
    content
    blogPostId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
    id
    content
    blogPostId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
