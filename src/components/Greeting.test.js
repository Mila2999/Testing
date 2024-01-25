import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders "Hello Sara" as a text', () => {
    //Arrange
    render(<Greeting />);

    //Act
    // noting...

    //Assert
    const helloSaraElement = screen.getByText('Hello Sara!', { exact: false });
    expect(helloSaraElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was NOT clicked', () => {
    render(<Greeting />);

    const paragraphElement = screen.getByText(' good to see you', { exact: false });
    expect(paragraphElement).toBeInTheDocument();
  });

  test('renders "Changed!" if button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
  });

  test('does Not render "good to see yuo" if button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText('good to see you', { exact: false });
    expect(outputElement).toBeNull();
  });
});
