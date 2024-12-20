import { render, screen } from '@testing-library/react';
import { Button } from '@/components/atoms/Button/Button';

const renderComponent = (props = { children: 'Click me' }) => {
  return render(<Button {...props}>{props.children}</Button>);
};

// basta con el snapshot no es necesario el tobeinthedocument
describe('Button Component', () => {
  it('renders component', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders with different children', () => {
    const { container } = renderComponent({ children: 'Submit' });
    expect(container).toMatchSnapshot();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});
