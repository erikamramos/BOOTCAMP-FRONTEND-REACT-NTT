import { render, screen } from '@testing-library/react';
import { RatingStars } from '@/components/atoms';
import { RatingStarsConfig } from '@/config/constants/config';

describe('RatingStars Component', () => {
  const renderComponent = (rating: number) => render(<RatingStars rating={rating} />);

  it('should render the correct number of full stars', () => {
    renderComponent(4.2);
    const fullStars = screen
      .getAllByText('★')
      .filter((star) => star.className.includes('rating__star--full'));
    expect(fullStars).toHaveLength(4);
  });

  it('should render one half star if rating has a decimal >= 0.5', () => {
    renderComponent(4.5);
    const halfStars = screen
      .getAllByText('☆')
      .filter((star) => star.className.includes('rating__star--half'));
    expect(halfStars).toHaveLength(1);
  });

  it('should not render a half star if rating has a decimal < 0.5', () => {
    renderComponent(4.3);
    const halfStars = screen
      .queryAllByText('☆')
      .filter((star) => star.className.includes('rating__star--half'));
    expect(halfStars).toHaveLength(0);
  });

  it('should render the correct number of empty stars', () => {
    renderComponent(3.7);
    const emptyStars = screen
      .getAllByText('☆')
      .filter((star) => star.className.includes('rating__star--empty'));
    expect(emptyStars).toHaveLength(
      RatingStarsConfig.DEFAULT_STARS_SIZE - 4, // 3 full stars + 1 half star = 4
    );
  });

  it('should render all empty stars for a rating of 0', () => {
    renderComponent(0);
    const emptyStars = screen
      .getAllByText('☆')
      .filter((star) => star.className.includes('rating__star--empty'));
    expect(emptyStars).toHaveLength(RatingStarsConfig.DEFAULT_STARS_SIZE);
  });

  it('should render all full stars for a rating equal to DEFAULT_STARS_SIZE', () => {
    renderComponent(RatingStarsConfig.DEFAULT_STARS_SIZE);
    const fullStars = screen
      .getAllByText('★')
      .filter((star) => star.className.includes('rating__star--full'));
    expect(fullStars).toHaveLength(RatingStarsConfig.DEFAULT_STARS_SIZE);
  });
});
