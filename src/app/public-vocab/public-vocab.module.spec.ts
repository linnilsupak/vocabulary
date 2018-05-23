import { PublicVocabModule } from './public-vocab.module';

describe('PublicVocabModule', () => {
  let publicVocabModule: PublicVocabModule;

  beforeEach(() => {
    publicVocabModule = new PublicVocabModule();
  });

  it('should create an instance', () => {
    expect(publicVocabModule).toBeTruthy();
  });
});
