import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AutoCompleteService } from '../services/google.service';

@Component({
  selector: 'auto-complete-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  // address = new FormControl();
  options: string[];
  addressFormGroup: FormGroup<{ address: FormControl<string | null>; street: FormControl<string | null>; city: FormControl<string | null>; state: FormControl<string | null>; }>;

  constructor(private formbuilder: FormBuilder, private autoCompleteService: AutoCompleteService) {
    this.options = [];
    this.addressFormGroup = this.formbuilder.group({
      address:[''],
      street: [''],
      city: [''],
      state: [''],
    })
  }

  ngOnInit(): void {
    this.addressFormGroup.get("address")!.valueChanges.subscribe((input) => {
      // this.options = this.autoCompleteService.autoComplete(input)
      this.autoCompleteService.autoComplete(input!).then((prediction:any) => {
        this.options = prediction.predictions.map((pred:any) => pred.description)
      })
      this.addressFormGroup.patchValue({street: input?.split(",")[0]})
      this.addressFormGroup.patchValue({city: input?.split(",")[1]})
      this.addressFormGroup.patchValue({state: input?.split(",")[2]})
      // this.addressFormGroup.= input?.split(",")
    });
  }
}
