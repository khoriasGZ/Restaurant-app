import { FormAddPlatModule } from './form-add-plat.module';

describe('FormAddPlatModule', () => {
  let formAddPlatModule: FormAddPlatModule;

  beforeEach(() => {
    formAddPlatModule = new FormAddPlatModule();
  });

  it('should create an instance', () => {
    expect(formAddPlatModule).toBeTruthy();
  });
});
