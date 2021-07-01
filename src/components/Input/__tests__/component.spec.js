import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Input from '..';

describe('Some component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
