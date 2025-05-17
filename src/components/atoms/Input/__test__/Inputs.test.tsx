import { render, screen } from '@testing-library/react';
import { Input, Icon } from '@/components/atoms';
import { InputConfig } from '@/config/constants/config';

jest.mock('@/components/atoms/Icon/Icon', () => ({
  Icon: jest.fn(() => <div data-testid="mock-icon" />),
}));

describe('Input Component', () => {
  it('should render the input field with the correct attributes', () => {
    render(<Input id="test-input" placeholder="Enter text" />);
    const inputField = screen.getByPlaceholderText('Enter text');
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute('id', 'test-input');
    expect(inputField).toHaveClass('input__field');
  });

  it('should render the icon when the "icon" prop is provided', () => {
    render(<Input id="test-input" icon="search" />);
    const icon = screen.getByTestId('mock-icon');
    expect(icon).toBeInTheDocument();
    expect(Icon).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'search',
        color: InputConfig.DEFAULT_ICON_COLOR,
        size: InputConfig.DEFAULT_ICON_SIZE,
      }),
      {},
    );
  });

  it('should not render the icon when the "icon" prop is null', () => {
    render(<Input id="test-input" icon={null} />);
    const icon = screen.queryByTestId('mock-icon');
    expect(icon).not.toBeInTheDocument();
  });

  it('should apply additional className if provided', () => {
    render(<Input id="test-input" className="custom-class" />);
    const inputContainer = screen.getByRole('textbox').parentElement;
    expect(inputContainer).toHaveClass('input custom-class');
  });
});
