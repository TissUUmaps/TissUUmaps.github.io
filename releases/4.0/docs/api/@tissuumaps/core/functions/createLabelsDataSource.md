# Function: createLabelsDataSource()

> **createLabelsDataSource**\<`TType`\>(`rawLabelsDataSource`): [`LabelsDataSource`](../type-aliases/LabelsDataSource.md)\<`TType`\>

Defined in: [model/labels.ts:106](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/labels.ts#L106)

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

The complete labels data source with default values applied
