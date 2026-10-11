# Class: TIFFLabelsDataProvider

Defined in: [@tissuumaps-storage/src/tiff/TIFFLabelsDataProvider.ts:32](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFLabelsDataProvider.ts#L32)

Data provider for label masks stored in TIFF files

The file is read like any other TIFF (see `TIFFImageDataProvider`), but its
pixels are label IDs rather than intensities: it has to hold a single
channel of integers, which the renderer colors per ID instead of
contrast-stretching them.

Which labels the mask holds is not recorded in the file, and is not read
from its pixels: the renderer resolves each label as it is first drawn.

## Implements

- [`LabelsDataProvider`](../../core/interfaces/LabelsDataProvider.md)\<[`TIFFLabelsDataSource`](../interfaces/TIFFLabelsDataSource.md), [`TIFFLabelsData`](TIFFLabelsData.md), [`NormalizedTIFFLabelsDataSource`](../type-aliases/NormalizedTIFFLabelsDataSource.md)\>

## Constructors

### Constructor

> **new TIFFLabelsDataProvider**(): `TIFFLabelsDataProvider`

#### Returns

`TIFFLabelsDataProvider`

## Properties

### name

> `readonly` **name**: `"TIFF"` = `"TIFF"`

Defined in: [@tissuumaps-storage/src/tiff/TIFFLabelsDataProvider.ts:40](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFLabelsDataProvider.ts#L40)

The name of the data provider

#### Implementation of

[`LabelsDataProvider`](../../core/interfaces/LabelsDataProvider.md).[`name`](../../core/interfaces/LabelsDataProvider.md#name)

***

### schema

> `readonly` **schema**: `object`

Defined in: [@tissuumaps-storage/src/tiff/TIFFLabelsDataProvider.ts:42](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFLabelsDataProvider.ts#L42)

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

Defined in: [@tissuumaps-storage/src/tiff/TIFFLabelsDataProvider.ts:63](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFLabelsDataProvider.ts#L63)

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

> **load**(`normalizedDataSource`, `options?`): `Promise`\<[`TIFFLabelsData`](TIFFLabelsData.md)\>

Defined in: [@tissuumaps-storage/src/tiff/TIFFLabelsDataProvider.ts:167](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFLabelsDataProvider.ts#L167)

Opens a TIFF labels data source and returns the loaded label mask

The file is opened with openTIFF, and its structure read by the
parser of its format (see findTIFFParser), with `z` and `t`
selecting the plane. The pixels are not read: the renderer resolves the
labels as it draws them.

#### Parameters

##### normalizedDataSource

[`NormalizedTIFFLabelsDataSource`](../type-aliases/NormalizedTIFFLabelsDataSource.md)

The normalized data source to open

##### options?

[`DataProviderLoadOptions`](../../core/type-aliases/DataProviderLoadOptions.md)

See `DataProviderLoadOptions`; `workspace` is required
for workspace-relative sources

#### Returns

`Promise`\<[`TIFFLabelsData`](TIFFLabelsData.md)\>

A promise that resolves to the loaded label mask

#### Throws

Error if the source is workspace-relative while no workspace is
open, or if the file is not a single channel of integers of at most 32
bits

#### Implementation of

[`LabelsDataProvider`](../../core/interfaces/LabelsDataProvider.md).[`load`](../../core/interfaces/LabelsDataProvider.md#load)

***

### normalize()

> **normalize**(`dataSource`, `workspace`, `projectSource`): [`NormalizedTIFFLabelsDataSource`](../type-aliases/NormalizedTIFFLabelsDataSource.md)

Defined in: [@tissuumaps-storage/src/tiff/TIFFLabelsDataProvider.ts:98](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFLabelsDataProvider.ts#L98)

Returns the data source with [tiffLabelsDataSourceDefaults](../variables/tiffLabelsDataSourceDefaults.md) applied
and its source normalized (see `SourceUtils.normalizeSource`)

#### Parameters

##### dataSource

[`TIFFLabelsDataSource`](../interfaces/TIFFLabelsDataSource.md)

The data source to normalize

##### workspace

`FileSystemDirectoryHandle` \| `null`

The directory handle of the open workspace, if any

##### projectSource

`string` \| `null`

Where the project was loaded from, if anywhere

#### Returns

[`NormalizedTIFFLabelsDataSource`](../type-aliases/NormalizedTIFFLabelsDataSource.md)

The normalized data source

#### Implementation of

[`LabelsDataProvider`](../../core/interfaces/LabelsDataProvider.md).[`normalize`](../../core/interfaces/LabelsDataProvider.md#normalize)

***

### readName()

> **readName**(`normalizedSource`, `workspace`, `options?`): `Promise`\<`string` \| `undefined`\>

Defined in: [@tissuumaps-storage/src/tiff/TIFFLabelsDataProvider.ts:140](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFLabelsDataProvider.ts#L140)

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

[`LabelsDataProvider`](../../core/interfaces/LabelsDataProvider.md).[`readName`](../../core/interfaces/LabelsDataProvider.md#readname)

***

### supports()

> **supports**(`normalizedSource`): `Promise`\<`boolean`\>

Defined in: [@tissuumaps-storage/src/tiff/TIFFLabelsDataProvider.ts:121](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFLabelsDataProvider.ts#L121)

Returns whether a source has a TIFF file extension (see
TIFFLabelsDataProvider.\_extensions)

#### Parameters

##### normalizedSource

`string`

The normalized source to check

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to whether the source is supported

#### Implementation of

[`LabelsDataProvider`](../../core/interfaces/LabelsDataProvider.md).[`supports`](../../core/interfaces/LabelsDataProvider.md#supports)
