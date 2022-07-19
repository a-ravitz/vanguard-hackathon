/// <reference types="@types/google.maps" />
import axios from 'axios';
import { key } from '../../../key';
export class AutoCompleteService {
  autoComplete(res: string) {
    const service = new google.maps.places.AutocompleteService();
    var config = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input${res}&types=address&key=${key}`,
      headers: {},
    };

    service.getPlacePredictions({ input: res, types: ['address']}, (predictions: any) => {
      console.log(predictions)
    })
  }
}
