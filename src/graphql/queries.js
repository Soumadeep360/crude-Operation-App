/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTaskCommentsMapping = /* GraphQL */ `
  query GetTaskCommentsMapping($commentPath: String!) {
    getTaskCommentsMapping(commentPath: $commentPath) {
      commentPath
      filePath
      orderID
      createdAt
      updatedAt
    }
  }
`;
export const listTaskCommentsMappings = /* GraphQL */ `
  query ListTaskCommentsMappings(
    $commentPath: String
    $filter: ModelTaskCommentsMappingFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTaskCommentsMappings(
      commentPath: $commentPath
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        commentPath
        filePath
        orderID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const commentByFilePath = /* GraphQL */ `
  query CommentByFilePath(
    $filePath: String!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskCommentsMappingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentByFilePath(
      filePath: $filePath
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        commentPath
        filePath
        orderID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
