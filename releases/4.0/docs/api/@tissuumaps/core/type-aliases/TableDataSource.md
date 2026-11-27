# Type Alias: TableDataSource\<TType\>

> **TableDataSource**\<`TType`\> = [`DataSource`](DataSource.md)\<`TType`\> & `Required`\<`Pick`\<[`RawTableDataSource`](../interfaces/RawTableDataSource.md)\<`TType`\>, keyof *typeof* [`tableDataSourceDefaults`](../variables/tableDataSourceDefaults.md)\>\> & `Omit`\<[`RawTableDataSource`](../interfaces/RawTableDataSource.md)\<`TType`\>, keyof *typeof* [`tableDataSourceDefaults`](../variables/tableDataSourceDefaults.md)\>

Defined in: [model/table.ts:62](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/table.ts#L62)

A [RawTableDataSource](../interfaces/RawTableDataSource.md) with [tableDataSourceDefaults](../variables/tableDataSourceDefaults.md) applied

## Type Parameters

### TType

`TType` *extends* `string` = `string`
