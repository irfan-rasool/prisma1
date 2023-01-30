//const { prisma } = require('./generated/prisma-client')

export default {
	Query: {
		user: async (parent: any, args: any, context: any, info: any) => {
			if (args.role !== "AUTHOR") {
				throw new Error('Unauthorized access!')
			}
			if (!args.email) {
				throw new Error('Email Id is not set')
			}
			const users = await context.prisma.user({ email: args.email })
			console.log(JSON.stringify(users));
			return users
		},
		postsByUser: async (parent: any, args: any, context: any, info: any) => {
			if (!args.userId) {
				throw new Error('Author ID is missing!')
			}
			const author = await context.prisma.user({ id: args.userId })
			if (author.role !== "AUTHOR") {
				throw new Error('Unauthorized access!')
			}
			const postss = await context.prisma.user({ id: args.userId }).posts()
			console.log(JSON.stringify(postss));

			return postss
		}
	},

	Mutation: {
		createPost: async (parent: any, args: any, context: any, info: any) => {
			try {
				console.log(JSON.stringify(args))
				const user = await context.prisma.createPost({
					title: args.title,
					published: args.published,
					author: {
						connect: { id: args.userId },
					},
				})
				console.log(JSON.stringify(user));
				return true;
			} catch (err) {
				console.log(JSON.stringify(err));
			}
		},
	},

};
