# Function: createTableDataSource()

> **createTableDataSource**\<`TType`\>(`rawTableDataSource`): [`TableDataSource`](../type-aliases/TableDataSource.md)\<`TType`\>

Defined in: [model/table.ts:74](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/table.ts#L74)

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

The complete table data source with the default values of missing or `undefined` properties
