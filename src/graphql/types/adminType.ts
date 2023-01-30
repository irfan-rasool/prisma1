export default `
  type Author {
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
    users(
      role: String!
      email: String
      ): [Author]

    posts(
      role: String!
      ): [Post] 

    publishedPosts: [Post!]!

  }

  type Mutation {
    createUser(
      email: String!
      name: String!
      role: String!
      ): Boolean! 

    publish(postId: ID!): Post
  }
`;