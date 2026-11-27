# Function: createRenderedRasterDataObject()

> **createRenderedRasterDataObject**\<`TType`, `TRawDataSource`\>(`rawRenderedRasterDataObject`): [`RenderedRasterDataObject`](../type-aliases/RenderedRasterDataObject.md)\<[`DataSource`](../type-aliases/DataSource.md)\<`TType`\>\>

Defined in: [model/base.ts:215](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L215)

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

The complete rendered raster data object with the default values of missing or `undefined` properties
