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
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message}) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000/graphql" })]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

function App() {
  const [t, i18n] = useTranslation("global");
  return (
    <ApolloProvider client={client}>
      <Breadcrumbs aria-label="breadcrumb">
				<Link color="inherit" href="/" onClick={""}>
          {t("report-convert.home")}
				</Link>
				<Typography color="textPrimary">{t("report-convert.title")}</Typography>
			</Breadcrumbs>
      <GetFiles />
    </ApolloProvider>
  );
}

export default App;
