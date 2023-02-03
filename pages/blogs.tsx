import React from 'react'
import Layout from '../components/Layout'

type Props = {}

const blogs = (props: Props) => {
  return (
    <Layout>
        <div className='text-white'>
            <div className='flex items-center justify-between'>
            <h1 className='text-4xl font-bold'>Recent <span className='primary'>Blogs</span></h1>
            <div className='cursor:pointer text-2xl'><span >New Blogs</span> <span className='primary text-3xl'>+</span></div>
            </div>

        </div>
    </Layout>
  )
}

export default blogs