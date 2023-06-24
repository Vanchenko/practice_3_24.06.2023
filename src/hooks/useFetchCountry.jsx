import { fetchCountry, getCountries } from 'service/country-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchCountry = () => {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await fetchCountry(id);
        //console.log('resp', resp);
        setCountry(resp);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return { country, isLoading, error };
};
