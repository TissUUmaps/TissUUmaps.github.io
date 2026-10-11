# Class: ParquetShapesDataProvider

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesDataProvider.ts:15](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetShapesDataProvider.ts#L15)

Data provider for shape (polygon) collections

## Implements

- [`ShapesDataProvider`](../../core/interfaces/ShapesDataProvider.md)\<[`ParquetShapesDataSource`](../interfaces/ParquetShapesDataSource.md), [`ParquetShapesData`](ParquetShapesData.md), [`NormalizedParquetShapesDataSource`](../type-aliases/NormalizedParquetShapesDataSource.md)\>

## Constructors

### Constructor

> **new ParquetShapesDataProvider**(): `ParquetShapesDataProvider`

#### Returns

`ParquetShapesDataProvider`

## Properties

### name

> `readonly` **name**: `"Parquet"` = `"Parquet"`

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesDataProvider.ts:23](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetShapesDataProvider.ts#L23)

The name of the data provider

#### Implementation of

[`ShapesDataProvider`](../../core/interfaces/ShapesDataProvider.md).[`name`](../../core/interfaces/ShapesDataProvider.md#name)

***

### schema

> `readonly` **schema**: `object`

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesDataProvider.ts:25](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetShapesDataProvider.ts#L25)

The JSON schema for the data source

#### properties

> **properties**: `object`

##### properties.geometryColumn

> **geometryColumn**: `object`

##### properties.geometryColumn.type

> **type**: `string` = `"string"`

##### properties.idColumn

> **idColumn**: `object`

##### properties.idColumn.type

> **type**: `string` = `"string"`

##### properties.nameColumn

> **nameColumn**: `object`

##### properties.nameColumn.type

> **type**: `string` = `"string"`

##### properties.requestHeaders

> **requestHeaders**: `object`

##### properties.requestHeaders.additionalProperties

> **additionalProperties**: `object`

##### properties.requestHeaders.additionalProperties.type

> **type**: `string` = `"string"`

##### properties.requestHeaders.type

> **type**: `string` = `"object"`

##### properties.source

> **source**: `object`

##### properties.source.type

> **type**: `string` = `"string"`

##### properties.table

> **table**: `object`

##### properties.table.type

> **type**: `string` = `"string"`

#### required

> **required**: `string`[]

#### type

> **type**: `string` = `"object"`

#### Implementation of

[`ShapesDataProvider`](../../core/interfaces/ShapesDataProvider.md).[`schema`](../../core/interfaces/ShapesDataProvider.md#schema)

***

### uischema

> `readonly` **uischema**: `object`

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesDataProvider.ts:51](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetShapesDataProvider.ts#L51)

The JSON Forms UI schema for the data source

It must not contain a control for the data source's `source`, which the
application renders itself if the schema declares it, as a string.

#### elements

> **elements**: `object`[]

#### type

> **type**: `string` = `"VerticalLayout"`

#### Implementation of

[`ShapesDataProvider`](../../core/interfaces/ShapesDataProvider.md).[`uischema`](../../core/interfaces/ShapesDataProvider.md#uischema)

## Methods

### load()

> **load**(`normalizedDataSource`, `options?`): `Promise`\<[`ParquetShapesData`](ParquetShapesData.md)\>

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesDataProvider.ts:134](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetShapesDataProvider.ts#L134)

Opens a data source and returns the loaded data accessor

The data source has to have been normalized by
[DataProvider.normalize](../../core/interfaces/DataProvider.md#normalize) beforehand.

#### Parameters

##### normalizedDataSource

[`NormalizedParquetShapesDataSource`](../type-aliases/NormalizedParquetShapesDataSource.md)

The normalized data source to open

##### options?

[`DataProviderLoadOptions`](../../core/type-aliases/DataProviderLoadOptions.md)

See [AnnotatedDataProviderLoadOptions](../../core/type-aliases/AnnotatedDataProviderLoadOptions.md)

#### Returns

`Promise`\<[`ParquetShapesData`](ParquetShapesData.md)\>

A promise that resolves to the loaded data accessor

#### Implementation of

[`ShapesDataProvider`](../../core/interfaces/ShapesDataProvider.md).[`load`](../../core/interfaces/ShapesDataProvider.md#load)

***

### normalize()

> **normalize**(`dataSource`, `workspace`, `projectSource`): [`NormalizedParquetShapesDataSource`](../type-aliases/NormalizedParquetShapesDataSource.md)

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesDataProvider.ts:77](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetShapesDataProvider.ts#L77)

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

[`ParquetShapesDataSource`](../interfaces/ParquetShapesDataSource.md)

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

[`NormalizedParquetShapesDataSource`](../type-aliases/NormalizedParquetShapesDataSource.md)

The normalized data source

#### Implementation of

[`ShapesDataProvider`](../../core/interfaces/ShapesDataProvider.md).[`normalize`](../../core/interfaces/ShapesDataProvider.md#normalize)

***

### supports()

> **supports**(`normalizedSource`, `workspace`, `options?`): `Promise`\<`boolean`\>

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesDataProvider.ts:108](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetShapesDataProvider.ts#L108)

Returns whether a source is a GeoParquet file of shapes

A file with a (Geo)Parquet extension (see
ParquetShapesDataProvider.\_extensions) has to have a primary
geometry column that is not a point column, which is read from its
metadata without reading any data.

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

Error if the source cannot be read, or if the operation is
aborted

#### Implementation of

[`ShapesDataProvider`](../../core/interfaces/ShapesDataProvider.md).[`supports`](../../core/interfaces/ShapesDataProvider.md#supports)
