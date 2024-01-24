import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello Sara as a text', () => {
    //Arrange
    render(<Greeting />);

    //Act
    // noting...

    //Assert
    const helloSaraElement = screen.getByText('Hello Sara!', { exact: false });
    expect(helloSaraElement).toBeInTheDocument();
  });
});
