export default `
  type User {
    id: String!
    email: String
    name: String
    posts: [Post!]!
  }
  
  type Post {
    id: String!
    title: String
    published: Boolean
    author: User
  }

  input UserFilter {
    role: String!
    email: String!
  }

  type Query {
    user(
      role: String!
      email: String!
      ): User
    postsByUser(userId: ID!): [Post!]!
  }

  type Mutation {
    createPost(
      title: String!
      published: Boolean!
      userId: String!
      ): Boolean! 
  }
`;