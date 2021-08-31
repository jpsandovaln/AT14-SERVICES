import React from "react";
import SideBar from "../../modules/sidebar/SideBar";
import MachineLearning from "../../modules/machine-learning/MachineLearning";

import ApolloClient from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createUploadLink({
	uri: 'http://localhost:4000/graphql',
});
  
const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

const MachineLearningPage = () => {
	return (
		<ApolloProvider client={client}>
			<SideBar page={MachineLearning} />
		</ApolloProvider>
	);	
};

export default MachineLearningPage;
