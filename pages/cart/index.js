import React from 'react'
import Template from '../felaTemplate'
import {HeadingLarge, ParagraphLarge} from '../../components/Fonts'
import CenterContainer from '../../components/CenterContainer'

const Cart = () => (
  <Template>
    <CenterContainer>
      <HeadingLarge>Cart</HeadingLarge>
    </CenterContainer>
    <CenterContainer>
      <ParagraphLarge>Todo: Cart view</ParagraphLarge>
    </CenterContainer>
  </Template>
)

export default Cart
