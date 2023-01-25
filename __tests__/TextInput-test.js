import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';

const Example = () => {
  const [value, setValue] = useState('');
  return <TextInput value={value} onChangeText={setValue} testID="input" />;
};

test('TextInput test', () => {
  const {getByTestId} = render(<Example />);
  const input = getByTestId('input');
  fireEvent.changeText(input, 'abc@gmail.com');
  expect(input.props.value).toBe('abc@gmail.com');
});
