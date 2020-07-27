import React from 'react';
import Hindi from './Hindi';
import requests from '../request';

const HinRow = () => {
    return (
        <div>
            <Hindi title="बड़ी ख़बरें" fetchUrl={requests.all} />
            <Hindi title="देश" fetchUrl={requests.national} />
            <Hindi title="राजनीति" fetchUrl={requests.politics} />
            <Hindi title="बिज़नेस" fetchUrl={requests.buisness} />
            <Hindi title="खेल" fetchUrl={requests.sports} />
            <Hindi title="टेक्नोलॉजी" fetchUrl={requests.technology} />
            <Hindi title="दुनिया" fetchUrl={requests.world} />
            <Hindi title="ऑटोमोबाइल" fetchUrl={requests.automobile} />
            <Hindi title="स्टार्टअप" fetchUrl={requests.startup} />
        </div>
    );
};

export default HinRow;
