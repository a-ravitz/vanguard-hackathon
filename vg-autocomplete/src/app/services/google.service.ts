import axios from 'axios';

export class AutoCompleteService {
  autoComplete(res: string) {
    var config = {
      method: 'get',
      url: '',
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
