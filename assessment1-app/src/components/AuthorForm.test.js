import { render, screen, fireEvent } from '@testing-library/react';
import AuthorForm from './AuthorForm';

test('submit dummy author name', () => {
  const addAuthor = jest.fn();  // Mock function to simulate the addAuthor prop
  render(<AuthorForm addAuthor={addAuthor} />); 
  
  // Simulate author name being typed into the text field
  fireEvent.change(screen.getByPlaceholderText(/Author Name/i), { target: { value: 'Dion Cheng' } });
  fireEvent.click(screen.getByText(/Submit/i));
  
  // check if addAuthor was called with the correct argument
  expect(addAuthor).toHaveBeenCalledWith('Dion Cheng');
});
