import { PublicVocabRoutingModule } from './public-vocab-routing.module';

describe('PublicVocabRoutingModule', () => {
  let publicVocabRoutingModule: PublicVocabRoutingModule;

  beforeEach(() => {
    publicVocabRoutingModule = new PublicVocabRoutingModule();
  });

  it('should create an instance', () => {
    expect(publicVocabRoutingModule).toBeTruthy();
  });
});
