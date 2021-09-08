const finished = require("stream-promise");
const { GraphQLUpload } = require("graphql-upload");

export const uploadFileResolvers = {
  Upload: GraphQLUpload,

  Mutation: {
    singleUpload: async (parent: any, { file }: any) => {
      const { createReadStream, filename, mimetype, encoding } = await file;
      const stream = createReadStream();
      // const out = require("fs").createWriteStream(`./src/tmp/${filename}`);
      const out = require("fs").createWriteStream(`./src/tmp/${filename}`);

      stream.pipe(out);

      await finished(out);

      return { filename, mimetype, encoding };
    },
  },
};
