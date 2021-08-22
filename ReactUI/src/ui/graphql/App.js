import "./App";
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
      {" "}
      <GetFiles />
      {/*<Form />*/}
    </ApolloProvider>
  );
}

export default App;
