import React from 'react';
import ContactScreen from './ContactScreen';
import renderer from 'react-test-renderer';

describe('ContactScreen', () => {

  it('displays ContactScreen component', () => {
    const rendered = renderer.create(<ContactScreen />).toJSON();
    expect(rendered).toMatchSnapshot();
  })
});
