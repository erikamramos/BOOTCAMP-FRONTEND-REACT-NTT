import { FC } from 'react';
import styles from './RatingStars.module.css';
import { RatingStarsConfig } from '../../../config/constants/config';

type RatingStarsProps = {
  rating: number;
};

export const RatingStars: FC<RatingStarsProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = RatingStarsConfig.DEFAULT_STARS_SIZE - fullStars - halfStar;

  const stars = [
    ...Array(fullStars)
      .fill(null)
      .map((_, index) => (
        <span
          key={`full-${index}`}
          className={`${styles.rating__star} ${styles['rating__star--full']}`}
        >
          ★
        </span>
      )),
    ...(halfStar
      ? [
          <span key="half" className={`${styles.rating__star} ${styles['rating__star--half']}`}>
            ☆
          </span>,
        ]
      : []),
    ...Array(emptyStars)
      .fill(null)
      .map((_, index) => (
        <span
          key={`empty-${index}`}
          className={`${styles.rating__star} ${styles['rating__star--empty']}`}
        >
          ☆
        </span>
      )),
  ];

  return <div className={styles.rating}>{stars}</div>;
};
