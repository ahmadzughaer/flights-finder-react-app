import axios from 'axios';

export default axios.create({
  baseURL: 'http://map.aviasales.ru/supported_directions.json?origin_iata=TLV&locale=en',
});
