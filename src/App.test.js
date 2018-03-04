import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

describe('main page' , () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('displays as expected', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot()
  });
});
