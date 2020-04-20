import React from 'react'
import { createRenderer } from 'fela'
import FelaProvider from '../utils/felaProvider'
import Head from 'next/head'

const renderer = createRenderer()

const Template = ({ children }) => (
  <FelaProvider renderer={renderer}>
    <div>
      <Head>
          Ecommerce Playground
      </Head>
      <div>TODO: Brand logo banner</div>
      <div>TODO: Navigation</div>
      {children}
    </div>
  </FelaProvider>
)

export default Template