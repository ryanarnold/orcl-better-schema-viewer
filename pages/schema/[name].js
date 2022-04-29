import React from 'react';
import axios from 'axios';
import Layout from '../../components/layout';
import SearchBox from '../../components/search/SearchBox';
import { SchemaViewer } from '../../components/schema-viewer/schema-viewer';
import getSchemaData, { getAllSchemaNames } from '../../schemas/schema-functions';

export async function getStaticPaths() {
  const paths = getAllSchemaNames().map((name) => ({
    params: { name },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const schema = {
    name: params.name,
    type: 'Business Service',
    xml: getSchemaData(params.name),
  };

  const schemaList = getAllSchemaNames().map((s) => ({ name: s, type: 'Business Service' }));

  const getXpathResults = await axios({
    method: 'post',
    url: 'https://xpath-builder.herokuapp.com/',
    data: { xml: schema.xml },
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return {
    props: {
      schema,
      schemaList,
      xmlData: getXpathResults.data.paths,
    },
  };
}

function SchemaPage({ schema, schemaList, xmlData }) {
  return (
    <Layout>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col" />
          <div className="col-8">
            <SearchBox schemaList={schemaList} />
            <SchemaViewer schema={schema} xmlData={xmlData} />
          </div>
          <div className="col" />
        </div>
      </div>
    </Layout>
  );
}

export default SchemaPage;
