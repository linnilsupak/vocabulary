import { Injectable } from '@angular/core';
import { Library } from './library';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  mockLibraries: Library[]= [
    new Library({ id: '1', name: 'Angular 5', ownerId: 'lin1', description: 'For researching purpose' }),
    new Library({ id: '2', name: 'English', ownerId: 'lin1', description: 'For learning purpose' }),
    new Library({ id: '3', name: 'ต้นไม้', ownerId: 'lin1', description: 'เอาไว้จดราคาต้นไม้ในร้าน' }),
    new Library({
      id: '4', name: 'ทดสอบถ้าชื่อมันยาวมากกกกกๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ', ownerId: 'lin1'
      , description: `ทดสอบถ้าคำอธิบายมันยาวมากๆ
    หลายบรรทัด
    ดูซิ
    จะเป็นอย่างไร
    กันนะ` }),
  ];
  
  constructor() {
  }

  getLibraryList$(): Observable<Library[]> {
    return of(this.mockLibraries);
  }

  getLibrary(id: string) {
    return this.mockLibraries.map((val)=>{
      if(val.id===id){
        return val;
      }
    });
  }

  addLibrary(obj: Library) {

  }

  setLibrary(id: string, obj: Library) {

  }

  deleteLibrary(id: string) {

  }

}