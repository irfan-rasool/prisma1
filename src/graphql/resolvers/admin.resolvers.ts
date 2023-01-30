const { prisma } = require('./../../../generated/prisma-client')

export default {
	Query: {
		users: async (parent: any, args: any, context: any, info: any) => {
			if (args.role !== "ADMIN") {
				throw new Error('Unauthorized access!')
			}

			return await context.prisma.users();
		},
		posts: async (parent: any, args: any, context: any, info: any) => {
			if (args.role !== "ADMIN") {
				throw new Error('Unauthorized access!')
			}
			if (!args.email) {
				throw new Error('Email Id is not set')
			}
			return await context.prisma.posts();
		},
		publishedPosts: async (parent: any, args: any, context: any, info: any) => {
			if (args.role !== "ADMIN") {
				throw new Error('Unauthorized access!')
			}
			return await context.prisma.posts({ where: { published: true } })
		}
	},

	Mutation: {
		createUser: async (parent: any, args: any, context: any, info: any) => {
			try {
				if (args.role !== "ADMIN") {
						throw new Error('Unauthorized access!')
				}
					console.log(JSON.stringify(args))
				const user = await context.prisma.createUser(
					{
						name: args.name,
						email: args.email,
						role: "AUTHOR"
					})
				console.log(user)
				return true;
			} catch (err) {
				console.log(JSON.stringify(err));
			}
		},
	},

};
