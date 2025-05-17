import { render, screen } from '@testing-library/react';
import { Icon } from '@/components/atoms';

const renderComponent = (props = { name: 'search' }) => {
  return render(<Icon {...props} />);
};

describe('Icon Component', () => {
  it('renders component', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
    expect(screen.getByLabelText(`icon-search`)).toBeInTheDocument();
  });
});
