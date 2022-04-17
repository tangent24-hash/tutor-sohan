import React from 'react';
import PageTitle from '../Shared/PageTitle';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Services></Services>
        </>
    );
};

export default Home;