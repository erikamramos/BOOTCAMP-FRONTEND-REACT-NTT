import { render, RenderResult, screen } from '@testing-library/react';
import CustomFooter from '@/components/custom/CustomFooter/CustomFooter';

const renderComponent = async (): Promise<RenderResult> => {
  return render(<CustomFooter />);
};

describe('CustomFooter', () => {
  it('render social media text and text', async () => {
    renderComponent();
    expect(screen.getByText('Síguenos en nuestras redes sociales')).toBeInTheDocument();
    expect(
      screen.getByText('© 2024 My Market. Todos los derechos reservados.'),
    ).toBeInTheDocument();
  });

  it('render social media', async () => {
    renderComponent();
    const twitterIcon = screen.getByAltText('Twitter');
    expect(twitterIcon).toBeInTheDocument();
  });
});
