import { Section, Container, CountryInfo, Loader } from 'components';
import { useFetchCountry } from 'hooks/useFetchCountry';

export const Country = () => {
  const { country, isLoading, error } = useFetchCountry();
  const {
    flag,
    capital,
    id,
    countryName,
    languages = [],
    population,
  } = country;
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <p>There is no country yet...</p>}
        {country.hasOwnProperty('flag') && <CountryInfo
          flag={flag}
          capital={capital}
          id={id}
          country={countryName}
          languages={languages}
          population={population}
        />}
      </Container>
    </Section>
  );
};
