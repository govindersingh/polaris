import React from 'react';
import { EmptyState, Page, Layout } from "@shopify/polaris";
import Header from "./Header.js";
import { Provider } from '@shopify/app-bridge-react';

export default class Index extends React.Component {
    render() {
        return (
            <Page>
                <Header title="Dashboard" />
                <Layout>
                    <EmptyState // Empty state component
                        heading="Lets proceed to create your product bundle!"
                        action={{
                            content: 'Create Bundle'
                        }}
                        image='https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg'
                    >
                        <p>Create bundle and increase you bussiness now.</p>
                    </EmptyState>
                </Layout>
            </Page>
        )
    }
};
