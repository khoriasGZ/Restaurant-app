import { PlatListModule } from './plat-list.module';

describe('PlatListModule', () => {
  let platListModule: PlatListModule;

  beforeEach(() => {
    platListModule = new PlatListModule();
  });

  it('should create an instance', () => {
    expect(platListModule).toBeTruthy();
  });
});
