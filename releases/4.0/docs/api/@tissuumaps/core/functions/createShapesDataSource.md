# Function: createShapesDataSource()

> **createShapesDataSource**\<`TType`\>(`rawShapesDataSource`): [`ShapesDataSource`](../type-aliases/ShapesDataSource.md)\<`TType`\>

Defined in: [model/shapes.ts:179](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/shapes.ts#L179)

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

The complete shapes data source with the default values of missing or `undefined` properties
