import React from 'react';
import English from './English';
import requests from '../request';


const EngRow = () => {
  return (
    <div>
      <English title="Top News" fetchUrl={requests.all} />
      <English title="National" fetchUrl={requests.national} />
      <English title="Politics" fetchUrl={requests.politics} />
      <English title="Business" fetchUrl={requests.buisness} />
      <English title="Sports" fetchUrl={requests.sports} />
      <English title="Technology" fetchUrl={requests.technology} />
      <English title="World" fetchUrl={requests.world} />
      <English title="Science" fetchUrl={requests.science} />
      <English title="Automobile" fetchUrl={requests.automobile} />
      <English title="Startup" fetchUrl={requests.startup} />
    </div>
  );
};

export default EngRow;
