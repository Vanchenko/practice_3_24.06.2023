import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';
import { routes } from 'routes';

export const CountryList = ({ countries }) => {
  const location = useLocation();
  return (
    <Grid>
      {countries.map(({ id, flag, country }) => (
        <GridItem key={id}>
          <Link to={`${routes.COUNTRY}/${id}`} state={{ from: location }}>
            <img src={flag} alt={country} />
            {/* <p>{country}</p> */}
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
