import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'firebase-backend',
  template: '<ul>\n' +
    '  <li class="text" *ngFor="let item of items | async">\n' +
    '    {{item.name}}\n' +
    '  </li>\n' +
    '</ul>',
  styles: ["span { color : #A691F2}"]
})
export class FirebaseBackend{
  // test firestore
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
  }


}
