import React from 'react'
import Template from '../felaTemplate'
import {HeadingLarge, ParagraphLarge} from '../../components/Fonts'
import CenterContainer from '../../components/CenterContainer'

const Wishlist = () => (
  <Template>
    <CenterContainer>
      <HeadingLarge>Wishlist</HeadingLarge>
    </CenterContainer>
    <CenterContainer>
      <ParagraphLarge>Todo: wishlist view</ParagraphLarge>
    </CenterContainer>
  </Template>
)

export default Wishlist
