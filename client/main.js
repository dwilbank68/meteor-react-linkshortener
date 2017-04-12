import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import LinkCreate from './components/LinkCreate';
import LinkList from './components/LinkList';

import {Links} from '../imports/collections/links';

const App = () => {

    return (
        <div className="app">
            <Header/>
            <LinkCreate/>
            <LinkList/>
        </div>
    );
};

Meteor.startup(
    () => {
        ReactDOM.render(
            <App/>,
            document.querySelector('.render-target')
        );
    }
);
