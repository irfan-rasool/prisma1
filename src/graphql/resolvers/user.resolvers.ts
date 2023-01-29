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
			return await context.prisma.user.findMany({ id: args.email, role: "AUTHOR" });
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
