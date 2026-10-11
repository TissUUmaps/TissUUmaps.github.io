# Class: OpenSeadragonImageDataProvider

Defined in: [@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataProvider.ts:14](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataProvider.ts#L14)

Data provider for raster images

## Implements

- [`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md)\<[`OpenSeadragonImageDataSource`](../interfaces/OpenSeadragonImageDataSource.md), [`OpenSeadragonImageData`](OpenSeadragonImageData.md), [`NormalizedOpenSeadragonImageDataSource`](../type-aliases/NormalizedOpenSeadragonImageDataSource.md)\>

## Constructors

### Constructor

> **new OpenSeadragonImageDataProvider**(): `OpenSeadragonImageDataProvider`

#### Returns

`OpenSeadragonImageDataProvider`

## Properties

### name

> `readonly` **name**: `"Image (e.g. PNG, JPEG, DZI, IIIF)"` = `"Image (e.g. PNG, JPEG, DZI, IIIF)"`

Defined in: [@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataProvider.ts:45](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataProvider.ts#L45)

The name of the data provider

#### Implementation of

[`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md).[`name`](../../core/interfaces/ImageDataProvider.md#name)

***

### schema

> `readonly` **schema**: `object`

Defined in: [@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataProvider.ts:47](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataProvider.ts#L47)

The JSON schema for the data source

#### anyOf

> **anyOf**: `object`[]

#### properties

> **properties**: `object`

##### properties.source

> **source**: `object`

##### properties.source.type

> **type**: `string` = `"string"`

##### properties.tileSource

> **tileSource**: `object`

##### properties.tileSource.type

> **type**: `string`[]

#### type

> **type**: `string` = `"object"`

#### Implementation of

[`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md).[`schema`](../../core/interfaces/ImageDataProvider.md#schema)

***

### uischema

> `readonly` **uischema**: `object`

Defined in: [@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataProvider.ts:56](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataProvider.ts#L56)

The JSON Forms UI schema for the data source

It must not contain a control for the data source's `source`, which the
application renders itself if the schema declares it, as a string.

#### elements

> **elements**: `never`[] = `[]`

#### type

> **type**: `string` = `"VerticalLayout"`

#### Implementation of

[`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md).[`uischema`](../../core/interfaces/ImageDataProvider.md#uischema)

## Methods

### load()

> **load**(`normalizedDataSource`, `options?`): `Promise`\<[`OpenSeadragonImageData`](OpenSeadragonImageData.md)\>

Defined in: [@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataProvider.ts:129](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataProvider.ts#L129)

Opens a data source and returns the loaded data accessor

The data source has to have been normalized by
[DataProvider.normalize](../../core/interfaces/DataProvider.md#normalize) beforehand.

#### Parameters

##### normalizedDataSource

[`NormalizedOpenSeadragonImageDataSource`](../type-aliases/NormalizedOpenSeadragonImageDataSource.md)

The normalized data source to open

##### options?

[`DataProviderLoadOptions`](../../core/type-aliases/DataProviderLoadOptions.md)

See [DataProviderLoadOptions](../../core/type-aliases/DataProviderLoadOptions.md)

#### Returns

`Promise`\<[`OpenSeadragonImageData`](OpenSeadragonImageData.md)\>

A promise that resolves to the loaded data accessor

#### Implementation of

[`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md).[`load`](../../core/interfaces/ImageDataProvider.md#load)

***

### normalize()

> **normalize**(`dataSource`, `workspace`, `projectSource`): [`NormalizedOpenSeadragonImageDataSource`](../type-aliases/NormalizedOpenSeadragonImageDataSource.md)

Defined in: [@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataProvider.ts:63](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataProvider.ts#L63)

Returns the data source with all of this data provider's defaults applied
and its source normalized

Data sources that normalize to the same value are considered equal, and
their data is loaded only once and shared between all referencing objects.
Normalization has to be idempotent: normalizing an already normalized data
source must return the same value again.

The source is normalized with `SourceUtils.normalizeSource`, which resolves
it against the project source and the open workspace, so the result has to
be recomputed when either changes.

Normalizing may throw, e.g. for a source that cannot be resolved against
the given workspace and project source. The data cache catches it, so only
the objects referencing that data source fail to load; the data of all
other objects is unaffected.

#### Parameters

##### dataSource

[`OpenSeadragonImageDataSource`](../interfaces/OpenSeadragonImageDataSource.md)

The data source to normalize

##### workspace

`FileSystemDirectoryHandle` \| `null`

The directory handle of the open workspace, if any

##### projectSource

`string` \| `null`

Where the project was loaded from: its absolute URL,
the workspace-relative path of the project file, or `null` for projects
that were loaded from neither

#### Returns

[`NormalizedOpenSeadragonImageDataSource`](../type-aliases/NormalizedOpenSeadragonImageDataSource.md)

The normalized data source

#### Implementation of

[`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md).[`normalize`](../../core/interfaces/ImageDataProvider.md#normalize)

***

### supports()

> **supports**(`normalizedSource`): `Promise`\<`boolean`\>

Defined in: [@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataProvider.ts:119](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataProvider.ts#L119)

Returns whether a source is a plain image or a tile source descriptor,
judged by its extension (see
OpenSeadragonImageDataProvider.\_imageFileExtensions and
OpenSeadragonImageDataProvider.\_descriptorFileExtensions)

Descriptors are only supported as URLs, as they cannot be opened from the
workspace (see [OpenSeadragonImageDataProvider.normalize](#normalize)).

#### Parameters

##### normalizedSource

`string`

The normalized source to check

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to whether the source is supported

#### Implementation of

[`ImageDataProvider`](../../core/interfaces/ImageDataProvider.md).[`supports`](../../core/interfaces/ImageDataProvider.md#supports)
