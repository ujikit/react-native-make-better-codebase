/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
// import Component from '../src/screens/HomeScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('@react-native-community/async-storage', () => {
  require('@react-native-community/async-storage/jest/async-storage-mock');
});

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('react-native-reanimated', () => {
  const View = require('react-native').View;

  return {
    Value: jest.fn(),
    event: jest.fn(),
    add: jest.fn(),
    eq: jest.fn(),
    set: jest.fn(),
    cond: jest.fn(),
    interpolate: jest.fn(),
    View: View,
    Extrapolate: { CLAMP: jest.fn() },
    Transition: {
      Together: 'Together',
      Out: 'Out',
      In: 'In',
    },
  };
});

// describe('Some component', () => {
//   it('renders correctly', () => {
//     const tree = renderer.create(<Component />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

it('renders correctly', async () => {
  await (async () => {
    renderer.create(<App />);
  });
});
