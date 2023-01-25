// Dependencies
import {render, screen, fireEvent} from '@testing-library/react-native';
import ButtonComponent from '../src/utility/ButtonComponent';
import '@testing-library/jest-dom';

test('Button has correct initial color', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<ButtonComponent />);

  const colorButton = screen.getByRole('buttonRole');

  expect(colorButton).toHaveStyle('style', {backgroundColor: 'red'});

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
  expect(colorButton).toBe('red');
});
