# Function: createRenderedDataObject()

> **createRenderedDataObject**\<`TType`, `TRawDataSource`\>(`rawRenderedDataObject`): [`RenderedDataObject`](../type-aliases/RenderedDataObject.md)\<[`DataSource`](../type-aliases/DataSource.md)\<`TType`\>\>

Defined in: [model/base.ts:144](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L144)

Creates a [RenderedDataObject](../type-aliases/RenderedDataObject.md) from a [RawRenderedDataObject](../interfaces/RawRenderedDataObject.md) by applying [renderedDataObjectDefaults](../variables/renderedDataObjectDefaults.md)

## Type Parameters

### TType

`TType` *extends* `string`

### TRawDataSource

`TRawDataSource` *extends* [`RawDataSource`](../interfaces/RawDataSource.md)\<`TType`\>

## Parameters

### rawRenderedDataObject

[`RawRenderedDataObject`](../interfaces/RawRenderedDataObject.md)\<`TRawDataSource`\>

The raw rendered data object

## Returns

[`RenderedDataObject`](../type-aliases/RenderedDataObject.md)\<[`DataSource`](../type-aliases/DataSource.md)\<`TType`\>\>

The complete rendered data object with default values applied
