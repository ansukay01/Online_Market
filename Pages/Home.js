import React from 'react';
import { SlideShow } from '../SlideShow/SlideShow';
import { Categories } from '../ProductCategories/Categories';
import Shop from './Shop';

function Home () {

    return (
        <>
        <SlideShow />
        <Categories />
        <br/>
        <Shop />
        </>

    );
}

export default Home;