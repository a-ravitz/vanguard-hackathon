import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'auto-complete-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  address = new FormControl();
  options: string[];

  constructor(private formBuilder: FormBuilder) {
    this.options = [];
  }

  ngOnInit(): void {}
}
