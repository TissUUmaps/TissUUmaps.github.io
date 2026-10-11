# Type Alias: RenderedItemsDataObject\<TDataSource\>

> **RenderedItemsDataObject**\<`TDataSource`\> = [`RenderedDataObject`](RenderedDataObject.md)\<`TDataSource`\> & `Required`\<`Pick`\<[`RawRenderedItemsDataObject`](../interfaces/RawRenderedItemsDataObject.md)\<`TDataSource`\>, keyof *typeof* [`renderedItemsDataObjectDefaults`](../variables/renderedItemsDataObjectDefaults.md)\>\> & `Omit`\<[`RawRenderedItemsDataObject`](../interfaces/RawRenderedItemsDataObject.md)\<`TDataSource`\>, keyof *typeof* [`renderedItemsDataObjectDefaults`](../variables/renderedItemsDataObjectDefaults.md)\>

Defined in: [model/base.ts:242](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L242)

A [RawRenderedItemsDataObject](../interfaces/RawRenderedItemsDataObject.md) with [renderedItemsDataObjectDefaults](../variables/renderedItemsDataObjectDefaults.md) applied

## Type Parameters

### TDataSource

`TDataSource` *extends* [`DataSource`](DataSource.md)\<`string`\>
