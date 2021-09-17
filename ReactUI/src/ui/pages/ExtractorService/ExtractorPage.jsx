import React from "react";
import SideBar from "../../modules/sidebar/SideBar";
import ExtractService from "../../modules/extract-Service/ExtractService";

import ApolloClient from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createUploadLink({
	uri: "http://localhost:4000/graphql",
});

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

const ExtractorServicePage = (props) => {
	return (
		<ApolloProvider client={client}>
			<SideBar page={ExtractService} imageURL={props.imageURL} />
		</ApolloProvider>
	);
};

export default ExtractorServicePage;
