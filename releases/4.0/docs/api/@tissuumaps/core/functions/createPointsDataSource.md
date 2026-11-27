# Function: createPointsDataSource()

> **createPointsDataSource**\<`TType`\>(`rawPointsDataSource`): [`PointsDataSource`](../type-aliases/PointsDataSource.md)\<`TType`\>

Defined in: [model/points.ts:154](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/points.ts#L154)

Creates a [PointsDataSource](../type-aliases/PointsDataSource.md) from a [RawPointsDataSource](../interfaces/RawPointsDataSource.md) by applying [pointsDataSourceDefaults](../variables/pointsDataSourceDefaults.md)

## Type Parameters

### TType

`TType` *extends* `string`

## Parameters

### rawPointsDataSource

[`RawPointsDataSource`](../interfaces/RawPointsDataSource.md)\<`TType`\>

The raw points data source

## Returns

[`PointsDataSource`](../type-aliases/PointsDataSource.md)\<`TType`\>

The complete points data source with the default values of missing or `undefined` properties
