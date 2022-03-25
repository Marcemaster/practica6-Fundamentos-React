import { Fragment } from 'react';
import Header from './Header';
import Filters from './Filters.js';

function Page({ title, children }) {
  return (
    <Fragment>
      <Header></Header>
      <Filters></Filters>
      <h2 className="layout-title bordered">{title}</h2>
      <section className="layout-content">{children}</section>
    </Fragment>
  );
}

export default Page;
