/// <reference types="@types/google.maps" />

export class AutoCompleteService {
  autoComplete(res: string): any {
    const service = new google.maps.places.AutocompleteService();
    const predictionsAfterCallback =  service.getPlacePredictions({ input: res, types: ['street_address']})

    console.log('predictionsAfterCallback ', predictionsAfterCallback)
    return predictionsAfterCallback
  }
}
