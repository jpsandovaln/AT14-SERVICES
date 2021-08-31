import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from
} from "@apollo/client";
import FileUpload from "./components/upload";
import React from 'react';
import { createUploadLink } from "apollo-upload-client";
import { ApolloProvider } from '@apollo/react-hooks';

const link = createUploadLink({ uri: "http://localhost:4000/graphql" });

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

function Index() {

  return (
    <ApolloProvider client={client}>
      <FileUpload />
    </ApolloProvider>
  );
}

export default Index;
