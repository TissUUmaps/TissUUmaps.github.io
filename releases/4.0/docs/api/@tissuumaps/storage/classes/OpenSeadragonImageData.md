# Class: OpenSeadragonImageData

Defined in: [@tissuumaps-storage/src/openseadragon/OpenSeadragonImageData.ts:7](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/openseadragon/OpenSeadragonImageData.ts#L7)

Loaded image data providing one or more OpenSeadragon-compatible tile sources

Image data is either multi-channel, in which case it provides one tile source
per channel, addressed by channel index; or it is not, in which case it
provides a single tile source that is not addressed by channel.
[ImageData.getSizeC](../../core/interfaces/ImageData.md#getsizec) returns `undefined` for image data that is not multi-channel.

Multi-channel image data that implements [RasterData.getTileData](../../core/interfaces/RasterData.md#gettiledata)
provides a single sample ("grayscale value") per pixel and channel, which the
renderer contrast-stretches and colorizes (see
[ImageData.getChannelContrastLimits](../../core/interfaces/ImageData.md#getchannelcontrastlimits) and
[ImageData.getChannelColor](../../core/interfaces/ImageData.md#getchannelcolor)). Multi-channel image data that does not
implement it is free to provide grayscale or RGB tile sources per channel,
which are drawn as they are.

## Implements

- [`ImageData`](../../core/interfaces/ImageData.md)

## Constructors

### Constructor

> **new OpenSeadragonImageData**(`tileSource`, `objectUrl?`): `OpenSeadragonImageData`

Defined in: [@tissuumaps-storage/src/openseadragon/OpenSeadragonImageData.ts:11](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/openseadragon/OpenSeadragonImageData.ts#L11)

#### Parameters

##### tileSource

`string` \| `object`

##### objectUrl?

`string`

#### Returns

`OpenSeadragonImageData`

## Methods

### close()

> **close**(): `void`

Defined in: [@tissuumaps-storage/src/openseadragon/OpenSeadragonImageData.ts:27](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/openseadragon/OpenSeadragonImageData.ts#L27)

Releases all resources held by this data object

#### Returns

`void`

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`close`](../../core/interfaces/ImageData.md#close)

***

### getSizeC()

> **getSizeC**(): `number` \| `undefined`

Defined in: [@tissuumaps-storage/src/openseadragon/OpenSeadragonImageData.ts:16](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/openseadragon/OpenSeadragonImageData.ts#L16)

Returns the number of channels in the image, or undefined if not multi-channel

#### Returns

`number` \| `undefined`

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getSizeC`](../../core/interfaces/ImageData.md#getsizec)

***

### getTileSource()

> **getTileSource**(`c?`): `string` \| `object` \| [`CustomTileSource`](../../core/interfaces/CustomTileSource.md)

Defined in: [@tissuumaps-storage/src/openseadragon/OpenSeadragonImageData.ts:20](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/openseadragon/OpenSeadragonImageData.ts#L20)

Returns the tile source of a channel, or the only tile source of image data that is not multi-channel

#### Parameters

##### c?

`number`

The channel index (0-based), required for multi-channel image
data and to be omitted otherwise

#### Returns

`string` \| `object` \| [`CustomTileSource`](../../core/interfaces/CustomTileSource.md)

The tile source, which can be a URL string, a TileSourceConfig
object, or a CustomTileSource object

#### Throws

Error if `c` is omitted for multi-channel image data, if `c` is
passed for image data that is not multi-channel, or if `c` is out of bounds

#### Implementation of

[`ImageData`](../../core/interfaces/ImageData.md).[`getTileSource`](../../core/interfaces/ImageData.md#gettilesource)
