# Function: createTableDataSource()

> **createTableDataSource**\<`TType`\>(`rawTableDataSource`): [`TableDataSource`](../type-aliases/TableDataSource.md)\<`TType`\>

Defined in: [model/table.ts:73](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/table.ts#L73)

Creates a [TableDataSource](../type-aliases/TableDataSource.md) from a [RawTableDataSource](../interfaces/RawTableDataSource.md) by applying [tableDataSourceDefaults](../variables/tableDataSourceDefaults.md)

## Type Parameters

### TType

`TType` *extends* `string`

## Parameters

### rawTableDataSource

[`RawTableDataSource`](../interfaces/RawTableDataSource.md)\<`TType`\>

The raw table data source

## Returns

[`TableDataSource`](../type-aliases/TableDataSource.md)\<`TType`\>

The complete table data source with default values applied
