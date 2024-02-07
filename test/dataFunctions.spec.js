import { filteredData, sortByName } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

describe('example', () => {

  it('returns `example`', () => {
    expect(example()).toBe();
  });
});



describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });

  describe('OrderDataAsc', () => {
    const sortedData = sortByName(data, 'name', 'asc');

    expect(sortedData[0].name).toBe('Eiffel Tower');
    expect(sortedData[1].name).toBe('Great Wall of China');
    expect(sortedData[2].name).toBe('Pyramids of Giza');
    expect(sortedData[3].name).toBe('Taj Mahal');
    expect(sortedData[4].name).toBe('The Colosseum');
  });

  describe('OrderDataDesc', () => {
    const sortedData = sortByName(data, 'name', 'desc');

    expect(sortedData[0].name).toBe('The Colosseum');
    expect(sortedData[1].name).toBe('Taj Mahal');
    expect(sortedData[2].name).toBe('Pyramids of Giza');
    expect(sortedData[3].name).toBe('Great Wall of China');
    expect(sortedData[4].name).toBe('Eiffel Tower');
  });
});
