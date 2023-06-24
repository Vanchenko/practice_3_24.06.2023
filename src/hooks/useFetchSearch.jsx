import { fetchByRegion } from 'service/country-service';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useFetchSearch = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const region = searchParams.get('query');
    if (!region) return;
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await fetchByRegion(region);
        //console.log('resp', resp);
        setCountries(resp);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  const handleChangeSearchParams = query => {
    setSearchParams({ query });
  };
  return { countries, isLoading, error, handleChangeSearchParams };
};
