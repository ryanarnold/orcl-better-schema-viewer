import React from 'react';
import Layout from '../components/layout';
import SearchBox from '../components/search/SearchBox';
import { getAllSchemaNames } from '../schemas/schema-functions';

export async function getStaticProps() {
  const schemaList = getAllSchemaNames().map((schema) => ({ name: schema, type: 'Business Service' }));

  return {
    props: { schemaList },
  };
}

export default function Home({ schemaList }) {
  return (
    <Layout>
      <div className="container mt-5">
        <div className="row">
          <h1 className="text-center mt-5 fw-light">A Better Schema Viewer</h1>
        </div>
        <div className="row mt-5">
          <div className="col" />
          <div className="col-8">
            <SearchBox schemaList={schemaList} />
          </div>
          <div className="col" />
        </div>
      </div>
    </Layout>
  );
}
