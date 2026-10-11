# Class: TIFFImageDataProvider

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageDataProvider.ts:34](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageDataProvider.ts#L34)

Data provider for images stored in TIFF files

Opens a [TIFFImageDataSource](../interfaces/TIFFImageDataSource.md) as [TIFFImageData](TIFFImageData.md), with one tile
source per channel for multi-channel files and a single one for files drawn
in their own colors. The format is recognized from the file's metadata (see
`findTIFFParser`), which provides the channel names and colors; the
histograms the renderer stretches the channels over are read from the
pixels.

## Implements

- [`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md)\<[`TIFFImageDataSource`](../interfaces/TIFFImageDataSource.md), [`TIFFImageData`](TIFFImageData.md), [`NormalizedTIFFImageDataSource`](../type-aliases/NormalizedTIFFImageDataSource.md)\>

## Constructors

### Constructor

> **new TIFFImageDataProvider**(): `TIFFImageDataProvider`

#### Returns

`TIFFImageDataProvider`

## Properties

### name

> `readonly` **name**: `"TIFF"` = `"TIFF"`

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageDataProvider.ts:51](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageDataProvider.ts#L51)

The name of the data provider

#### Implementation of

[`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md).[`name`](../../core/interfaces/ImageDataProvider.md#name)

***

### schema

> `readonly` **schema**: `object`

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageDataProvider.ts:53](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageDataProvider.ts#L53)

The JSON schema for the data source

#### properties

> **properties**: `object`

##### properties.source

> **source**: `object`

##### properties.source.type

> **type**: `string` = `"string"`

##### properties.t

> **t**: `object`

##### properties.t.minimum

> **minimum**: `number` = `0`

##### properties.t.type

> **type**: `string` = `"integer"`

##### properties.z

> **z**: `object`

##### properties.z.minimum

> **minimum**: `number` = `0`

##### properties.z.type

> **type**: `string` = `"integer"`

#### required

> **required**: `string`[]

#### type

> **type**: `string` = `"object"`

#### Implementation of

[`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md).[`schema`](../../core/interfaces/ImageDataProvider.md#schema)

***

### uischema

> `readonly` **uischema**: `object`

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageDataProvider.ts:71](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageDataProvider.ts#L71)

The JSON Forms UI schema for the data source

It must not contain a control for the data source's `source`, which the
application renders itself if the schema declares it, as a string.

#### elements

> **elements**: `object`[]

#### type

> **type**: `string` = `"VerticalLayout"`

#### Implementation of

[`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md).[`uischema`](../../core/interfaces/ImageDataProvider.md#uischema)

## Methods

### load()

> **load**(`normalizedDataSource`, `options?`): `Promise`\<[`TIFFImageData`](TIFFImageData.md)\>

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageDataProvider.ts:170](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageDataProvider.ts#L170)

Opens a TIFF image data source and returns the loaded image data

The file is opened with openTIFF, and its structure read by the
parser of its format (see findTIFFParser), with `z` and `t`
selecting the plane. The channel histograms are read afterwards, a few
channels at a time (see
TIFFImageDataProvider.\_computeChannelHistograms).

#### Parameters

##### normalizedDataSource

[`NormalizedTIFFImageDataSource`](../type-aliases/NormalizedTIFFImageDataSource.md)

The normalized data source to open

##### options?

[`DataProviderLoadOptions`](../../core/type-aliases/DataProviderLoadOptions.md)

See `DataProviderLoadOptions`; `workspace` is required
for workspace-relative sources

#### Returns

`Promise`\<[`TIFFImageData`](TIFFImageData.md)\>

A promise that resolves to the loaded image data

#### Throws

Error if the source is workspace-relative while no workspace is
open, or if the file holds a TIFF no parser recognizes

#### Implementation of

[`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md).[`load`](../../core/interfaces/ImageDataProvider.md#load)

***

### normalize()

> **normalize**(`dataSource`, `workspace`, `projectSource`): [`NormalizedTIFFImageDataSource`](../type-aliases/NormalizedTIFFImageDataSource.md)

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageDataProvider.ts:101](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageDataProvider.ts#L101)

Returns the data source with [tiffImageDataSourceDefaults](../variables/tiffImageDataSourceDefaults.md) applied
and its source normalized (see `SourceUtils.normalizeSource`)

#### Parameters

##### dataSource

[`TIFFImageDataSource`](../interfaces/TIFFImageDataSource.md)

The data source to normalize

##### workspace

`FileSystemDirectoryHandle` \| `null`

The directory handle of the open workspace, if any

##### projectSource

`string` \| `null`

Where the project was loaded from, if anywhere

#### Returns

[`NormalizedTIFFImageDataSource`](../type-aliases/NormalizedTIFFImageDataSource.md)

The normalized data source

#### Implementation of

[`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md).[`normalize`](../../core/interfaces/ImageDataProvider.md#normalize)

***

### readName()

> **readName**(`normalizedSource`, `workspace`, `options?`): `Promise`\<`string` \| `undefined`\>

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageDataProvider.ts:143](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageDataProvider.ts#L143)

Reads the image's own name for a data object backed by a source, which
only OME-TIFF files have (see OMETIFFParser.readImageName)

#### Parameters

##### normalizedSource

`string`

The normalized source

##### workspace

`FileSystemDirectoryHandle` \| `null`

The directory handle of the open workspace, if any

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`string` \| `undefined`\>

A promise that resolves to the name, if any

#### Throws

Error if the source is workspace-relative while no workspace is
open, or if the file cannot be read

#### Implementation of

[`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md).[`readName`](../../core/interfaces/ImageDataProvider.md#readname)

***

### supports()

> **supports**(`normalizedSource`): `Promise`\<`boolean`\>

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageDataProvider.ts:124](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageDataProvider.ts#L124)

Returns whether a source has a TIFF file extension (see
TIFFImageDataProvider.\_extensions)

#### Parameters

##### normalizedSource

`string`

The normalized source to check

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to whether the source is supported

#### Implementation of

[`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md).[`supports`](../../core/interfaces/ImageDataProvider.md#supports)
