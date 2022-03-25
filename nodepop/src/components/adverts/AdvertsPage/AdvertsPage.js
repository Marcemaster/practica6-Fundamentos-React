import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Page from "../../layout/Page";
import Button from "../../common/Button";
import Advert from "./Advert";
import { getAdverts } from "../service";
import Filters from "../../layout/Filters";


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
      <Page title='NODEPOP' className='advert-list'>
        {adverts.length ? (
          <div className='advert-list-page'>
            <Filters/>
            <div className='advert-list-page'>
            <h2>Advert list:</h2>
            {adverts.map((advert) => (
              <li key={advert.id}>
                <Link to={`/adverts/${advert.id}`}>
                  <Advert {...advert} className='advert' />
                </Link>
              </li>
            ))}
            </div>
          </div>
        ) : (
          <EmptyList />
        )}
      </Page>
  );
};

export default AdvertsPage;
