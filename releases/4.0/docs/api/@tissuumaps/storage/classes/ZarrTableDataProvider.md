# Class: ZarrTableDataProvider

Defined in: [@tissuumaps-storage/src/hierarchical/zarr/ZarrTableDataProvider.ts:20](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/zarr/ZarrTableDataProvider.ts#L20)

Reads tables from Zarr stores, including the AnnData tables of SpatialData
stores

Zarr reads are asynchronous fetches, so no Web Worker is needed.

## Extends

- `HierarchicalTableDataProviderBase`\<[`ZarrTableDataSource`](../interfaces/ZarrTableDataSource.md), [`ZarrTableData`](ZarrTableData.md), [`NormalizedZarrTableDataSource`](../type-aliases/NormalizedZarrTableDataSource.md)\>

## Constructors

### Constructor

> **new ZarrTableDataProvider**(): `ZarrTableDataProvider`

#### Returns

`ZarrTableDataProvider`

#### Inherited from

`HierarchicalTableDataProviderBase< ZarrTableDataSource, ZarrTableData, NormalizedZarrTableDataSource >.constructor`

## Properties

### name

> `readonly` **name**: `"Zarr"` = `"Zarr"`

Defined in: [@tissuumaps-storage/src/hierarchical/zarr/ZarrTableDataProvider.ts:28](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/zarr/ZarrTableDataProvider.ts#L28)

#### Overrides

`HierarchicalTableDataProviderBase.name`

***

### schema

> `readonly` **schema**: `object`

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataProviderBase.ts:34](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataProviderBase.ts#L34)

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

#### Inherited from

`HierarchicalTableDataProviderBase.schema`

***

### uischema

> `readonly` **uischema**: `object`

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataProviderBase.ts:50](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataProviderBase.ts#L50)

The JSON Forms UI schema for the data source

It must not contain a control for the data source's `source`, which the
application renders itself if the schema declares it, as a string.

#### elements

> **elements**: `object`[]

#### type

> **type**: `string` = `"VerticalLayout"`

#### Inherited from

`HierarchicalTableDataProviderBase.uischema`

## Methods

### createTableData()

> `protected` **createTableData**(`table`, `numRows`, `ids`, `names`): [`ZarrTableData`](ZarrTableData.md)

Defined in: [@tissuumaps-storage/src/hierarchical/zarr/ZarrTableDataProvider.ts:78](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/zarr/ZarrTableDataProvider.ts#L78)

Wraps an open table in the data class of the container format

#### Parameters

##### table

`HierarchicalTable`

The open table, which the data owns and closes

##### numRows

`number`

The number of rows

##### ids

[`IDArray`](../../core/type-aliases/IDArray.md) \| `undefined`

The row IDs, `undefined` for sequential IDs

##### names

`string`[] \| `undefined`

The row names, if any

#### Returns

[`ZarrTableData`](ZarrTableData.md)

The data, which owns the table

#### Overrides

`HierarchicalTableDataProviderBase.createTableData`

***

### load()

> **load**(`normalizedDataSource`, `options?`): `Promise`\<[`ZarrTableData`](ZarrTableData.md)\>

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataProviderBase.ts:72](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataProviderBase.ts#L72)

Opens a data source and returns the loaded data accessor

The data source has to have been normalized by
[DataProvider.normalize](../../core/interfaces/AnnotatedDataProvider.md#normalize) beforehand.

#### Parameters

##### normalizedDataSource

[`NormalizedZarrTableDataSource`](../type-aliases/NormalizedZarrTableDataSource.md)

The normalized data source to open

##### options?

[`DataProviderLoadOptions`](../../core/type-aliases/DataProviderLoadOptions.md)

See [DataProviderLoadOptions](../../core/type-aliases/DataProviderLoadOptions.md)

#### Returns

`Promise`\<[`ZarrTableData`](ZarrTableData.md)\>

A promise that resolves to the loaded data accessor

#### Inherited from

`HierarchicalTableDataProviderBase.load`

***

### normalize()

> **normalize**(`dataSource`, `workspace`, `projectSource`): [`NormalizedZarrTableDataSource`](../type-aliases/NormalizedZarrTableDataSource.md)

Defined in: [@tissuumaps-storage/src/hierarchical/zarr/ZarrTableDataProvider.ts:30](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/zarr/ZarrTableDataProvider.ts#L30)

#### Parameters

##### dataSource

[`ZarrTableDataSource`](../interfaces/ZarrTableDataSource.md)

##### workspace

`FileSystemDirectoryHandle` \| `null`

##### projectSource

`string` \| `null`

#### Returns

[`NormalizedZarrTableDataSource`](../type-aliases/NormalizedZarrTableDataSource.md)

#### Overrides

`HierarchicalTableDataProviderBase.normalize`

***

### openHierarchicalTable()

> `protected` **openHierarchicalTable**(`normalizedSource`, `options`): `Promise`\<`HierarchicalTable`\>

Defined in: [@tissuumaps-storage/src/hierarchical/zarr/ZarrTableDataProvider.ts:65](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/zarr/ZarrTableDataProvider.ts#L65)

Opens the hierarchical table a normalized source points to

#### Parameters

##### normalizedSource

`string`

The normalized source of the data source

##### options

`signal` aborts the load; `workspace` is the directory
handle of the open workspace, required for workspace-relative sources

###### signal?

`AbortSignal`

###### workspace

`FileSystemDirectoryHandle` \| `null`

#### Returns

`Promise`\<`HierarchicalTable`\>

The open table; closed by the returned
HierarchicalTableDataBase

#### Overrides

`HierarchicalTableDataProviderBase.openHierarchicalTable`

***

### supports()

> **supports**(`normalizedSource`): `Promise`\<`boolean`\>

Defined in: [@tissuumaps-storage/src/hierarchical/zarr/ZarrTableDataProvider.ts:57](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/zarr/ZarrTableDataProvider.ts#L57)

Returns whether a source lies within a Zarr store, judged by whether any
of its segments has the store extension (see
ZarrTableDataProvider.\_storeExtension)

A source may point at a group below the store root, such as the
`tables/<name>` of a SpatialData store.

#### Parameters

##### normalizedSource

`string`

The normalized source to check

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to whether the source is supported
