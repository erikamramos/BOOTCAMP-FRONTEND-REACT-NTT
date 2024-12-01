import { render, screen } from '@testing-library/react';
import { Grid } from '@/components/atoms/Grid/Grid';

interface GridProps {
  children: React.ReactNode;
  gap?: number;
  className?: string;
}

const renderComponent = (props: GridProps) => {
  return render(<Grid {...props}>{props.children}</Grid>);
};

describe('Grid Component', () => {
  it('render component with children', () => {
    renderComponent({ children: [<p key="1">Child 1</p>, <p key="2">Child 2</p>] });
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('render component applies the default gap style', () => {
    renderComponent({ children: <p>Default Gap Test</p> });
    const gridElement = screen.getByText('Default Gap Test').parentElement;
    expect(gridElement).toHaveStyle('gap: 16px');
  });

  it('render component applies the gap style based on the prop', () => {
    renderComponent({ children: <p>Gap Test</p>, gap: 24 });
    const gridElement = screen.getByText('Gap Test').parentElement;
    expect(gridElement).toHaveStyle('gap: 24px');
  });

  it('render component include a className prop', () => {
    renderComponent({ children: <p>Class Test</p>, className: 'custom-class' });
    const gridElement = screen.getByText('Class Test').parentElement;
    expect(gridElement).toHaveClass('custom-class');
  });

  it('render component include default className', () => {
    renderComponent({ children: <p>Default Class Test</p> });
    const gridElement = screen.getByText('Default Class Test').parentElement;
    expect(gridElement).toHaveClass('grid');
  });
});
