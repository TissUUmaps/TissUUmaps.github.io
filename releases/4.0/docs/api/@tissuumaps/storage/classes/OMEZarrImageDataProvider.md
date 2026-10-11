# Class: OMEZarrImageDataProvider

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataProvider.ts:28](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataProvider.ts#L28)

Data provider for OME-Zarr images

Opens an [OMEZarrImageDataSource](../interfaces/OMEZarrImageDataSource.md) as [OMEZarrImageData](OMEZarrImageData.md) with one
tile source and one precomputed value histogram per channel if the image has
a channel axis (even one of length one), and with a single tile source
otherwise.

## Implements

- [`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md)\<[`OMEZarrImageDataSource`](../interfaces/OMEZarrImageDataSource.md), [`OMEZarrImageData`](OMEZarrImageData.md), [`NormalizedOMEZarrImageDataSource`](../type-aliases/NormalizedOMEZarrImageDataSource.md)\>

## Constructors

### Constructor

> **new OMEZarrImageDataProvider**(): `OMEZarrImageDataProvider`

#### Returns

`OMEZarrImageDataProvider`

## Properties

### name

> `readonly` **name**: `"OME-Zarr"` = `"OME-Zarr"`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataProvider.ts:41](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataProvider.ts#L41)

The name of the data provider

#### Implementation of

[`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md).[`name`](../../core/interfaces/ImageDataProvider.md#name)

***

### schema

> `readonly` **schema**: `object`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataProvider.ts:43](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataProvider.ts#L43)

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

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataProvider.ts:61](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataProvider.ts#L61)

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

> **load**(`normalizedDataSource`, `options?`): `Promise`\<[`OMEZarrImageData`](OMEZarrImageData.md)\>

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataProvider.ts:174](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataProvider.ts#L174)

Opens an OME-Zarr image data source and returns the loaded image data

The OME-Zarr image and its arrays are loaded once with [openOMEZarr](../functions/openOMEZarr.md)
and shared between the tile sources opened for it: one per channel for
images with a channel axis, or a single one for images without one. Every
tile source renders exactly one channel (`c`), so that its tile data holds
a single tile (see [OMEZarrImageData.getTileData](OMEZarrImageData.md#gettiledata)) and its resolved
`omero` metadata is that channel's. The `z` and `t` of the data source
select the plane to open.

For images with a channel axis, the channels are opened concurrently, each
computing the value histogram of its plane from a downsampled resolution
level as soon as its tile source has opened (see
OMEZarrImageDataProvider.\_computeChannelHistogram), so that
[OMEZarrImageData.getChannelHistogram](OMEZarrImageData.md#getchannelhistogram) can return it without
computing anything.

#### Parameters

##### normalizedDataSource

[`NormalizedOMEZarrImageDataSource`](../type-aliases/NormalizedOMEZarrImageDataSource.md)

The normalized data source to open

##### options?

[`DataProviderLoadOptions`](../../core/type-aliases/DataProviderLoadOptions.md)

See `DataProviderLoadOptions`; `workspace` is required
for workspace-relative sources

#### Returns

`Promise`\<[`OMEZarrImageData`](OMEZarrImageData.md)\>

A promise that resolves to the loaded image data

#### Throws

Error if the source is workspace-relative while no workspace is
open

#### Implementation of

[`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md).[`load`](../../core/interfaces/ImageDataProvider.md#load)

***

### normalize()

> **normalize**(`dataSource`, `workspace`, `projectSource`): [`NormalizedOMEZarrImageDataSource`](../type-aliases/NormalizedOMEZarrImageDataSource.md)

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataProvider.ts:91](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataProvider.ts#L91)

Returns the data source with [omeZarrImageDataSourceDefaults](../variables/omeZarrImageDataSourceDefaults.md) applied
and its source normalized (see `SourceUtils.normalizeSource`)

#### Parameters

##### dataSource

[`OMEZarrImageDataSource`](../interfaces/OMEZarrImageDataSource.md)

The data source to normalize

##### workspace

`FileSystemDirectoryHandle` \| `null`

The directory handle of the open workspace, if any

##### projectSource

`string` \| `null`

Where the project was loaded from, if anywhere

#### Returns

[`NormalizedOMEZarrImageDataSource`](../type-aliases/NormalizedOMEZarrImageDataSource.md)

The normalized data source

#### Implementation of

[`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md).[`normalize`](../../core/interfaces/ImageDataProvider.md#normalize)

***

### readName()

> **readName**(`normalizedSource`, `workspace`, `options?`): `Promise`\<`string` \| `undefined`\>

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataProvider.ts:141](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataProvider.ts#L141)

Reads the image's own name from its metadata (see
OMEZarrUtils.readImageName)

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

A promise that resolves to the name, or to `undefined` if the
  image has none

#### Throws

See OMEZarrUtils.readImageName

#### Implementation of

[`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md).[`readName`](../../core/interfaces/ImageDataProvider.md#readname)

***

### supports()

> **supports**(`normalizedSource`, `workspace`, `options?`): `Promise`\<`boolean`\>

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataProvider.ts:117](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataProvider.ts#L117)

Returns whether a source is an OME-Zarr image that is no label image (see
OMEZarrUtils.inspectImage)

#### Parameters

##### normalizedSource

`string`

The normalized source to check

##### workspace

`FileSystemDirectoryHandle` \| `null`

The directory handle of the open workspace, if any

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to whether the source is supported

#### Throws

See OMEZarrUtils.inspectImage

#### Implementation of

[`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md).[`supports`](../../core/interfaces/ImageDataProvider.md#supports)
