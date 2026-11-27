# Function: createImage()

> **createImage**(`rawImage`): [`Image`](../type-aliases/Image.md)

Defined in: [model/image.ts:141](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/image.ts#L141)

Creates an [Image](../type-aliases/Image.md) from a [RawImage](../interfaces/RawImage.md) by applying [imageDefaults](../variables/imageDefaults.md)

## Parameters

### rawImage

[`RawImage`](../interfaces/RawImage.md)

The raw image

## Returns

[`Image`](../type-aliases/Image.md)

The complete image with the default values of missing or `undefined` properties
