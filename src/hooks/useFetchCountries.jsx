import { getCountries } from 'service/country-service';
import { useEffect, useState } from 'react';

export const useFetchCountries = () => { 
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const resp = await getCountries();
                //console.log('resp', resp);
                setCountries(resp);
            } catch(error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
},[])

return {countries, isLoading, error}
}


