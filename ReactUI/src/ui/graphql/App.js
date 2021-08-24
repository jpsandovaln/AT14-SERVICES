import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetFiles from "./components/getFiles";
import Form from "./components/form";
import React, { useState } from 'react';
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Typography } from "@material-ui/core";


const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000/" })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});



function App() {

    return (
    <ApolloProvider client={client}>
      <Breadcrumbs aria-label="breadcrumb">
				<Link color="inherit" href="/" onClick={""}>
					Home
				</Link>
				<Typography color="textPrimary">Report Convert</Typography>
			</Breadcrumbs>
      <div>
        <Form />
      </div>
      <br />
        <GetFiles />
    </ApolloProvider>
  );
}

export default App;
