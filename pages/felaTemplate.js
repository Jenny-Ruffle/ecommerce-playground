import React from 'react'
import { createRenderer } from 'fela'
import FelaProvider from '../utils/felaProvider'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import { BasketContextProvider } from '../state/basket'
import { WishlistContextProvider } from '../state/wishlist'

const renderer = createRenderer()

const OverpassRegularFile = ['./static/fonts/Overpass-Regular.ttf']
const OverpassBoldFile = ['./static/fonts/Overpass-Bold.ttf']
const OverpassLightFile = ['./static/fonts/Overpass-Light.ttf']
const PlayfairDisplayFile = ['./static/fonts/PlayfairDisplay-Regular.ttf']
const PlayfairDisplayItalicFile = ['./static/fonts/PlayfairDisplay-Italic.ttf']
const PlayfairDisplayBoldFile = ['./static/fonts/PlayfairDisplay-Bold.ttf']

renderer.renderFont('Overpass', OverpassRegularFile)
renderer.renderFont('Overpass-Bold', OverpassBoldFile, { fontWeight: 'bold' })
renderer.renderFont('Overpass-Light', OverpassLightFile, { fontWeight: 'light'})
renderer.renderFont('PlayfairDisplay', PlayfairDisplayFile)
renderer.renderFont('PlayfairDisplay-Italic', PlayfairDisplayItalicFile, { fontStyle: 'italic' })
renderer.renderFont('PlayfairDisplay-Bold', PlayfairDisplayBoldFile, { fontWeight: 'bold'})

const Template = ({ children }) => (
  <FelaProvider renderer={renderer}>
    <BasketContextProvider >
      <WishlistContextProvider >
        <div>
          <Head>
              Ecommerce Playground
          </Head>
          <Navigation/>
          {children}
        </div>
      </WishlistContextProvider>
    </BasketContextProvider>
  </FelaProvider>
)

export default Template