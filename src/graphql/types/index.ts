import { mergeTypeDefs } from "@graphql-tools/merge";
import userType from './userType';
import adminType from './adminType';

// https://www.graphql-tools.com/docs/schema-merging

export const types = [
  userType,
  adminType
];

export default mergeTypeDefs(types);
