import { Injectable } from '@angular/core';
import { Library } from './library';
import { Observable, of } from 'rxjs';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyLibraryService {
  libraries: Library[];
  libraries$: Observable<Library[]>;
  constructor() {
    this.libraries = [
      new Library({id: '1',name: 'Angular 5', ownerId: 'lin1', description: 'For researching purpose' }),
      new Library({id: '2',name: 'English', ownerId: 'lin1', description: 'For learning purpose' }),
      new Library({id: '3',name: 'ต้นไม้', ownerId: 'lin1', description: 'เอาไว้จดราคาต้นไม้ในร้าน' }),
      new Library({id: '4',name: 'ทดสอบถ้าชื่อมันยาวมากกกกกๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ', ownerId: 'lin1'
      , description: `ทดสอบถ้าคำอธิบายมันยาวมากๆ
      หลายบรรทัด
      ดูซิ
      จะเป็นอย่างไร
      กันนะ` }),
    ];
    this.libraries$ = of(this.libraries);
   }

   getLibraries(): Observable<Library[]> {
     return this.libraries$;
   }

   addLibrary(obj: Library){

   }
   
   setLibrary(obj: Library){

   }
   
   deleteLibrary(id: string){
     
  }

}