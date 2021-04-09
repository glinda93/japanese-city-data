# Overview

Japanese prefectures and cities data in a tree structure

```typescript
export type CityData = {
    label: string;
    value: number;
    children?: CityData[];
};
```
