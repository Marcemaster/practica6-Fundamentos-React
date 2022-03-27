import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Page from "../components/layout/Page";
import Button from "../components/common/Button.js";
import Advert from "../components/adverts/Advert";

import { getAdverts } from "../components/adverts/service.js";
import Filters from "../components/layout/Filters";
import "../css/advert-list.css"
import "../css/styles.css"


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
            <h2>Advert list:</h2>
            <div className='advert-list-div'>
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
