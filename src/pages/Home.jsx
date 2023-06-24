import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCountries } from 'hooks/useFetchCountries';

export const Home = () => {
  const {countries, isLoading, error} = useFetchCountries();
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
