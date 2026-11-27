# Type Alias: DataSource\<TType\>

> **DataSource**\<`TType`\> = [`Model`](Model.md) & `Required`\<`Pick`\<[`RawDataSource`](../interfaces/RawDataSource.md)\<`TType`\>, keyof *typeof* [`dataSourceDefaults`](../variables/dataSourceDefaults.md)\>\> & `Omit`\<[`RawDataSource`](../interfaces/RawDataSource.md)\<`TType`\>, keyof *typeof* [`dataSourceDefaults`](../variables/dataSourceDefaults.md)\>

Defined in: [model/base.ts:321](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L321)

A [RawDataSource](../interfaces/RawDataSource.md) with [dataSourceDefaults](../variables/dataSourceDefaults.md) applied

## Type Parameters

### TType

`TType` *extends* `string` = `string`
