import { gql } from "apollo-server";

import { uploadFileResolvers } from "./fileUpload/resolvers";
import { uploadFileTypeDefs } from "./fileUpload/typedefs";
import { uploadFileContext } from "./fileUpload/context";

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => "Hello :)",
  },
};

export const typeDefs = [rootTypeDefs, uploadFileTypeDefs];

export const resolvers = [rootResolvers, uploadFileResolvers];

export const contexts = [uploadFileContext];
