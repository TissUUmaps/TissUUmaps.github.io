# Function: createImageDataSource()

> **createImageDataSource**\<`TType`\>(`rawImageDataSource`): [`ImageDataSource`](../type-aliases/ImageDataSource.md)\<`TType`\>

Defined in: [model/image.ts:179](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/image.ts#L179)

Creates an [ImageDataSource](../type-aliases/ImageDataSource.md) from a [RawImageDataSource](../interfaces/RawImageDataSource.md) by applying [imageDataSourceDefaults](../variables/imageDataSourceDefaults.md)

## Type Parameters

### TType

`TType` *extends* `string`

## Parameters

### rawImageDataSource

[`RawImageDataSource`](../interfaces/RawImageDataSource.md)\<`TType`\>

The raw image data source

## Returns

[`ImageDataSource`](../type-aliases/ImageDataSource.md)\<`TType`\>

The complete image data source with default values applied
