import Footer from './Footer'
import Header from './Header'
import { Fragment } from "react";


export default function Layout({children}) {
  return (
    <Fragment>
      <Header/>
      {children}
      <Footer />
    </Fragment>
  );
}
