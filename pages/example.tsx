import { NextPage } from "next";
import Example from "../components/Example";
import ErrorBoundary from "../components/ErrorBoundary";
import Layout from "../components/Layout";

type Props = {
}

const ExamplePage: NextPage<Props> = () => {
  return <Layout>
    <ErrorBoundary fallback={error => <div>An error has occurred: {error.message}</div>}>
      <div>example page<br /><Example /></div>
    </ErrorBoundary>
  </Layout>
}

export default ExamplePage;