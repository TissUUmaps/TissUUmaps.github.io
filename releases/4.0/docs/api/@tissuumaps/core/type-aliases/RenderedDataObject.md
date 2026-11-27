# Type Alias: RenderedDataObject\<TDataSource\>

> **RenderedDataObject**\<`TDataSource`\> = [`DataObject`](DataObject.md)\<`TDataSource`\> & `Required`\<`Pick`\<[`RawRenderedDataObject`](../interfaces/RawRenderedDataObject.md)\<`TDataSource`\>, keyof *typeof* [`renderedDataObjectDefaults`](../variables/renderedDataObjectDefaults.md)\>\> & `Omit`\<[`RawRenderedDataObject`](../interfaces/RawRenderedDataObject.md)\<`TDataSource`\>, keyof *typeof* [`renderedDataObjectDefaults`](../variables/renderedDataObjectDefaults.md)\>

Defined in: [model/base.ts:142](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L142)

A [RawRenderedDataObject](../interfaces/RawRenderedDataObject.md) with [renderedDataObjectDefaults](../variables/renderedDataObjectDefaults.md) applied

## Type Parameters

### TDataSource

`TDataSource` *extends* [`DataSource`](DataSource.md)\<`string`\>
