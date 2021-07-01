import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Header from '..';

describe('Some component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
