import React from 'react'
import Template from './felaTemplate'
import {HeadingLarge, ParagraphLarge} from '../components/Fonts'
import CenterContainer from '../components/CenterContainer'

const Home = () => (
  <Template>
    <CenterContainer>
      <HeadingLarge>Home</HeadingLarge>
    </CenterContainer>
    <CenterContainer>
      <ParagraphLarge>Here is an example Product listing/details page</ParagraphLarge>
    </CenterContainer>
  </Template>
)

export default Home
