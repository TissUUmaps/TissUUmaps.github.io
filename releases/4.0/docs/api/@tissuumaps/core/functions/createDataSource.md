# Function: createDataSource()

> **createDataSource**\<`TType`\>(`rawDataSource`): [`DataSource`](../type-aliases/DataSource.md)\<`TType`\>

Defined in: [model/base.ts:311](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L311)

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

The complete data source with default values applied
