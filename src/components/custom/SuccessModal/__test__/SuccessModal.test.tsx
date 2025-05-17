import { render, screen, fireEvent } from '@testing-library/react';
import SuccessModal from '@/components/custom/SuccessModal/SuccessModal';

describe('SuccessModal Component', () => {
  const onCloseMock = jest.fn();

  const renderComponent = (isOpen: boolean, message: string) =>
    render(<SuccessModal isOpen={isOpen} onClose={onCloseMock} message={message} />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should not render when isOpen is false', () => {
    renderComponent(false, 'Operation was successful');
    expect(screen.queryByText('¡Éxito!')).not.toBeInTheDocument();
  });

  it('should render when isOpen is true', () => {
    renderComponent(true, 'Operation was successful');
    expect(screen.getByText('¡Éxito!')).toBeInTheDocument();
    expect(screen.getByText('Operation was successful')).toBeInTheDocument();
  });

  it('should call onClose when the button is clicked', () => {
    renderComponent(true, 'Operation was successful');
    const button = screen.getByRole('button', { name: /aceptar/i });
    fireEvent.click(button);
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('should display the correct message', () => {
    const testMessage = 'This is a success message';
    renderComponent(true, testMessage);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
