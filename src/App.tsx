import React, { Component } from 'react';
import { withNamespaces, WithNamespaces } from 'react-i18next';
import './App.css';
import logo from './logo.svg';

class App extends Component<WithNamespaces, {}> {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <p>{this.props.t('name')}</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default withNamespaces()(App);
