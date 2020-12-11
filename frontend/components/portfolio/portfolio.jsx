import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import HeaderPage from '../header/header_page';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderPage>
        Portfolio aqui
      </HeaderPage>
    );
  }
}
