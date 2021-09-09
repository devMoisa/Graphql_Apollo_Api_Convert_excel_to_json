const finished = require("stream-promise");
const { GraphQLUpload } = require("graphql-upload");
import { convertXlsxToJsonService } from "../../services/convert-xlsx-to-json-service/index";

export const uploadFileResolvers = {
  Upload: GraphQLUpload,

  Mutation: {
    singleUpload: async (parent: any, { file }: any) => {
      const { createReadStream, filename, mimetype, encoding } = await file;
      const stream = createReadStream();
      const out = require("fs").createWriteStream(
        `./src/tmp/uploads/${filename}`,
      );

      const streamPipe = stream.pipe(out);
      await finished(out);
      convertXlsxToJsonService.convert(streamPipe, filename);

      return { filename, mimetype, encoding };
    },
  },
};
