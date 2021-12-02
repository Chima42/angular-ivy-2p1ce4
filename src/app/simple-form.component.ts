import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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
  public defaultSelectedOption: Title;

  constructor(private _titleService: TitleService) {}

  ngOnInit() {
    this.titles$ = this._titleService
      .getTitles()
      .pipe(
        tap(
          (titles) =>
            (this.defaultSelectedOption = titles.filter(
              (title) => title.isDefault
            )[0])
        )
      );
    this.simpleForm = new FormGroup({
      title: new FormControl('null'),
      firstName: new FormControl(''),
      lastName: new FormControl('', [Validators.required]),
      acceptTerms: new FormControl(false),
    });
  }

  public onSubmit(form: FormGroup) {
    if (form.status === 'INVALID') {
      return;
    } else {
      console.log(form);
    }
  }
}
