# Function: createLabelsDataSource()

> **createLabelsDataSource**\<`TType`\>(`rawLabelsDataSource`): [`LabelsDataSource`](../type-aliases/LabelsDataSource.md)\<`TType`\>

Defined in: [model/labels.ts:107](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/labels.ts#L107)

Creates a [LabelsDataSource](../type-aliases/LabelsDataSource.md) from a [RawLabelsDataSource](../interfaces/RawLabelsDataSource.md) by applying [labelsDataSourceDefaults](../variables/labelsDataSourceDefaults.md)

## Type Parameters

### TType

`TType` *extends* `string`

## Parameters

### rawLabelsDataSource

[`RawLabelsDataSource`](../interfaces/RawLabelsDataSource.md)\<`TType`\>

The raw labels data source

## Returns

[`LabelsDataSource`](../type-aliases/LabelsDataSource.md)\<`TType`\>

The complete labels data source with the default values of missing or `undefined` properties
