import fixture from './japanese-city-data.json';

export type CityData = {
  label: string;
  value: number;
  children?: CityData[];
};

const Data: CityData[] = fixture;
export default Data;

export const getPrefId = (pref: string) => {
    const prefItem = Data.find(item => {
        item.label === pref;
    });
    if (prefItem) {
        return prefItem.value;
    }
    return null;
};

export const getCityIdByPrefId = (prefId: number, city: string) => {
    const prefItem = Data.find(item => {
        item.value === prefId;
    })
    if (prefItem) {
        const cityItem = prefItem.children?.find(item => {
            item.label === city;
        });
        if (cityItem) {
            return cityItem.value;
        }
        return null;
    }
    return null;
};

export const getPrefAndCityId = ({pref, city}: {pref: string, city: string}) => {
    const prefId = getPrefId(pref);
    if (prefId === null) {
        return {prefId: null, cityId: null};
    }
    const cityId = getCityIdByPrefId(prefId, city);
    return {prefId, cityId};
};
