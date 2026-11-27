# Function: createDataSource()

> **createDataSource**\<`TType`\>(`rawDataSource`): [`DataSource`](../type-aliases/DataSource.md)\<`TType`\>

Defined in: [model/base.ts:331](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L331)

Creates a [DataSource](../type-aliases/DataSource.md) from a [RawDataSource](../interfaces/RawDataSource.md) by applying [dataSourceDefaults](../variables/dataSourceDefaults.md)

## Type Parameters

### TType

`TType` *extends* `string`

## Parameters

### rawDataSource

[`RawDataSource`](../interfaces/RawDataSource.md)\<`TType`\>

The raw data source

## Returns

[`DataSource`](../type-aliases/DataSource.md)\<`TType`\>

The complete data source with the default values of missing or `undefined` properties
