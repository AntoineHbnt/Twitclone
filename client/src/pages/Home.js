import React, { useContext } from 'react';
import { UidContext } from '../components/AppContexte';
import Log from '../components/Log'

const Home = () => {
    const uid = useContext(UidContext)


    return (
        <div>
            Home
        </div>
    );
};

export default Home;