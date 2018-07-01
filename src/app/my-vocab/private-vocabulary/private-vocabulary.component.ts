import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../shared/library.service';

@Component({
  selector: 'v-private-vocabulary',
  templateUrl: './private-vocabulary.component.html',
  styleUrls: ['./private-vocabulary.component.scss']
})
export class PrivateVocabularyComponent implements OnInit {

  constructor(library: LibraryService) {
    // console.log('libraries', myLibrary.libraries);
  }

  ngOnInit() {
  }

}
