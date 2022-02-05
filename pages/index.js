import React from 'react';
import { Page, Navigation } from "@shopify/polaris";
import Bundle from './components/Bundle.js';
import Dashboard from './components/Dashboard.js';

export default class Index extends React.Component {
  render() {

    return (
      <Page>
        <Bundle/>
      </Page>
    )
  }
};
