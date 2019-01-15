import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ReactSelect from 'react-select'
import styled from 'styled-components'
import Identicon from '../../Identicon'
import { combineWallets } from '../../../util/helpers';

export default class AddressSelect extends Component {
  static displayName = 'AddressSelect';

  static propTypes = {
    disabled: PropTypes.bool,
    wallets: PropTypes.object,
    walletContracts: PropTypes.object,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    wallets: {},
    walletContracts: {},
  };

  state = {
    selectedWallet: '',
    combinedWallets: [],
  }

  componentDidMount() {
    const { wallets, walletContracts, onChange } = this.props;
    const combinedWallets = combineWallets(wallets, walletContracts);
    const address = combinedWallets[0] ? combinedWallets[0].address : ''
    this.setState(
      { combinedWallets, selectedWallet: address },
      onChange(combinedWallets[0])
    )
  }

  selectAddress = e => {
    console.log(e)
    console.log(e.value)
    console.log(e.target)
    // console.log(e.target.value)
    const { onChange } = this.props;
    // this.setState({ selectedWallet: e.target.value }, onChange(e))
    this.setState({ selectedWallet: e }, onChange(e))
  }

  render() {
    const { disabled } = this.props;
    const { combinedWallets, selectedWallet } = this.state
    console.log(this.state)

    let options = combinedWallets.map(w => {
      return {
        value: w.address,
        label :w.addressType === 'wallet' 
          ? `🔑 ${w.name}` + ` - ${w.balance} ETHER`
          : w['contract-name'] + ` - ${w.balance} ETHER`,
        ...w
      }
    })

    return (
      <React.Fragment>
        <StyledDiv>
          <StyledSelect
            onChange={this.selectAddress}
            disabled={disabled}
            value={selectedWallet}
          > 
            {combinedWallets.map(w => {
              return (
                <StyledOption key={w.address} value={w.address}>
                  {
                    w.addressType === 'wallet'
                      ? `🔑 ${w.name}`
                      : w['contract-name'] 
                    + ` - ${w.balance} ETHER`
                  }
                </StyledOption>
              );
            })}
          </StyledSelect>
          <StyledIdenticon
            size={'tiny'}
            address={selectedWallet}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledReactSelect
            classNamePrefix="kielkielkielkielkiel"
            options={options} 
            onChange={this.selectAddress}
            disabled={disabled}
            defaultValue={selectedWallet}
          />
          <StyledIdenticon
            size={'tiny'}
            address={selectedWallet.address}
          />
        </StyledDiv>
      </React.Fragment>
    );
  }
}


const StyledReactSelect = styled(ReactSelect)`
  & .kielkielkielkielkiel__control {
    display: inline-block;
    max-width: 100%;
    padding: 9.2px 16px;
    padding-bottom: 6.13333333px;
    border: 0;
    border-bottom: solid 2px #dddcdb;
    box-sizing: border-box;
    background-color: #f5f4f2;
    font-size: 1em;
    font-weight: 300;
    z-index: 1;
    margin-top: 0;
    padding-left: 41.6px;
    padding-right: 0;
    transition-delay: 0s;
    transition: background-color ease-in-out 1s, color ease-in-out 1s;
    -webkit-appearance: none;
    border-radius: 0;
    height: 36px;
    line-height: 18px;
    color: #02a8f3;
    width: 100%;
  }

  & .kielkielkielkielkiel__single-value {
    color: #02a8f3;
  }

  & .kielkielkielkielkiel__input {
    color: #02a8f3;
  }

  & .kielkielkielkielkiel__value-container {
    height: 100%;
    padding-left: 0px;
    margin-left: 0px;
  }
  & .kielkielkielkielkiel__indicators {
    display:none;
  }

  & .kielkielkielkielkiel__indicators {}

  & .kielkielkielkielkiel__option {
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px 8px;
    color: #02a8f3;
    line-height: 18px;
    font-size: 1em;
  }
`


const StyledOption = styled.option`
  font-weight: normal;
  display: block;
  white-space: pre;
  min-height: 1.2em;
  padding: 0px 2px 1px;
  color: #02a8f3;
  line-height: 18px;
  font-size: 1em;
`
const StyledSelect = styled.select`
  display: inline-block;
  max-width: 100%;
  padding: 9.2px 16px;
  padding-bottom: 6.13333333px;
  border: 0;
  border-bottom: solid 2px #dddcdb;
  box-sizing: border-box;
  background-color: #f5f4f2;
  font-size: 1em;
  font-weight: 300;
  z-index: 1;
  margin-top: 0;
  padding-left: 41.6px;
  padding-right: 0;
  transition-delay: 0s;
  transition: background-color ease-in-out 1s, color ease-in-out 1s;
  -webkit-appearance: none;
  border-radius: 0;
  height: 36px;
  line-height: 18px;
  color: #02a8f3;
  width: 100%;
`

const StyledDiv = styled.div`
  display: block;
  box-sizing: border-box;
  position: relative;
`

const StyledIdenticon = styled(Identicon)`
  top: 6px;
  z-index: 2;
  position: absolute;
  left: 8px;
  width: 26.66666667px;
  height: 26.66666667px;
  cursor: help;
  transition: border-radius 2.5s;
  transition-delay: 3s;
`
