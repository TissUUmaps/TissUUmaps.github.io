# Function: createRenderedRasterDataObject()

> **createRenderedRasterDataObject**\<`TType`, `TRawDataSource`\>(`rawRenderedRasterDataObject`): [`RenderedRasterDataObject`](../type-aliases/RenderedRasterDataObject.md)\<[`DataSource`](../type-aliases/DataSource.md)\<`TType`\>\>

Defined in: [model/base.ts:198](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L198)

Creates a [RenderedRasterDataObject](../type-aliases/RenderedRasterDataObject.md) from a [RawRenderedRasterDataObject](../interfaces/RawRenderedRasterDataObject.md) by applying [renderedRasterDataObjectDefaults](../variables/renderedRasterDataObjectDefaults.md)

## Type Parameters

### TType

`TType` *extends* `string`

### TRawDataSource

`TRawDataSource` *extends* [`RawDataSource`](../interfaces/RawDataSource.md)\<`TType`\>

## Parameters

### rawRenderedRasterDataObject

[`RawRenderedRasterDataObject`](../interfaces/RawRenderedRasterDataObject.md)\<`TRawDataSource`\>

The raw rendered raster data object

## Returns

[`RenderedRasterDataObject`](../type-aliases/RenderedRasterDataObject.md)\<[`DataSource`](../type-aliases/DataSource.md)\<`TType`\>\>

The complete rendered raster data object with default values applied
