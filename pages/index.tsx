import { NextPage } from "next";
import Layout from '../components/Layout';
import Link from '../components/Link';

type Props = {
}

const IndexPage: NextPage<Props> = () => {
  return <Layout>
    <div>hello world!</div>
    <div><Link href="/example">Example</Link></div>
  </Layout>
}

export default IndexPage;