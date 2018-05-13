import { MyVocabModule } from './my-vocab.module';

describe('MyVocabModule', () => {
  let myVocabModule: MyVocabModule;

  beforeEach(() => {
    myVocabModule = new MyVocabModule();
  });

  it('should create an instance', () => {
    expect(myVocabModule).toBeTruthy();
  });
});
