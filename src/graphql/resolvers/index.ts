import { mergeResolvers } from '@graphql-tools/merge';
import { composeResolvers } from '@graphql-tools/resolvers-composition';

import userResolver from './user.resolvers';
import adminResolver from './admin.resolvers';

// https://www.graphql-tools.com/docs/schema-merging/

export const resolversArray = [
    userResolver,
    adminResolver
];

// https://www.graphql-tools.com/docs/resolvers-composition/


export default composeResolvers(
    mergeResolvers(resolversArray)
);
