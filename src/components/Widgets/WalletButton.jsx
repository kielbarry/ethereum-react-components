import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class WalletButton extends Component {
  static displayName = 'WalletButton'

  static propTypes = {
    /** Display text to be displayed as button symbol */
    buttonSymbol: PropTypes.string,
    /** Display text describing button action */
    innerText: PropTypes.string,
    /** Callback to be executed onClick */
    onClick: PropTypes.func
  }

  static defaultProps = {
    buttonSymbol: '+',
    innerText: ''
  }

  handleClick = e => {
    const { onClick } = this.props
    if (onClick) {
      onClick(e)
    }
  }

  render() {
    const { buttonSymbol, innerText } = this.props
    return (
      <StyledButton onClick={this.handleClick}>
        <StyledDiv> {buttonSymbol} </StyledDiv>
        <StyledH3> {innerText} </StyledH3>
      </StyledButton>
    )
  }
}

const StyledButton = styled.button`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 208px;
  min-height: 73.6px;
  padding-left: 64px;
  padding-right: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 0;
  background: none;
  -webkit-transition: background-color 1600ms, opacity 400ms;
  -moz-transition: background-color 1600ms, opacity 400ms;
  -o-transition: background-color 1600ms, opacity 400ms;
  transition: background-color 1600ms, opacity 400ms;
  color: #02a8f3;
  outline: 0;
  cursor: pointer;
  font-size: 100%;
  :hover {
    background-color: #ffffff;
  }
  :focus {
    border-bottom: 1px dotted #02a8f3;
  }
  :active {
    border: 0;
    transform: scale(0.95);
  }
`

const StyledDiv = styled.div`
  position: absolute;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -moz-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  left: 0;
  top: 0;
  bottom: 0;
  width: auto;
  min-width: 44.8px;
  padding: 0 16px;
  background-color: #02a8f3;
  line-height: 100%;
  color: #fafafa;
  font-size: 1.8em;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`

const StyledH3 = styled.h3`
  margin: 0;
  margin-top: 0;
  color: #02a8f3;
  max-width: 140.8px;
  padding: 0;
  text-transform: uppercase;
  text-align: left;
  align-items: center;
  font-weight: 500;
  font-size: 1em;
`