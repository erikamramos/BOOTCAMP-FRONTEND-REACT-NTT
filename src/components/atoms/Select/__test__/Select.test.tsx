import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from '@/components/atoms';
import { optionsMock } from '@/utils/__mocks__/select';

describe('Select Component', () => {
  const options = optionsMock;

  const renderComponent = (props = {}) =>
    render(
      <Select
        id="test-select"
        placeholder="Select an option"
        options={options}
        onChange={() => {}}
        {...props}
      />,
    );

  it('should render with the correct placeholder', () => {
    renderComponent();
    const placeholder = screen.getByText('Select an option');
    expect(placeholder).toBeInTheDocument();
  });

  it('should render all options correctly', () => {
    renderComponent();
    options.forEach((option) => {
      const renderedOption = screen.getByText(option.label);
      expect(renderedOption).toBeInTheDocument();
    });
  });

  it('should call onChange when an option is selected', () => {
    const handleChange = jest.fn();
    renderComponent({ onChange: handleChange });

    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'option2' } });

    expect(handleChange).toHaveBeenCalled();
    expect(handleChange.mock.calls[0][0].target.value).toBe('option2');
  });

  it('should set the correct value when controlled', () => {
    renderComponent({ value: 'option3', onChange: jest.fn() });

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveValue('option3');
  });

  it('should apply additional className if provided', () => {
    renderComponent({ className: 'custom-class' });

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveClass('select custom-class');
  });
});
