# Type Alias: RenderedItemsDataObject\<TDataSource\>

> **RenderedItemsDataObject**\<`TDataSource`\> = [`RenderedDataObject`](RenderedDataObject.md)\<`TDataSource`\> & `Required`\<`Pick`\<[`RawRenderedItemsDataObject`](../interfaces/RawRenderedItemsDataObject.md)\<`TDataSource`\>, keyof *typeof* [`renderedItemsDataObjectDefaults`](../variables/renderedItemsDataObjectDefaults.md)\>\> & `Omit`\<[`RawRenderedItemsDataObject`](../interfaces/RawRenderedItemsDataObject.md)\<`TDataSource`\>, keyof *typeof* [`renderedItemsDataObjectDefaults`](../variables/renderedItemsDataObjectDefaults.md)\>

Defined in: [model/base.ts:259](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L259)

A [RawRenderedItemsDataObject](../interfaces/RawRenderedItemsDataObject.md) with [renderedItemsDataObjectDefaults](../variables/renderedItemsDataObjectDefaults.md) applied

## Type Parameters

### TDataSource

`TDataSource` *extends* [`DataSource`](DataSource.md)\<`string`\>
