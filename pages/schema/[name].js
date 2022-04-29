import React, { Component } from 'react';
import Layout from '../../components/layout';
import SearchBox from '../../components/search/SearchBox';
import { SchemaViewer } from '../../components/schema-viewer/schema-viewer';
import { getAllSchemaNames } from '../../schemas/schema-functions';

export async function getStaticPaths() {
  const paths = getAllSchemaNames().map((name) => ({
    params: { name },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const schema = {
    name: params.name,
    type: 'Business Service',
    xml: '<hello></hello>',
  };

  return {
    props: {
      schema,
    },
  };
}

function SchemaPage({ schema }) {
  return (
    <Layout>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col" />
          <div className="col-8">
            <SearchBox />
            <SchemaViewer schema={schema} />
          </div>
          <div className="col" />
        </div>
      </div>
    </Layout>
  );
}

export default SchemaPage;
