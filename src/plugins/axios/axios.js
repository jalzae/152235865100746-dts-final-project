import axios from 'axios';

export default axios.create({
  baseURL: "https://idcosmart.ebasid.com"
  // baseURL: "http://localhost/idcosmart/api"
});
