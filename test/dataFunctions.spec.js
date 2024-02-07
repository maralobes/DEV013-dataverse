import { filteredData, sortByName } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

describe('filterBy', () => {
  it('returns `filteredData` according to its range', () => {
    const resultado1 = filteredData(fakeData, 'annualVisitors', 'firstRange');
    const resultado2 = filteredData(fakeData, 'annualVisitors', 'secondRange');
    // const resultado3 = filteredData(fakeData, 'annualVisitors', 'thirdRange');
    const resultado4 = filteredData(fakeData, 'annualVisitors', 'fourthRange');
    const resultado5 = filteredData(fakeData, 'annualVisitors', 'fifthRange');
  
    expect(resultado1).toHaveLength(1);
    expect(resultado1[0]).toHaveProperty('facts');
    expect(resultado1[0].facts).toHaveProperty('annualVisitors', 1500000);
    
    expect(resultado2).toHaveLength(1);
    expect(resultado2[0]).toHaveProperty('facts');
    expect(resultado2[0].facts).toHaveProperty('annualVisitors',  4000000);

    // expect(resultado3).toHaveLength(0);
    // expect(resultado3[0]).toHaveProperty('facts');
    // expect(resultado3[0].facts).toHaveProperty('annualVisitors');

    expect(resultado4).toHaveLength(3);
    expect(resultado4[0]).toHaveProperty('facts');
    expect(resultado4[0].facts).toHaveProperty('annualVisitors', 7000000);
    // expect(resultado4[0].facts).toHaveProperty('annualVisitors', 8000000);

    expect(resultado5).toHaveLength(1);
    expect(resultado5[0]).toHaveProperty('facts');
    expect(resultado5[0].facts).toHaveProperty('annualVisitors', 10000000);
  });
});

describe('SortBy', () => {

    expect(sortedDataAsc[0]).toHaveProperty('name', 'Eiffel Tower');
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
