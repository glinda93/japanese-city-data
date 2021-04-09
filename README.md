# Overview

Japanese prefectures and cities data in tree structure

```typescript
export type CityData = {
    label: string;
    value: number;
    children?: CityData[];
};
```

# Example Usage with React

```typescript
import React, {useEffect, useMemo, useState} from 'react';
import PrefectureData, {CityData} from 'japanese-city-data';

const Select = ({items, onValueChange, ...rest}: {items: CityData[], onValueChange: (value: number) => void}) => (
  <select onChange={e => onValueChange(e.target.value)} {...rest}>
    {items.map(({label, value}) => (
        <option key={value} value={value}>{label}</option>
    ))}
  </select>
);

const Component = () => {
    const [prefecture, setPrefecture] = useState(0);
    const [city, setCity] = useState(0);

    const CityData = useMemo(() => {
        return PrefectureData[prefecture]?.children || [];
    }, [prefecture]);

    useEffect(() => setCity(0), [prefecture]);

    return (
        <React.Fragment>
            <Select 
                items={PrefectureData} 
                value={prefecture} 
                onValueChange={value => setPrefecture(value)}
            />
            <Select 
                items={CityData}>
                value={city}
                onValueChange={value => setCity(value)}
            />
        </React.Fragment>
    );
};
```
