# Class: CSVTableDataProvider

Defined in: [@tissuumaps-storage/src/csv/CSVTableDataProvider.ts:28](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/csv/CSVTableDataProvider.ts#L28)

Data provider for tabular data

## Implements

- [`TableDataProvider`](../../core/interfaces/TableDataProvider.md)\<[`CSVTableDataSource`](../interfaces/CSVTableDataSource.md), [`CSVTableData`](CSVTableData.md), [`NormalizedCSVTableDataSource`](../type-aliases/NormalizedCSVTableDataSource.md)\>

## Constructors

### Constructor

> **new CSVTableDataProvider**(): `CSVTableDataProvider`

#### Returns

`CSVTableDataProvider`

## Properties

### name

> `readonly` **name**: `"CSV"` = `"CSV"`

Defined in: [@tissuumaps-storage/src/csv/CSVTableDataProvider.ts:36](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/csv/CSVTableDataProvider.ts#L36)

The name of the data provider

#### Implementation of

[`TableDataProvider`](../../core/interfaces/TableDataProvider.md).[`name`](../../core/interfaces/TableDataProvider.md#name)

***

### schema

> `readonly` **schema**: `object`

Defined in: [@tissuumaps-storage/src/csv/CSVTableDataProvider.ts:38](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/csv/CSVTableDataProvider.ts#L38)

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

Defined in: [@tissuumaps-storage/src/csv/CSVTableDataProvider.ts:57](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/csv/CSVTableDataProvider.ts#L57)

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

> **load**(`normalizedDataSource`, `options?`): `Promise`\<[`CSVTableData`](CSVTableData.md)\>

Defined in: [@tissuumaps-storage/src/csv/CSVTableDataProvider.ts:107](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/csv/CSVTableDataProvider.ts#L107)

Opens a data source and returns the loaded data accessor

The data source has to have been normalized by
[DataProvider.normalize](../../core/interfaces/DataProvider.md#normalize) beforehand.

#### Parameters

##### normalizedDataSource

[`NormalizedCSVTableDataSource`](../type-aliases/NormalizedCSVTableDataSource.md)

The normalized data source to open

##### options?

[`DataProviderLoadOptions`](../../core/type-aliases/DataProviderLoadOptions.md)

See [DataProviderLoadOptions](../../core/type-aliases/DataProviderLoadOptions.md)

#### Returns

`Promise`\<[`CSVTableData`](CSVTableData.md)\>

A promise that resolves to the loaded data accessor

#### Implementation of

[`TableDataProvider`](../../core/interfaces/TableDataProvider.md).[`load`](../../core/interfaces/TableDataProvider.md#load)

***

### normalize()

> **normalize**(`dataSource`, `workspace`, `projectSource`): [`NormalizedCSVTableDataSource`](../type-aliases/NormalizedCSVTableDataSource.md)

Defined in: [@tissuumaps-storage/src/csv/CSVTableDataProvider.ts:76](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/csv/CSVTableDataProvider.ts#L76)

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

[`CSVTableDataSource`](../interfaces/CSVTableDataSource.md)

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

[`NormalizedCSVTableDataSource`](../type-aliases/NormalizedCSVTableDataSource.md)

The normalized data source

#### Implementation of

[`TableDataProvider`](../../core/interfaces/TableDataProvider.md).[`normalize`](../../core/interfaces/TableDataProvider.md#normalize)

***

### supports()

> **supports**(`normalizedSource`): `Promise`\<`boolean`\>

Defined in: [@tissuumaps-storage/src/csv/CSVTableDataProvider.ts:99](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/csv/CSVTableDataProvider.ts#L99)

Returns whether a source has a CSV file extension (see
CSVTableDataProvider.\_extensions)

#### Parameters

##### normalizedSource

`string`

The normalized source to check

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to whether the source is supported

#### Implementation of

[`TableDataProvider`](../../core/interfaces/TableDataProvider.md).[`supports`](../../core/interfaces/TableDataProvider.md#supports)
