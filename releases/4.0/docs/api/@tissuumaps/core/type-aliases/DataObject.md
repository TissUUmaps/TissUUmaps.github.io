# Type Alias: DataObject\<TDataSource\>

> **DataObject**\<`TDataSource`\> = [`Model`](Model.md) & `Required`\<`Pick`\<[`RawDataObject`](../interfaces/RawDataObject.md)\<`TDataSource`\>, keyof *typeof* [`dataObjectDefaults`](../variables/dataObjectDefaults.md)\>\> & `Omit`\<[`RawDataObject`](../interfaces/RawDataObject.md)\<`TDataSource`\>, keyof *typeof* [`dataObjectDefaults`](../variables/dataObjectDefaults.md)\>

Defined in: [model/base.ts:76](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L76)

A [RawDataObject](../interfaces/RawDataObject.md) with [dataObjectDefaults](../variables/dataObjectDefaults.md) applied

## Type Parameters

### TDataSource

`TDataSource` *extends* [`DataSource`](DataSource.md)\<`string`\>
