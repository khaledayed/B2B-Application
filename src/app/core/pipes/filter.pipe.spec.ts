

import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('searching item', () => {
    const items = [{ 'name': 'Khadija', age: 1 }, { 'name': 'Amine', age: 28 }];

    it('should return an empty array', () => {
      const actual = pipe.transform(items, 'name', 'Khawla');

      expect(actual).toEqual([] as any);
    });

    it('should return the object', () => {
      const actual = pipe.transform(items, 'name', 'Khadija');

      expect(actual).toEqual([{ 'name': 'Khadija', age: 1 }] as any);
    });
  });
});
