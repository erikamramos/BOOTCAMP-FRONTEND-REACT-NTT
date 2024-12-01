import { render, RenderResult, screen } from '@testing-library/react';
import { Card } from '@/components/molecules';

const renderComponent = (children: React.ReactNode): RenderResult => {
  return render(<Card>{children}</Card>);
};

describe('Card Component', () => {
  it('should render children correctly', () => {
    renderComponent(<p>Test Content</p>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should apply the correct class name', () => {
    const { container } = renderComponent(<p>Test Content</p>);
    const cardElement = container.firstChild;
    expect(cardElement).toHaveClass('card');
  });
});
