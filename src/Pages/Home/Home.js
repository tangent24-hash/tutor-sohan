import React from 'react';
import PageTitle from '../Shared/PageTitle';
import Banner from './Banner';
import Services from './Services';
import StudentsComments from './StudentsComments';

const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <StudentsComments></StudentsComments>
        </>
    );
};

export default Home;