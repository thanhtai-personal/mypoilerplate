import React from 'react'
import { DarkStyled, LightStyled } from 'root/constants/commonStyled'
import CONSTANTS from 'root/constants/constants'
const { themeEnum } = CONSTANTS

const getTheme = (key) => {
  switch(key) {
    case themeEnum.dark:
      return DarkStyled
    default: 
      return LightStyled
  }
}

const MultiThemeWrapper = (ComposedComponent) => {
  class MultiThemeWrapperComponent extends React.PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        themeKey: themeEnum.light
      }
      this.setTheme = this.setTheme.bind(this)
    }

    setTheme (key) {
      this.setState({ themeKey: key })
    }

    render () {
      const { themeKey } = this.state
      const ThemeStyled = getTheme(themeKey)
      return (
        <ThemeStyled>
          <ComposedComponent themeKey={themeKey} setTheme={this.setTheme} {...this.props} />
        </ThemeStyled>
      )
    }
  }
  return MultiThemeWrapperComponent
}

export default MultiThemeWrapper