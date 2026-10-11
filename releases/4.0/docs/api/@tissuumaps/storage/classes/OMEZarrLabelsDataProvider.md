# Class: OMEZarrLabelsDataProvider

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataProvider.ts:25](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataProvider.ts#L25)

Data provider for OME-Zarr label images

Opens an [OMEZarrLabelsDataSource](../interfaces/OMEZarrLabelsDataSource.md) as [OMEZarrLabelsData](OMEZarrLabelsData.md) with a
single tile source rendering the first channel; the image's channel axis, if
any, is not iterated, and `image-label` metadata is not read.

## Implements

- [`LabelsDataProvider`](../../core/interfaces/LabelsDataProvider.md)\<[`OMEZarrLabelsDataSource`](../interfaces/OMEZarrLabelsDataSource.md), [`OMEZarrLabelsData`](OMEZarrLabelsData.md), [`NormalizedOMEZarrLabelsDataSource`](../type-aliases/NormalizedOMEZarrLabelsDataSource.md)\>

## Constructors

### Constructor

> **new OMEZarrLabelsDataProvider**(): `OMEZarrLabelsDataProvider`

#### Returns

`OMEZarrLabelsDataProvider`

## Properties

### name

> `readonly` **name**: `"OME-Zarr"` = `"OME-Zarr"`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataProvider.ts:30](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataProvider.ts#L30)

The name of the data provider

#### Implementation of

[`LabelsDataProvider`](../../core/interfaces/LabelsDataProvider.md).[`name`](../../core/interfaces/LabelsDataProvider.md#name)

***

### schema

> `readonly` **schema**: `object`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataProvider.ts:32](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataProvider.ts#L32)

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

##### properties.table

> **table**: `object`

##### properties.table.type

> **type**: `string` = `"string"`

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

[`LabelsDataProvider`](../../core/interfaces/LabelsDataProvider.md).[`schema`](../../core/interfaces/LabelsDataProvider.md#schema)

***

### uischema

> `readonly` **uischema**: `object`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataProvider.ts:53](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataProvider.ts#L53)

The JSON Forms UI schema for the data source

It must not contain a control for the data source's `source`, which the
application renders itself if the schema declares it, as a string.

#### elements

> **elements**: (\{ `elements`: `object`[]; `label?`: `undefined`; `scope?`: `undefined`; `type`: `string`; \} \| \{ `elements?`: `undefined`; `label`: `string`; `scope`: `string`; `type`: `string`; \})[]

#### type

> **type**: `string` = `"VerticalLayout"`

#### Implementation of

[`LabelsDataProvider`](../../core/interfaces/LabelsDataProvider.md).[`uischema`](../../core/interfaces/LabelsDataProvider.md#uischema)

## Methods

### load()

> **load**(`normalizedDataSource`, `options?`): `Promise`\<[`OMEZarrLabelsData`](OMEZarrLabelsData.md)\>

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataProvider.ts:162](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataProvider.ts#L162)

Opens an OME-Zarr labels data source and returns the loaded labels data

The OME-Zarr label image and its arrays are loaded with
[openOMEZarr](../functions/openOMEZarr.md), and a single tile source rendering its first channel
is opened for them. The `z` and `t` of the data source select the plane to
open.

#### Parameters

##### normalizedDataSource

[`NormalizedOMEZarrLabelsDataSource`](../type-aliases/NormalizedOMEZarrLabelsDataSource.md)

The normalized data source to open

##### options?

[`DataProviderLoadOptions`](../../core/type-aliases/DataProviderLoadOptions.md)

See `DataProviderLoadOptions`; `workspace` is required
for workspace-relative sources

#### Returns

`Promise`\<[`OMEZarrLabelsData`](OMEZarrLabelsData.md)\>

A promise that resolves to the loaded labels data

#### Throws

Error if the source is workspace-relative while no workspace is
open

#### Implementation of

[`LabelsDataProvider`](../../core/interfaces/LabelsDataProvider.md).[`load`](../../core/interfaces/LabelsDataProvider.md#load)

***

### normalize()

> **normalize**(`dataSource`, `workspace`, `projectSource`): [`NormalizedOMEZarrLabelsDataSource`](../type-aliases/NormalizedOMEZarrLabelsDataSource.md)

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataProvider.ts:88](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataProvider.ts#L88)

Returns the data source with [omeZarrLabelsDataSourceDefaults](../variables/omeZarrLabelsDataSourceDefaults.md)
applied and its source normalized (see `SourceUtils.normalizeSource`)

#### Parameters

##### dataSource

[`OMEZarrLabelsDataSource`](../interfaces/OMEZarrLabelsDataSource.md)

The data source to normalize

##### workspace

`FileSystemDirectoryHandle` \| `null`

The directory handle of the open workspace, if any

##### projectSource

`string` \| `null`

Where the project was loaded from, if anywhere

#### Returns

[`NormalizedOMEZarrLabelsDataSource`](../type-aliases/NormalizedOMEZarrLabelsDataSource.md)

The normalized data source

#### Implementation of

[`LabelsDataProvider`](../../core/interfaces/LabelsDataProvider.md).[`normalize`](../../core/interfaces/LabelsDataProvider.md#normalize)

***

### readName()

> **readName**(`normalizedSource`, `workspace`, `options?`): `Promise`\<`string` \| `undefined`\>

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataProvider.ts:139](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataProvider.ts#L139)

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

[`LabelsDataProvider`](../../core/interfaces/LabelsDataProvider.md).[`readName`](../../core/interfaces/LabelsDataProvider.md#readname)

***

### supports()

> **supports**(`normalizedSource`, `workspace`, `options?`): `Promise`\<`boolean`\>

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataProvider.ts:115](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataProvider.ts#L115)

Returns whether a source is an OME-Zarr image, which may be a label image
even without `image-label` attributes (see
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

[`LabelsDataProvider`](../../core/interfaces/LabelsDataProvider.md).[`supports`](../../core/interfaces/LabelsDataProvider.md#supports)
