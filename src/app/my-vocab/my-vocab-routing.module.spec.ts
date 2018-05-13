import { MyVocabRoutingModule } from './my-vocab-routing.module';

describe('MyVocabRoutingModule', () => {
  let myVocabRoutingModule: MyVocabRoutingModule;

  beforeEach(() => {
    myVocabRoutingModule = new MyVocabRoutingModule();
  });

  it('should create an instance', () => {
    expect(myVocabRoutingModule).toBeTruthy();
  });
});
