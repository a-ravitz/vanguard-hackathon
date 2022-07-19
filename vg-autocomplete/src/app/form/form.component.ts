import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AutoCompleteService } from '../services/google.service';

@Component({
  selector: 'auto-complete-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  address = new FormControl();
  options: string[];

  constructor(private formBuilder: FormBuilder, private autoCompleteService: AutoCompleteService) {
    this.options = [];
  }

  ngOnInit(): void {
    this.address.valueChanges.subscribe((input) => {
      console.log(input);

      this.autoCompleteService.autoComplete(input)
    });
  }
}
