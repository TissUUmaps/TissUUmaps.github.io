# Class: ParquetTableDataProvider

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableDataProvider.ts:17](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetTableDataProvider.ts#L17)

Data provider for tabular data

## Implements

- [`TableDataProvider`](../../core/interfaces/TableDataProvider.md)\<[`ParquetTableDataSource`](../interfaces/ParquetTableDataSource.md), [`ParquetTableData`](ParquetTableData.md), [`NormalizedParquetTableDataSource`](../type-aliases/NormalizedParquetTableDataSource.md)\>

## Constructors

### Constructor

> **new ParquetTableDataProvider**(): `ParquetTableDataProvider`

#### Returns

`ParquetTableDataProvider`

## Properties

### name

> `readonly` **name**: `"Parquet"` = `"Parquet"`

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableDataProvider.ts:25](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetTableDataProvider.ts#L25)

The name of the data provider

#### Implementation of

[`TableDataProvider`](../../core/interfaces/TableDataProvider.md).[`name`](../../core/interfaces/TableDataProvider.md#name)

***

### schema

> `readonly` **schema**: `object`

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableDataProvider.ts:27](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetTableDataProvider.ts#L27)

The JSON schema for the data source

#### properties

> **properties**: `object`

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

#### required

> **required**: `string`[]

#### type

> **type**: `string` = `"object"`

#### Implementation of

[`TableDataProvider`](../../core/interfaces/TableDataProvider.md).[`schema`](../../core/interfaces/TableDataProvider.md#schema)

***

### uischema

> `readonly` **uischema**: `object`

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableDataProvider.ts:47](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetTableDataProvider.ts#L47)

The JSON Forms UI schema for the data source

It must not contain a control for the data source's `source`, which the
application renders itself if the schema declares it, as a string.

#### elements

> **elements**: `object`[]

#### type

> **type**: `string` = `"VerticalLayout"`

#### Implementation of

[`TableDataProvider`](../../core/interfaces/TableDataProvider.md).[`uischema`](../../core/interfaces/TableDataProvider.md#uischema)

## Methods

### load()

> **load**(`normalizedDataSource`, `options?`): `Promise`\<[`ParquetTableData`](ParquetTableData.md)\>

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableDataProvider.ts:108](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetTableDataProvider.ts#L108)

Loads a table from a Parquet file, or from the partition files of a Dask
dataset directory, in partition order

A remote directory cannot be listed, so its partition files are requested
in order until one is missing.

#### Parameters

##### normalizedDataSource

[`NormalizedParquetTableDataSource`](../type-aliases/NormalizedParquetTableDataSource.md)

The normalized data source

##### options?

[`DataProviderLoadOptions`](../../core/type-aliases/DataProviderLoadOptions.md)

Optional abort signal, progress callback and workspace

#### Returns

`Promise`\<[`ParquetTableData`](ParquetTableData.md)\>

A promise that resolves to the table

#### Throws

Error if the source names neither a Parquet file nor a directory
holding partition files

#### Implementation of

[`TableDataProvider`](../../core/interfaces/TableDataProvider.md).[`load`](../../core/interfaces/TableDataProvider.md#load)

***

### normalize()

> **normalize**(`dataSource`, `workspace`, `projectSource`): [`NormalizedParquetTableDataSource`](../type-aliases/NormalizedParquetTableDataSource.md)

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableDataProvider.ts:63](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetTableDataProvider.ts#L63)

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

[`ParquetTableDataSource`](../interfaces/ParquetTableDataSource.md)

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

[`NormalizedParquetTableDataSource`](../type-aliases/NormalizedParquetTableDataSource.md)

The normalized data source

#### Implementation of

[`TableDataProvider`](../../core/interfaces/TableDataProvider.md).[`normalize`](../../core/interfaces/TableDataProvider.md#normalize)

***

### supports()

> **supports**(`normalizedSource`): `Promise`\<`boolean`\>

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableDataProvider.ts:87](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetTableDataProvider.ts#L87)

Returns whether a source has a Parquet or GeoParquet file extension (see
ParquetTableDataProvider.\_extensions), as the point geometry of
GeoParquet files is read as coordinate columns

#### Parameters

##### normalizedSource

`string`

The normalized source to check

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to whether the source is supported

#### Implementation of

[`TableDataProvider`](../../core/interfaces/TableDataProvider.md).[`supports`](../../core/interfaces/TableDataProvider.md#supports)
