# Type Alias: DataObject\<TDataSource\>

> **DataObject**\<`TDataSource`\> = [`Model`](Model.md) & `Required`\<`Pick`\<[`RawDataObject`](../interfaces/RawDataObject.md)\<`TDataSource`\>, keyof *typeof* [`dataObjectDefaults`](../variables/dataObjectDefaults.md)\>\> & `Omit`\<[`RawDataObject`](../interfaces/RawDataObject.md)\<`TDataSource`\>, keyof *typeof* [`dataObjectDefaults`](../variables/dataObjectDefaults.md)\>

Defined in: [model/base.ts:59](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L59)

A [RawDataObject](../interfaces/RawDataObject.md) with [dataObjectDefaults](../variables/dataObjectDefaults.md) applied

## Type Parameters

### TDataSource

`TDataSource` *extends* [`DataSource`](DataSource.md)\<`string`\>
