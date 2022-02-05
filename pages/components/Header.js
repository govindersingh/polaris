import React from 'react';
import ReactDOM from 'react-dom';
import { TitleBar } from '@shopify/app-bridge-react';

export default class Header extends React.Component {
    render(props) {
        console.log(this.props);

        const primaryAction = {
            content: 'Create bundle',
            target: 'APP',
            onAction: () => this.bundleAction()
        };
        const secondaryActions = [
            {
                content: 'Dashboard',
                target: 'APP'
            }
        ];
        const actionGroups = [
            {
                title: 'Menu',
                actions: [
                    {
                        content: 'Settings',
                        target: 'APP'
                    }
                ]
            }
        ];

        return (
            <TitleBar
                title={this.props.title}
                primaryAction={primaryAction}
                secondaryActions={secondaryActions}
                actionGroups={actionGroups}
            />
        );
    }
    bundleAction = () => {
        console.log(this);
    }
}

