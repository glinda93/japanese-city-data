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
import PrefectureData from 'japanese-city-data';

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
