import axios from 'axios';
import {getAccessToken} from './AuthService';
export default {
  test(){
    axios.get("/authorized", { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => console.log(response.data));
  }
}