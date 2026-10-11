# Type Alias: RenderedRasterDataObject\<TDataSource\>

> **RenderedRasterDataObject**\<`TDataSource`\> = [`RenderedDataObject`](RenderedDataObject.md)\<`TDataSource`\> & `Required`\<`Pick`\<[`RawRenderedRasterDataObject`](../interfaces/RawRenderedRasterDataObject.md)\<`TDataSource`\>, keyof *typeof* [`renderedRasterDataObjectDefaults`](../variables/renderedRasterDataObjectDefaults.md)\>\> & `Omit`\<[`RawRenderedRasterDataObject`](../interfaces/RawRenderedRasterDataObject.md)\<`TDataSource`\>, keyof *typeof* [`renderedRasterDataObjectDefaults`](../variables/renderedRasterDataObjectDefaults.md)\>

Defined in: [model/base.ts:179](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L179)

A [RawRenderedRasterDataObject](../interfaces/RawRenderedRasterDataObject.md) with [renderedRasterDataObjectDefaults](../variables/renderedRasterDataObjectDefaults.md) applied

## Type Parameters

### TDataSource

`TDataSource` *extends* [`DataSource`](DataSource.md)\<`string`\>
