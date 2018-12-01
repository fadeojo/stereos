import React from 'react';
import { render } from 'react-testing-library';
import App from './App';
import './locales/i18n';

it('renders without crashing', () => {
    const { queryByText } = render(<App />);
    const reactLink = queryByText('Learn React');
    expect(reactLink).toBeTruthy();
});
