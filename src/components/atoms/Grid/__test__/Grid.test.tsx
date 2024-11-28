import { render, screen } from '@testing-library/react';
import { Grid } from '@/components/atoms/Grid/Grid';

// Define explicit types for Grid props
interface GridProps {
  children: React.ReactNode;
  gap?: number;
  className?: string;
}

// Helper to render Grid with props
const renderGrid = (props: GridProps) => {
  return render(<Grid {...props}>{props.children}</Grid>);
};

describe('Grid Component', () => {
  it('render component with children', () => {
    renderGrid({ children: [<p key="1">Child 1</p>, <p key="2">Child 2</p>] });
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('render component applies the default gap style', () => {
    renderGrid({ children: <p>Default Gap Test</p> });
    const gridElement = screen.getByText('Default Gap Test').parentElement;
    expect(gridElement).toHaveStyle('gap: 16px');
  });

  it('render component applies the gap style based on the prop', () => {
    renderGrid({ children: <p>Gap Test</p>, gap: 24 });
    const gridElement = screen.getByText('Gap Test').parentElement;
    expect(gridElement).toHaveStyle('gap: 24px');
  });

  it('render component include a className prop', () => {
    renderGrid({ children: <p>Class Test</p>, className: 'custom-class' });
    const gridElement = screen.getByText('Class Test').parentElement;
    expect(gridElement).toHaveClass('custom-class');
  });

  it('applies default styles from CSS Modules', () => {
    renderGrid({ children: <p>Default Style Test</p> });
    const gridElement = screen.getByText('Default Style Test').parentElement;
    expect(gridElement).toHaveClass('grid');
  });
});
