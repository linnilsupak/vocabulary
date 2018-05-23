import { Component, OnInit } from '@angular/core';
import { MyLibraryService } from '../../shared/my-library.service';

@Component({
  selector: 'v-private-vocabulary',
  templateUrl: './private-vocabulary.component.html',
  styleUrls: ['./private-vocabulary.component.scss']
})
export class PrivateVocabularyComponent implements OnInit {

  constructor(myLibrary: MyLibraryService) {
    console.log('libraries', myLibrary.libraries);
  }

  ngOnInit() {
  }

}
