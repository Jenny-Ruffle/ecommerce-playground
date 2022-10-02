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
      <ParagraphLarge>Have a look at the example PDP and PLP via the Navigation</ParagraphLarge>
    </CenterContainer>
  </Template>
)

export default Home
