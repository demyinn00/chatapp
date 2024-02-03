/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBlogPostInput = {
  id?: string | null,
  title: string,
  content?: string | null,
  likes?: number | null,
  shares?: number | null,
};

export type ModelBlogPostConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  shares?: ModelIntInput | null,
  and?: Array< ModelBlogPostConditionInput | null > | null,
  or?: Array< ModelBlogPostConditionInput | null > | null,
  not?: ModelBlogPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type BlogPost = {
  __typename: "BlogPost",
  id: string,
  title: string,
  content?: string | null,
  likes?: number | null,
  comments?: ModelCommentConnection | null,
  shares?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  content: string,
  blogPostId: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBlogPostInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  likes?: number | null,
  shares?: number | null,
};

export type DeleteBlogPostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  blogPostId: string,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  blogPostId?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  blogPostId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type ModelBlogPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  shares?: ModelIntInput | null,
  and?: Array< ModelBlogPostFilterInput | null > | null,
  or?: Array< ModelBlogPostFilterInput | null > | null,
  not?: ModelBlogPostFilterInput | null,
};

export type ModelBlogPostConnection = {
  __typename: "ModelBlogPostConnection",
  items:  Array<BlogPost | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  blogPostId?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type CreateBlogPostMutationVariables = {
  input: CreateBlogPostInput,
  condition?: ModelBlogPostConditionInput | null,
};

export type CreateBlogPostMutation = {
  createBlogPost?:  {
    __typename: "BlogPost",
    id: string,
    title: string,
    content?: string | null,
    likes?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    shares?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogPostMutationVariables = {
  input: UpdateBlogPostInput,
  condition?: ModelBlogPostConditionInput | null,
};

export type UpdateBlogPostMutation = {
  updateBlogPost?:  {
    __typename: "BlogPost",
    id: string,
    title: string,
    content?: string | null,
    likes?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    shares?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogPostMutationVariables = {
  input: DeleteBlogPostInput,
  condition?: ModelBlogPostConditionInput | null,
};

export type DeleteBlogPostMutation = {
  deleteBlogPost?:  {
    __typename: "BlogPost",
    id: string,
    title: string,
    content?: string | null,
    likes?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    shares?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    blogPostId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    blogPostId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    blogPostId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBlogPostQueryVariables = {
  id: string,
};

export type GetBlogPostQuery = {
  getBlogPost?:  {
    __typename: "BlogPost",
    id: string,
    title: string,
    content?: string | null,
    likes?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    shares?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlogPostsQueryVariables = {
  filter?: ModelBlogPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogPostsQuery = {
  listBlogPosts?:  {
    __typename: "ModelBlogPostConnection",
    items:  Array< {
      __typename: "BlogPost",
      id: string,
      title: string,
      content?: string | null,
      likes?: number | null,
      shares?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    blogPostId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      blogPostId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBlogPostSubscriptionVariables = {
};

export type OnCreateBlogPostSubscription = {
  onCreateBlogPost?:  {
    __typename: "BlogPost",
    id: string,
    title: string,
    content?: string | null,
    likes?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    shares?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogPostSubscriptionVariables = {
};

export type OnUpdateBlogPostSubscription = {
  onUpdateBlogPost?:  {
    __typename: "BlogPost",
    id: string,
    title: string,
    content?: string | null,
    likes?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    shares?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogPostSubscriptionVariables = {
};

export type OnDeleteBlogPostSubscription = {
  onDeleteBlogPost?:  {
    __typename: "BlogPost",
    id: string,
    title: string,
    content?: string | null,
    likes?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    shares?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    blogPostId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    blogPostId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    blogPostId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
