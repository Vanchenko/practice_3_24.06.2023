import { Section, Container, CountryInfo, Loader, GoBackBtn } from 'components';
import { useFetchCountry } from 'hooks/useFetchCountry';
import { useLocation } from 'react-router-dom';
import { routes } from 'routes';

export const Country = () => {
  const { country, isLoading, error } = useFetchCountry();
  const location = useLocation();
  console.log(location);
  const {
    flag,
    capital,
    id,
    countryName,
    languages = [],
    population,
  } = country;
  const goBackLocation = location?.state?.from ?? routes.HOME;
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <p>There is no country yet...</p>}
        <GoBackBtn path={goBackLocation}>Go back</GoBackBtn>
        {country.hasOwnProperty('flag') && (
          <CountryInfo
            flag={flag}
            capital={capital}
            id={id}
            country={countryName}
            languages={languages}
            population={population}
          />
        )}
      </Container>
    </Section>
  );
};
