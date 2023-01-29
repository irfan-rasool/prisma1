export default `
  type User {
    id: String!
    email: String
    name: String
    posts: [Post]
  }
  
  type Post {
    id: String!
    title: String
    published: Boolean
  }

  type Query {
    user(
      role: String!
      email: String!
      ): [User]
  }

  type Mutation {
    createPost(
      title: String!
      published: Boolean!
      userId: String!
      ): Boolean! 
  }
`;