export const schema = gql`
  type Comment {
    id: Int!
    post: Post!
    postId: Int!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    comments: [Comment!]! @requireAuth
    comment(id: Int!): Comment @requireAuth
  }

  input CreateCommentInput {
    postId: Int!
    message: String!
  }

  input UpdateCommentInput {
    postId: Int
    message: String
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @requireAuth
    updateComment(id: Int!, input: UpdateCommentInput!): Comment! @requireAuth
    deleteComment(id: Int!): Comment! @requireAuth
  }
`
