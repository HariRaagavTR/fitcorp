import React, { Component } from 'react';
import '../styles/styles.scss';

import Header from '../components/Header/Header';
import Message from '../components/Message/Message';

const NotFound = () => (
    <>
        <Header />
        <Message message="404 Error. Page Unavailable." />
    </>
);

export default NotFound;
