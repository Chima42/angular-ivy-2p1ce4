import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Title } from './title.model';

export class TitleService {
  public getTitles(): Observable<Title[]> {
    // assume this data is coming from a backend data source and cannot be changed
    return of([
      { name: 'Mr', isDefault: false },
      { name: 'Mrs', isDefault: false },
      { name: 'Miss', isDefault: false },
      { name: '!', isDefault: false },
      { name: 'Dr', isDefault: true },
      { name: 'Prof', isDefault: false },
    ]).pipe(
      map((titles) =>
        titles
          .filter((title) => title.name !== '!')
          .sort((a, b) => a.name.localeCompare(b.name))
      )
    );
  }
}
