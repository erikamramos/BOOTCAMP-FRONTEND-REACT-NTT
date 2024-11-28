import { render, screen } from '@testing-library/react';
import { Button } from '@/components/atoms/Button/Button';

const renderComponent = (props = { children: 'Click me' }) => {
  return render(<Button {...props}>{props.children}</Button>);
};

describe('Button Component', () => {
  it('renders component', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  it('renders with different children', () => {
    renderComponent({ children: 'Submit' });
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });
});
