import { gql } from 'apollo-server';

const typeDefs =  gql`
  scalar Upload

  type SoundConverter {
    name: String
    filePath: String
  }
  type ImageConverter {
    name: String
    url: String
  }
  type ImageToText {
    id: ID!
    text: String!
    path: String!
    left: String!
    top: String!
    width: String!
    height: String!
  }
  type File {
    _id: String!
    name: String!
    path: String!
    checksum: String!
  }
  type FileML {
    id: ID!
    filename: String!
    mimetype: String!
    path: String!
    Algorithm: String
    Word: String
    Percentage: String
    Second: String
    PathImage: String
  }
  type VideoConverterToMachineLearning {
    id: ID!
    filename: String!
    mimetype: String!
    path: String!
    Algorithm: String
    Word: String
    Percentage: String
    Second: String
    PathImage: String
    name: String!
    filePath: String!
  }

  type filesMetadata
  {
    name: String
    filePath: String
  }

  type VideoConverter
  {
    name: String
    filePath: String
  }

  type PdfImage
  {
    name: String
    filePath: String
  }

  type Query {
    hello: String
    machines: [FileML]
    VideoConverter: [VideoConverter]
    files: [File]
  }
  type Mutation {
    uploadFile(file: Upload!, name: String): File!
    uploadFileML(searchWord: String, algorithm: String, percentage: String, file: Upload!): [FileML!]
    uiToVideoConverter(searchWord: String, algorithm: String, percentage: String, file: Upload!): [VideoConverterToMachineLearning!]
    videoConverter(ratio: String, scale: String, quality: String, angle: String, vflip: String, hflip: String, outputFormat: String, audioFormat: String, obtainFrames: String, frameScale: String, obtainAudio: String, checksum: String, file: Upload!, extractAudioFormat: String): [VideoConverter!]
    metaData(file: Upload!): filesMetadata
    uiToImageText(language: String, file: Upload!): ImageToText
    uiToPdfImage(outputFormat: String, outputSize: String, rotation: String, quality: String, paintEffect: String, type: String, file: Upload!): [PdfImage!]
    uiToImageConvert(outputFormat: String, resize: String, rotate: String, quality: String, doubling: String, paint: String , grayScale: String, monochrome: String, file: Upload!): ImageConverter
    uiToSoundConverter(outputFormat: String, FadeIn: String, FadeOut: String, file: Upload!): [SoundConverter!]
  }
`;

export default typeDefs;
