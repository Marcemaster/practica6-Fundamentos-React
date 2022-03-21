import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Page from '../../layout/Page';
import { getAdvert } from '../service';


// NO TENGO NI IDEA DE ESTO, REVISAR MAÑANA.

class AdvertPageotro extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        advert: null,
        error: null,
        isLoading: false,
      };
    }
  
    handleGetAdvert = async () => {
      this.setState({ isLoading: true, error: null });
      try {
        const advert = await getAdvert(this.props.advertId);
        this.setState({ advert, isLoading: false });
      } catch (error) {
        this.setState({ isLoading: false, error });
      }
    };
  
    componentDidMount() {
      this.handleGetAdvert();
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.advertId !== this.props.advertId) {
        this.handleGetAdvert();
      }
    }
  
    componentWillUnmount() {
      console.log('unmount');
    }
  
    render() {
      const { advert, error, isLoading } = this.state;
  
      if (error?.status === 401) {
        return <Navigate to="/login" />;
      }
  
      if (error?.status === 404) {
        return <Navigate to="/404" />;
      }
  
      return (
        <Page title="Advert detail">
          <div>{advert ? JSON.stringify(advert) : 'Nothing to show'}</div>
        </Page>
      );
    }
  }

// No entiendo bien esta parte del código, revisar mañana.

const AdvertPage = () => {
    const ref = useRef(null);
    const { advertId } = useParams();
  
    useEffect(() => {
      console.log('ref', ref.current);
    }, []);
  
    return <AdvertPage ref={ref} advertId={advertId} />;
  };
  
  
export default AdvertPage;
  
