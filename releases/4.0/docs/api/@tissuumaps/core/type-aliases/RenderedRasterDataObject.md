# Type Alias: RenderedRasterDataObject\<TDataSource\>

> **RenderedRasterDataObject**\<`TDataSource`\> = [`RenderedDataObject`](RenderedDataObject.md)\<`TDataSource`\> & `Required`\<`Pick`\<[`RawRenderedRasterDataObject`](../interfaces/RawRenderedRasterDataObject.md)\<`TDataSource`\>, keyof *typeof* [`renderedRasterDataObjectDefaults`](../variables/renderedRasterDataObjectDefaults.md)\>\> & `Omit`\<[`RawRenderedRasterDataObject`](../interfaces/RawRenderedRasterDataObject.md)\<`TDataSource`\>, keyof *typeof* [`renderedRasterDataObjectDefaults`](../variables/renderedRasterDataObjectDefaults.md)\>

Defined in: [model/base.ts:196](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L196)

A [RawRenderedRasterDataObject](../interfaces/RawRenderedRasterDataObject.md) with [renderedRasterDataObjectDefaults](../variables/renderedRasterDataObjectDefaults.md) applied

## Type Parameters

### TDataSource

`TDataSource` *extends* [`DataSource`](DataSource.md)\<`string`\>
