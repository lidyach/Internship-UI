import * as React from 'react';

import { Intro } from 'lib/components/basic/Intro';
import { Header } from 'lib/components/complex/Header';

import './Doc.scss';

export class Doc extends React.Component<any, any> {
    render() {
        return (
            <div className='text-center'>
                <Header>Welcome to React</Header>
                <Intro>To get started, edit <code>src/Doc.tsx</code> and save to reload.</Intro>
            </div>
        );
    }
}
