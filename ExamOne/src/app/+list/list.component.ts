import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

interface Abbreviation {
  abbreviation: string;
  full: string;
  $key?: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  readonly abbreviationPath = 'abreviations';

  formAbbreviation : Abbreviation = {
    'abbreviation': '',
    'full': ''
  };

  abbreviationStream: FirebaseListObservable<Abbreviation[]>;

  constructor(db: AngularFireDatabase) {
    this.abbreviationStream = db.list(this.abbreviationPath);
   }

  ngOnInit(): void{
  }

  ngOnDestroy(): void{

  }

  onSubmit(): void {
    try {
      if (this.formAbbreviation.$key) {
        this.abbreviationStream.update(this.formAbbreviation.$key, this.formAbbreviation);
      } else {
        this.abbreviationStream.push(this.formAbbreviation);
      }
    } catch (e) {
      console.log('Form error:', e);
    }
  }

  remove(abbreviationKey: string): void {
    this.abbreviationStream.remove(abbreviationKey);
  }

}
