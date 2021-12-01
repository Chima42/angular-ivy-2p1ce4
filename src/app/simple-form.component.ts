import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Title } from './title.model';
import { TitleService } from './title.service';

@Component({
  selector: 'simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],
})
export class SimpleFormComponent implements OnInit {
  public titles$: Observable<Title[]>;
  public simpleForm: FormGroup;
  public isSubmitActive = false;

  constructor(private _titleService: TitleService) {}

  ngOnInit() {
    this.simpleForm = new FormGroup({
      title: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      acceptTerms: new FormControl(false),
    });
    this.titles$ = this._titleService.getTitles();
  }

  public toggleButtonStatus() {
    this.isSubmitActive = !this.isSubmitActive;
  }

  public onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}