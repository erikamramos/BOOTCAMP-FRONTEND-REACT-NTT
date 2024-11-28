import { render, screen } from '@testing-library/react';
import { Column } from '@/components/atoms/Column/Column';

const renderComponent = (
  props: { children: JSX.Element; span?: number; className?: string } = {
    children: <p>Default Test</p>,
    span: 1,
    className: '',
  },
) => {
  return render(<Column {...props}>{props.children}</Column>);
};

describe('Column Component', () => {
  it('render component with children', () => {
    renderComponent({ children: <p>Test Content</p> });
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('render component include a className prop', () => {
    renderComponent({ children: <p>Class Test</p>, className: 'custom-class' });
    const columnElement = screen.getByText('Class Test').parentElement;
    expect(columnElement).toHaveClass('custom-class');
  });

  it('applies default styles from CSS Modules', () => {
    renderComponent({ children: <p>Default Style Test</p> });
    const columnElement = screen.getByText('Default Style Test').parentElement;
    expect(columnElement).toHaveClass('col');
  });
});
