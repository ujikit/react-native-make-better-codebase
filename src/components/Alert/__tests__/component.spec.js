import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Alert from '..';

describe('Some component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Alert />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
