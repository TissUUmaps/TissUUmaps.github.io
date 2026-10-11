# Class: TablePointsDataProvider

Defined in: [@tissuumaps-storage/src/table/TablePointsDataProvider.ts:18](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsDataProvider.ts#L18)

Data provider for point clouds

## Implements

- [`PointsDataProvider`](../../core/interfaces/PointsDataProvider.md)\<[`TablePointsDataSource`](../interfaces/TablePointsDataSource.md), [`TablePointsData`](TablePointsData.md), [`NormalizedTablePointsDataSource`](../type-aliases/NormalizedTablePointsDataSource.md)\>

## Constructors

### Constructor

> **new TablePointsDataProvider**(`options`): `TablePointsDataProvider`

Defined in: [@tissuumaps-storage/src/table/TablePointsDataProvider.ts:87](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsDataProvider.ts#L87)

Creates the data provider

#### Parameters

##### options

`getTableDataProviders` returns the table data providers
  registered with the application, by data source type; it is called
  whenever they are needed, as providers may be registered at any time.
  `addTable` adds a table backed by a data source to the project and
  resolves to its ID (see [TablePointsDataProvider.prepareDataSource](#preparedatasource))

###### addTable

(`dataSource`, `options?`) => `Promise`\<`string`\>

###### getTableDataProviders

() => `Map`\<`string`, [`TableDataProvider`](../../core/interfaces/TableDataProvider.md)\<[`TableDataSource`](../../core/type-aliases/TableDataSource.md), [`TableData`](../../core/interfaces/TableData.md), [`TableDataSource`](../../core/type-aliases/TableDataSource.md)\>\>

#### Returns

`TablePointsDataProvider`

## Properties

### name

> `readonly` **name**: `"Table"` = `"Table"`

Defined in: [@tissuumaps-storage/src/table/TablePointsDataProvider.ts:23](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsDataProvider.ts#L23)

The name of the data provider

#### Implementation of

[`PointsDataProvider`](../../core/interfaces/PointsDataProvider.md).[`name`](../../core/interfaces/PointsDataProvider.md#name)

***

### schema

> `readonly` **schema**: `object`

Defined in: [@tissuumaps-storage/src/table/TablePointsDataProvider.ts:25](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsDataProvider.ts#L25)

The JSON schema for the data source

#### anyOf

> **anyOf**: `object`[]

#### properties

> **properties**: `object`

##### properties.source

> **source**: `object`

##### properties.source.type

> **type**: `string` = `"string"`

##### properties.table

> **table**: `object`

##### properties.table.description

> **description**: `string` = `"Ignored if a source is given, which is added as a table"`

##### properties.table.type

> **type**: `string` = `"string"`

##### properties.x

> **x**: `object`

##### properties.x.default

> **default**: `string` = `tablePointsDataSourceDefaults.x`

##### properties.x.type

> **type**: `string` = `"string"`

##### properties.y

> **y**: `object`

##### properties.y.default

> **default**: `string` = `tablePointsDataSourceDefaults.y`

##### properties.y.type

> **type**: `string` = `"string"`

#### type

> **type**: `string` = `"object"`

#### Implementation of

[`PointsDataProvider`](../../core/interfaces/PointsDataProvider.md).[`schema`](../../core/interfaces/PointsDataProvider.md#schema)

***

### uischema

> `readonly` **uischema**: `object`

Defined in: [@tissuumaps-storage/src/table/TablePointsDataProvider.ts:47](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsDataProvider.ts#L47)

The JSON Forms UI schema for the data source

It must not contain a control for the data source's `source`, which the
application renders itself if the schema declares it, as a string.

#### elements

> **elements**: `object`[]

#### type

> **type**: `string` = `"VerticalLayout"`

#### Implementation of

[`PointsDataProvider`](../../core/interfaces/PointsDataProvider.md).[`uischema`](../../core/interfaces/PointsDataProvider.md#uischema)

## Methods

### load()

> **load**(`normalizedDataSource`, `options?`): `Promise`\<[`TablePointsData`](TablePointsData.md)\>

Defined in: [@tissuumaps-storage/src/table/TablePointsDataProvider.ts:219](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsDataProvider.ts#L219)

Opens a data source and returns the loaded data accessor

The data source has to have been normalized by
[DataProvider.normalize](../../core/interfaces/DataProvider.md#normalize) beforehand.

#### Parameters

##### normalizedDataSource

[`NormalizedTablePointsDataSource`](../type-aliases/NormalizedTablePointsDataSource.md)

The normalized data source to open

##### options?

[`AnnotatedDataProviderLoadOptions`](../../core/type-aliases/AnnotatedDataProviderLoadOptions.md)

See [AnnotatedDataProviderLoadOptions](../../core/type-aliases/AnnotatedDataProviderLoadOptions.md)

#### Returns

`Promise`\<[`TablePointsData`](TablePointsData.md)\>

A promise that resolves to the loaded data accessor

#### Implementation of

[`PointsDataProvider`](../../core/interfaces/PointsDataProvider.md).[`load`](../../core/interfaces/PointsDataProvider.md#load)

***

### normalize()

> **normalize**(`dataSource`): [`NormalizedTablePointsDataSource`](../type-aliases/NormalizedTablePointsDataSource.md)

Defined in: [@tissuumaps-storage/src/table/TablePointsDataProvider.ts:102](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsDataProvider.ts#L102)

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

[`TablePointsDataSource`](../interfaces/TablePointsDataSource.md)

The data source to normalize

#### Returns

[`NormalizedTablePointsDataSource`](../type-aliases/NormalizedTablePointsDataSource.md)

The normalized data source

#### Implementation of

[`PointsDataProvider`](../../core/interfaces/PointsDataProvider.md).[`normalize`](../../core/interfaces/PointsDataProvider.md#normalize)

***

### prepareDataSource()

> **prepareDataSource**(`dataSource`, `workspace`, `projectSource`, `options?`): `Promise`\<[`TablePointsDataSource`](../interfaces/TablePointsDataSource.md)\>

Defined in: [@tissuumaps-storage/src/table/TablePointsDataProvider.ts:170](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsDataProvider.ts#L170)

Adds the table file a data source names as a new table, and returns the
data source referencing that table instead

The table is backed by the first table data provider, in registration
order, that supports the file. A data source without a source is returned
as it is.

#### Parameters

##### dataSource

[`TablePointsDataSource`](../interfaces/TablePointsDataSource.md)

The data source to prepare

##### workspace

`FileSystemDirectoryHandle` \| `null`

The directory handle of the open workspace, if any

##### projectSource

`string` \| `null`

Where the project was loaded from, if anywhere

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<[`TablePointsDataSource`](../interfaces/TablePointsDataSource.md)\>

A promise that resolves to the data source to add, without a
  source

#### Throws

Error if no table data provider supports the source, if the
  source cannot be normalized, or if the operation is aborted

#### Implementation of

[`PointsDataProvider`](../../core/interfaces/PointsDataProvider.md).[`prepareDataSource`](../../core/interfaces/PointsDataProvider.md#preparedatasource)

***

### supports()

> **supports**(`normalizedSource`, `workspace`, `options?`): `Promise`\<`boolean`\>

Defined in: [@tissuumaps-storage/src/table/TablePointsDataProvider.ts:118](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsDataProvider.ts#L118)

Returns whether a source is a table that any of the table data providers
supports

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

Error if the operation is aborted

#### Implementation of

[`PointsDataProvider`](../../core/interfaces/PointsDataProvider.md).[`supports`](../../core/interfaces/PointsDataProvider.md#supports)
