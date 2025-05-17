import { render, screen } from '@testing-library/react';
import { FormField } from '@/components/molecules';

describe('FormField Component', () => {
  const renderComponent = ({
    id,
    label,
    error,
    children,
  }: {
    id: string;
    label: string;
    error?: string;
    children: React.ReactNode;
  }) =>
    render(
      <FormField id={id} label={label} error={error}>
        {children}
      </FormField>,
    );

  it('should render the label correctly', () => {
    renderComponent({ id: 'test-id', label: 'Test Label', children: <input /> });
    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'test-id');
  });

  it('should render children correctly', () => {
    renderComponent({
      id: 'test-id',
      label: 'Test Label',
      children: <input data-testid="input" />,
    });
    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
  });

  it('should render the error message if provided', () => {
    renderComponent({
      id: 'test-id',
      label: 'Test Label',
      error: 'This is an error',
      children: <input />,
    });
    const error = screen.getByText('This is an error');
    expect(error).toBeInTheDocument();
  });

  it('should not render the error message if not provided', () => {
    renderComponent({ id: 'test-id', label: 'Test Label', children: <input /> });
    const error = screen.queryByText('This is an error');
    expect(error).not.toBeInTheDocument();
  });
});
