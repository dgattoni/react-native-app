import React from 'react';
import DetailsScreen from './DetailsScreen';
import renderer from 'react-test-renderer';

describe('DetailsScreen', () => {

  it('displays DetailsScreen component', () => {
    const navigation = {
      getParam: jest.fn()
    };
    const rendered = renderer.create(<DetailsScreen navigation={navigation} />)
    expect(rendered).toMatchSnapshot();
  });
});
