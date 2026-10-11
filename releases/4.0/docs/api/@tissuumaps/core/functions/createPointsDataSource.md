# Function: createPointsDataSource()

> **createPointsDataSource**\<`TType`\>(`rawPointsDataSource`): [`PointsDataSource`](../type-aliases/PointsDataSource.md)\<`TType`\>

Defined in: [model/points.ts:145](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/points.ts#L145)

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

The complete points data source with default values applied
