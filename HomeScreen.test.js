import React from 'react';
import HomeScreen from './HomeScreen';
import renderer from 'react-test-renderer';

describe('HomeScreen', () => {
  it('displays HomeScreen component', () => {
    const rendered = renderer.create(
      <HomeScreen width="320" />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
