import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { convertToRupiah } from "../app/helpers/utils";

const enhance = compose(
  connect(
    state => ({
      saldo: state.user.currentSaldo
    })
  ),
  withHandlers({
    logoClick: props => (e) => {
      e.preventDefault();
      props.history.push('/')
    }
  })
);

export const Header = enhance(props => {
  return (
    <div className="header">
      <a href={'#'} onClick={props.logoClick} className="header-logo">
          <span className="header-logo-text">
            TokoFlix
          </span>
      </a>
      <div className="header-saldo">
          <span className="header-saldo-text">
            My Saldo : Rp. {convertToRupiah(props.saldo)}
          </span>
      </div>
    </div>
  )
});
