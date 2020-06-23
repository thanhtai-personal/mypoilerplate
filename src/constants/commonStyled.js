/**
 * support : Chrome, Edge, Firefox, Opera, Safari
 */

import styled, { keyframes } from 'styled-components'
import styledVariables from './styledVariables'

export const CenterStyled = styled.div`
  width: 100%;
  height: auto;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  margin-top: 50vh;
`
export const CenterWidthStyled = styled.div`
  width: 100vw;
  height: auto;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
`

export const CenterChildrenStyled = styled.div`
  width: 100%;
  height: auto;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
`

export const MarginMenuTopStyled = styled.div`
  margin-top: ${styledVariables.menuHeight}px;
`

export const FixedBottomStyled = styled.div`
  position: fixed;
  bottom: ${styledVariables.bottomFixed}px;
  height: ${styledVariables.timeSliderHeight}px;
`
export const MarginForFixedBottomFrameStyled = styled.div`
  margin-bottom: ${styledVariables.bottomFixed + styledVariables.timeSliderHeight + 5}px;
  position: fixed;
  height: calc(100vh - ${styledVariables.bottomFixed + styledVariables.timeSliderHeight + styledVariables.menuHeight + 5}px);
  width: 97vw;
  overflow-y: auto;
  background-color: lightsteelblue;
  ::-webkit-scrollbar-thumb {
    background: steelblue;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
`

export const CustomScrollBarStyled = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  ::-webkit-scrollbar-thumb {
    background: steelblue;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
`

export const OpacityStyled = styled.div`
  opacity: 0.8;
`

// theme color
export const DarkStyled = styled.div`
  ${styledVariables.fullSize}
  background-color: black;
`
export const LightStyled = styled.div`
  ${styledVariables.fullSize}
  background-color: lightyellow;
`
export const LightRedStyled = styled.div`
  ${styledVariables.fullSize}
  background-color: lightsalmon;
`
export const LightGreenStyled = styled.div`
  ${styledVariables.fullSize}
  background-color: yellowgreen;
`
export const LightBlueStyled = styled.div`
  ${styledVariables.fullSize}
  background-color: mediumaquamarine;
`
export const DarkRedStyled = styled.div`
  ${styledVariables.fullSize}
  background-color: darksalmon;
`
export const DarkGreenStyled = styled.div`
  ${styledVariables.fullSize}
  background-color: darkolivegreen;
`
export const DarkBlueStyled = styled.div`
  ${styledVariables.fullSize}
  background-color: royalblue;
`
//end theme color

export const SmallTextStyled = styled.span`
  font-size: ${styledVariables.smallFontSize}px;

`
export const MakeSpaceStyled = styled.div`
  &.space-10 {
    width: 10px;
  }
  &.space-20 {
    width: 20px;
  }
  &.space-30 {
    width: 30px;
  }
  &.space-40 {
    width: 40px;
  }
  &.space-50 {
    width: 50px;
  }
  height: 100%;
  color: inherit;
`

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`
const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`
export const TypingStyled = styled.div`
  overflow: hidden; 
  border-right: .15em solid orange; 
  white-space: nowrap; 
  margin: 0 auto; 
  letter-spacing: .15em;
  animation: ${typing} 3.5s steps(40, end), ${blinkCaret} .75s step-end infinite;
`

export const HoverTextAnimation = styled.span`
  .content {
    cursor: pointer;
    position: relative;
    display: inline-block;
    background: linear-gradient(to bottom, #000, #000 60%, #fff 60%, #fff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: red;
    background-repeat: no-repeat;
    transition: background 0.5s ease-out;
    white-space: nowrap;
  }
  .content:hover {
    color: #76b6c4;
  }
  :before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 40%;
    background: #76b6c4;
    color: white;
    top: 60%;
  }
  :hover:before {
    top: 80%;
    height: 20%;
    transition: all 0.2s ease-out;
  }
  position: relative;
}
`

export const SelectedTextStyled = styled.span`
user-select: text;
::-moz-selection {
  color: red;
  background: yellow;
}
::selection {
  color: red;
  background: yellow;
}
span {
  user-select: text;  
  ::-moz-selection {
    color: red;
    background: yellow;
  }
  ::selection {
    color: red;
    background: yellow;
  }
}
`
const fade = keyframes`
  from {
    opacity: 0;
    width: 200%;
    height: 200%;
  }
  to {
    opacity: 1
    width: 100%;
    height: 100%;
  }
`

export const AppearAnimationDiv = styled.div`
  animation: ${fade} 3s 1 100ms
`