import { Fragment } from "react";
import Header from "./Header";

function Page({ title, children }) {
  return (
    <Fragment>
      <h2 className='layout-title bordered'>{title}</h2>
      <section className='layout-content'>{children}</section>
    </Fragment>
  );
}

export default Page;
