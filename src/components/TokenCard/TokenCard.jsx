import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { EthAddress } from '../EthAddress'
import { Identicon } from '../Identicon'

export class TokenCard extends Component {
  static displayName = 'Identicon'

  // static propTypes = {
  //   address: PropTypes.string,
  //   anonymous: PropTypes.bool,
  //   size: PropTypes.oneOf(['nano', 'tiny', 'small', 'medium', 'large'])
  // }

  // deleteTokenModal(e) {
  //   this.props.tokenToDelete(this.props.token);
  //   this.props.displayModal('displayDeleteToken');
  // }

  // renderBalance() {
  //   const token = this.props.token;
  //   return (
  //     <span className="account-balance">
  //       {token.totalSupply}
  //       <span>{token.symbol}</span>
  //     </span>
  //   );
  // }

  render() {
    // const GeoPattern = require('geopattern');
    // const pattern = GeoPattern.generate('0x000', { color: '#CCC6C6' });
    // const iconStyle = { backgroundImage: pattern.toDataUrl() };

    const iconStyle = 'asdf'
    // const token = this.props.token;
    // Object.assign({}, { color: '#CCC6C6' })

    //sha1 is create, update, digest

    // sha1(string)

    //     var GeoPattern = module.exports = {
    //   generate: optArgs(function (string, options) {
    //     return new Pattern(string, options);
    //   })
    // };

    const address =
      token === {} || token.address === '' ? makeID() : token.address

    return (
      <div className="wallet-box tokens" style={iconStyle}>
        <Identicon
          classes="dapp-identicon dapp-small"
          title
          size="small"
          address={address}
        />
        <h3>{token.name}</h3>
        <button
          className="delete-token"
          // onClick={e => this.deleteTokenModal(e)}
        >
          <i className="icon-trash" />
        </button>
        {/*{this.renderBalance()}*/}
        this would be the balance
        <EthAddress short classes="account-id" address={address} />
      </div>
    )
  }
}

export default TokenCard
