import styled from 'styled-components'
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
export const OpacityStyled = styled.div`
  opacity: 0.8;
`
export const DarkStyled = styled.div`
  ${styledVariables.fullSize}
  background-color: black;
`
export const LightStyled = styled.div`
  ${styledVariables.fullSize}
  background-color: white;
`