# Type Alias: TableDataSource\<TType\>

> **TableDataSource**\<`TType`\> = [`DataSource`](DataSource.md)\<`TType`\> & `Required`\<`Pick`\<[`RawTableDataSource`](../interfaces/RawTableDataSource.md)\<`TType`\>, keyof *typeof* [`tableDataSourceDefaults`](../variables/tableDataSourceDefaults.md)\>\> & `Omit`\<[`RawTableDataSource`](../interfaces/RawTableDataSource.md)\<`TType`\>, keyof *typeof* [`tableDataSourceDefaults`](../variables/tableDataSourceDefaults.md)\>

Defined in: [model/table.ts:61](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/table.ts#L61)

A [RawTableDataSource](../interfaces/RawTableDataSource.md) with [tableDataSourceDefaults](../variables/tableDataSourceDefaults.md) applied

## Type Parameters

### TType

`TType` *extends* `string` = `string`
