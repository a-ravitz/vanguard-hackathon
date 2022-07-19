import axios from 'axios';
import { key } from '../../../key';
export class AutoCompleteService {
  autoComplete(res: string) {
    var config = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input${res}&types=address&key=${key}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
