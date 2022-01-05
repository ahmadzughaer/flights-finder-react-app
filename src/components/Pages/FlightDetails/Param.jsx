import React from 'react';
import { useParams } from 'react-router-dom';
import FlightDetails from './FlightDetails.component';
const Param = () => {
  const props = useParams();
  return <FlightDetails id={props} />;
};
export default Param;
