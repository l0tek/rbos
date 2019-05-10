import React from 'react'
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';

export const  NoMatch = () => {
    return (
        <React.Fragment>
            <NavigationBar />
                <Jumbotron />
                <Layout>          
                    <div>
                        <h1>404 No Match</h1>
                    </div>
                </Layout>
            </React.Fragment>
    )
}