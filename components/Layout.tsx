import { NextPage } from "next";
import { Typography } from "@material-ui/core";

type Props = {
}

const Layout: NextPage<Props> = ({children}) => {
  return <>
    <Typography variant="h1">Layout</Typography>
    {children}
  </>
}

export default Layout;