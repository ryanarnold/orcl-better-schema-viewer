import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className='container mt-5'>
        <div className='row'>
          <h1 className='text-center mt-5 fw-light'>A Better Schema Viewer</h1>
        </div>
        <div className='row mt-5'>
          <div className='col'></div>
          <div className='col-8'>
          <input type="text" className="form-control" id="searchBox" placeholder="Search for a schema"/>
          </div>
          <div className='col'></div>
        </div>
      </div>
    </Layout>
  )
}
