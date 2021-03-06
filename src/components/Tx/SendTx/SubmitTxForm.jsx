import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Button from '../../Widgets/Button'
import i18n from '../../../i18n'

export default class SubmitTxForm extends Component {
  static displayName = 'SubmitTxForm'

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    unlocking: PropTypes.bool,
    error: PropTypes.bool
  }

  constructor(props) {
    super(props)

    this.state = {
      pw: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { handleSubmit } = this.props
    handleSubmit(this.state)
    this.setState({ pw: '' })
  }

  render() {
    const { pw } = this.state
    const { error, unlocking } = this.props

    if (unlocking) {
      return <UnlockingDiv>{i18n.t('mist.sendTx.unlocking')}</UnlockingDiv>
    }

    return (
      <StyledForm onSubmit={this.handleSubmit} error={error}>
        <StyledInput
          type="password"
          value={pw}
          error={error}
          onChange={e => this.setState({ pw: e.target.value })}
          placeholder={i18n.t('mist.sendTx.enterPassword')}
        />

        <StyledButton error={error} disabled={!pw} type="submit">
          {i18n.t('mist.sendTx.execute')}
        </StyledButton>
      </StyledForm>
    )
  }
}

const StyledForm = styled.form`
  display: flex;
  font-weight: bold;
  border: 1px solid #00aafa;
  border-radius: 6px;
  background-color: white;

  ${props =>
    props.error &&
    css`
      border: 1px solid #f66d6f;
    `}
`

const StyledInput = styled.input`
  color: #00aafa;
  border: none;
  background-color: transparent;
  height: 54px;
  width: 100%;
  padding: 0 12px;
  margin: 0;

  ::placeholder {
    color: black;
  }

  :focus {
    outline: 0;
  }

  ${props =>
    props.error &&
    css`
      color: #f66d6f;

      ::placeholder {
        color: #f66d6f;
      }
    `}
`

const UnlockingDiv = styled.div`
  display: inline-block;
  padding: 10px;
  margin: 20px 0;
  font-size: 1em;
  text-transform: uppercase;
  background: #827a7a;
  color: #fafafa;
  font-weight: 400;
`

const StyledButton = styled(Button)`
  margin: 6px !important;
`
