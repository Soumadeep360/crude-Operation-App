/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTaskCommentsMapping = /* GraphQL */ `
  mutation CreateTaskCommentsMapping(
    $input: CreateTaskCommentsMappingInput!
    $condition: ModelTaskCommentsMappingConditionInput
  ) {
    createTaskCommentsMapping(input: $input, condition: $condition) {
      commentPath
      filePath
      orderID
      createdAt
      updatedAt
    }
  }
`;
export const updateTaskCommentsMapping = /* GraphQL */ `
  mutation UpdateTaskCommentsMapping(
    $input: UpdateTaskCommentsMappingInput!
    $condition: ModelTaskCommentsMappingConditionInput
  ) {
    updateTaskCommentsMapping(input: $input, condition: $condition) {
      commentPath
      filePath
      orderID
      createdAt
      updatedAt
    }
  }
`;
export const deleteTaskCommentsMapping = /* GraphQL */ `
  mutation DeleteTaskCommentsMapping(
    $input: DeleteTaskCommentsMappingInput!
    $condition: ModelTaskCommentsMappingConditionInput
  ) {
    deleteTaskCommentsMapping(input: $input, condition: $condition) {
      commentPath
      filePath
      orderID
      createdAt
      updatedAt
    }
  }
`;
