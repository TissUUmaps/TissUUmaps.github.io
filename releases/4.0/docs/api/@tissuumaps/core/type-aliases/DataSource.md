# Type Alias: DataSource\<TType\>

> **DataSource**\<`TType`\> = [`Model`](Model.md) & `Required`\<`Pick`\<[`RawDataSource`](../interfaces/RawDataSource.md)\<`TType`\>, keyof *typeof* [`dataSourceDefaults`](../variables/dataSourceDefaults.md)\>\> & `Omit`\<[`RawDataSource`](../interfaces/RawDataSource.md)\<`TType`\>, keyof *typeof* [`dataSourceDefaults`](../variables/dataSourceDefaults.md)\>

Defined in: [model/base.ts:301](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L301)

A [RawDataSource](../interfaces/RawDataSource.md) with [dataSourceDefaults](../variables/dataSourceDefaults.md) applied

## Type Parameters

### TType

`TType` *extends* `string` = `string`
