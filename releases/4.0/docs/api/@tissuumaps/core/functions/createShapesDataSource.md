# Function: createShapesDataSource()

> **createShapesDataSource**\<`TType`\>(`rawShapesDataSource`): [`ShapesDataSource`](../type-aliases/ShapesDataSource.md)\<`TType`\>

Defined in: [model/shapes.ts:156](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/shapes.ts#L156)

Creates a [ShapesDataSource](../type-aliases/ShapesDataSource.md) from a [RawShapesDataSource](../interfaces/RawShapesDataSource.md) by applying [shapesDataSourceDefaults](../variables/shapesDataSourceDefaults.md)

## Type Parameters

### TType

`TType` *extends* `string`

## Parameters

### rawShapesDataSource

[`RawShapesDataSource`](../interfaces/RawShapesDataSource.md)\<`TType`\>

The raw shapes data source

## Returns

[`ShapesDataSource`](../type-aliases/ShapesDataSource.md)\<`TType`\>

The complete shapes data source with default values applied
