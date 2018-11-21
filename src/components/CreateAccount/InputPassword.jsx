import React, { Component } from 'react'
import i18n from '../../i18n'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import './InputPassword.scss'

class InputPassword extends Component {
  
  static displayName = 'InputPassword'

  static propTypes = {
    className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    /** placeholder when there is no value */
    placeholder: PropTypes.string,
    /** handles value changes */
    onChange: PropTypes.func.isRequired,
    /** value to initialize the input field */
    value: PropTypes.string,
    /** true: input is visible as plaintext */
    show: PropTypes.bool
  }

  static defaultProps = {
    value: '',
    placeholder: '',
    show: false,
  }
  constructor(props) {
    super(props)
    this.state = {
      showPassword: this.props.show === true
    }
  }
  render() {
    return (
    <div className="input-password">
      <Input
        autoFocus
        type={this.state.showPassword ? 'text' : 'password'}
        placeholder={this.props.placeholder}
        className={this.props.className}
        value={this.props.value}
        onChange={this.props.onChange}
      />
      <div className="show-password-container">
        <Checkbox
          id="show-password-checkbox"
          type="checkbox"
          name="elements_input_bool"
          checked={this.state.showPassword}
          onChange={() =>
            this.setState({ showPassword: !this.state.showPassword })
          }
        />
        <CheckboxLabel htmlFor="show-password-checkbox">
          {i18n.t('mist.popupWindows.importAccount.buttons.showPassword')}
        </CheckboxLabel>
      </div>
    </div>
    )
  }
}

export default InputPassword

const Input = styled.input`
  border: 0;
  border-bottom: solid 2px #ccc6c6;
  background-color: #f5f4f2;
  color: #4a90e2;
  width: 300px;
  max-width: 100%;
  margin-top: 18px;
  padding: 6px 16px;
  padding-bottom: 4px;
  font-size: 1em;
  font-weight: 300;

  &:focus {
    outline: 0;
    border-color: #4a90e2;
  }
`

const Checkbox = styled.input`
  display: inline-block;
  position: relative;
  margin: 0;
  outline: none !important;
  -webkit-appearance: none;
  margin-left: 16px;
  width: 24px;
  height: 24px;

  &::before {
    content: '';
    position: relative;
    top: 0;
    left: 0;
    display: block;
    background: #f5f4f2;
    border: 1px solid inset #f5f4f2;
    box-shadow: inset 0 0 2px rgba(0,0,0,0.2);
    width: 24px;
    height: 24px;
  }

  &:focus::before {
    border-color: rgba(74,144,226,0.4);
  }

  &:disabled::before {
    cursor: not-allowed;
    background-color: rgba(245,244,242,0.8);
    border-color: #f5f4f2;
  }

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 6px;
    left: 6px;
    background: #4a90e2;
    box-shadow: 0 0px 1px rgba(0,0,0,0.3);
    width: 12px;
    height: 12px;
    transition: transform 400ms;
    transform: scale(0);
  }

  &:checked:after {
    transform: scale(1);
  }

  &:disabled:after {
    background: rgba(245,244,242,0.4);
  }
`

const CheckboxLabel = styled.label`
  position: relative;
  top: -7px;
  left: 6px;
  opacity: 0.9;
  font-size: 14px;
  font-weight: 300;
`
