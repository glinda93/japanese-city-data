import fixture from './japanese-city-data.json';

export type CityData = {
  label: string;
  value: number;
  children?: CityData[];
};

const CityData: CityData[] = fixture;
export default CityData;
