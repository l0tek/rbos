import React from 'react'
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';

export const  Contact = () => {
    return (
    <React.Fragment>
        <NavigationBar />
            <Jumbotron />
            <Layout>         
                <div>
                    <h1>Contact</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
            </Layout>
        </React.Fragment>
    )
}