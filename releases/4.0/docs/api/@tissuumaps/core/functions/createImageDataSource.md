# Function: createImageDataSource()

> **createImageDataSource**\<`TType`\>(`rawImageDataSource`): [`ImageDataSource`](../type-aliases/ImageDataSource.md)\<`TType`\>

Defined in: [model/image.ts:180](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/image.ts#L180)

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

The complete image data source with the default values of missing or `undefined` properties
