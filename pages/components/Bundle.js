import React from 'react';
import { Heading, Page, Layout, Card, TextStyle, FormLayout, TextField } from "@shopify/polaris";
import Header from "./Header.js";
import { Provider } from '@shopify/app-bridge-react';

export default class Index extends React.Component {
  render() {
    return (
      <Page>
        <Header title="Bundle" />
        <Layout>


          <Layout.AnnotatedSection
            id="bundleName"
            title="Bundle name"
            description="Your bundle name will display only in admin."
          >
            <Card sectioned>
              <FormLayout>
                <TextField label="Bundle name" onChange={() => { }} autoComplete="off" />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            id="bundleName"
            title="Bundle name"
            description="Your bundle name will display only in admin."
          >
            <Card sectioned>
              <FormLayout>
                <TextField label="Bundle name" onChange={() => { }} autoComplete="off" />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
          
          <Layout.AnnotatedSection
            id="bundleName"
            title="Bundle name"
            description="Your bundle name will display only in admin."
          >
            <Card sectioned>
              <FormLayout>
                <TextField label="Bundle name" onChange={() => { }} autoComplete="off" />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            id="bundleName"
            title="Bundle name"
            description="Your bundle name will display only in admin."
          >
            <Card sectioned>
              <FormLayout>
                <TextField label="Bundle name" onChange={() => { }} autoComplete="off" />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
          
        </Layout>
      </Page>
    )
  }
};
