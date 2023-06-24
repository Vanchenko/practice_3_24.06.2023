import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useFetchSearch } from 'hooks/useFetchSearch';

export const CountrySearch = () => {
  const { countries, isLoading, error, handleChangeSearchParams } =
    useFetchSearch();
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleChangeSearchParams} />
        {isLoading && <Loader/>}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
