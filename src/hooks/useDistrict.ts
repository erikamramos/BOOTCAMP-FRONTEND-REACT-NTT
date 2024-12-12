// test
import { useState, useEffect } from 'react';
import { District } from '../models/District';

const useDistricts = (): District[] => {
  const [districts, setDistricts] = useState<District[]>([]);

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await fetch('/src/utils/data/districts.json');
        const data: District[] = await response.json();
        setDistricts(data);
      } catch (error) {
        console.error('Error fetching districts:', error);
      }
    };

    fetchDistricts();
  }, []);

  return districts;
};

export default useDistricts;
