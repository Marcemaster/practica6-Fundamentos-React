import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Page from "../../layout/Page";
import Button from "../../common/Button";
import Advert from "./Advert";
import { getAdverts } from "../service";

const EmptyList = () => (
  <div>
    <p>Publish the first add!</p>
    <Button as={Link} to='/adverts/new' variant='primary'>
      New Advert
    </Button>
  </div>
);

const useAdverts = () => {
  const [adverts, setAdverts] = useState([]);
  useEffect(() => {
    const execute = async () => {
      const adverts = await getAdverts();
      setAdverts(adverts);
    };
    execute();
    return () => {};
  }, []);
  return adverts;
};

const AdvertsPage = () => {
  const adverts = useAdverts();

  return (
    <Page title='Adverts List:'>
      <div>
        {adverts.length ? (
          <ul>
            {adverts.map((advert) => (
              <li key={advert.id}>
                <Link to={`/adverts/${advert.id}`}>
                  <Advert {...advert} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
    </Page>
  );
};

export default AdvertsPage;
