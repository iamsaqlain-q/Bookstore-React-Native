import React from 'react';
import renderer from 'react-test-renderer';
import SignInPage from '../src/utility/SignInPage';
import {render, fireEvent} from '@testing-library/react-native';

test('SignIn renders correctly', () => {
  const element = renderer.create(<SignInPage />).toJSON();
  expect(element).toMatchSnapshot();
});

it('renders SignIn', () => {
  const element = renderer.create(<SignInPage />).toJSON();
  expect(element).toMatchSnapshot();
});

test('TextInput test', () => {
  const {getByTestId} = render(<SignInPage />);
  const input = getByTestId('emailInput');
  fireEvent.changeText(input, 'abc@gmail.com');
  expect(input.props.value).toBe('abc@gmail.com');
});
