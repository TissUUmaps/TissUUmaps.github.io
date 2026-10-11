# Class: HDF5TableDataProvider

Defined in: [@tissuumaps-storage/src/hierarchical/hdf5/HDF5TableDataProvider.ts:20](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/hdf5/HDF5TableDataProvider.ts#L20)

Reads tables from HDF5 files, including AnnData `.h5ad` files

h5wasm reads synchronously, so the file is opened in a Web Worker that
lives as long as the table.

## Extends

- `HierarchicalTableDataProviderBase`\<[`HDF5TableDataSource`](../interfaces/HDF5TableDataSource.md), [`HDF5TableData`](HDF5TableData.md), [`NormalizedHDF5TableDataSource`](../type-aliases/NormalizedHDF5TableDataSource.md)\>

## Constructors

### Constructor

> **new HDF5TableDataProvider**(): `HDF5TableDataProvider`

#### Returns

`HDF5TableDataProvider`

#### Inherited from

`HierarchicalTableDataProviderBase< HDF5TableDataSource, HDF5TableData, NormalizedHDF5TableDataSource >.constructor`

## Properties

### name

> `readonly` **name**: `"HDF5"` = `"HDF5"`

Defined in: [@tissuumaps-storage/src/hierarchical/hdf5/HDF5TableDataProvider.ts:28](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/hdf5/HDF5TableDataProvider.ts#L28)

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

> `protected` **createTableData**(`table`, `numRows`, `ids`, `names`): [`HDF5TableData`](HDF5TableData.md)

Defined in: [@tissuumaps-storage/src/hierarchical/hdf5/HDF5TableDataProvider.ts:82](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/hdf5/HDF5TableDataProvider.ts#L82)

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

[`HDF5TableData`](HDF5TableData.md)

The data, which owns the table

#### Overrides

`HierarchicalTableDataProviderBase.createTableData`

***

### load()

> **load**(`normalizedDataSource`, `options?`): `Promise`\<[`HDF5TableData`](HDF5TableData.md)\>

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataProviderBase.ts:72](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataProviderBase.ts#L72)

Opens a data source and returns the loaded data accessor

The data source has to have been normalized by
[DataProvider.normalize](../../core/interfaces/AnnotatedDataProvider.md#normalize) beforehand.

#### Parameters

##### normalizedDataSource

[`NormalizedHDF5TableDataSource`](../type-aliases/NormalizedHDF5TableDataSource.md)

The normalized data source to open

##### options?

[`DataProviderLoadOptions`](../../core/type-aliases/DataProviderLoadOptions.md)

See [DataProviderLoadOptions](../../core/type-aliases/DataProviderLoadOptions.md)

#### Returns

`Promise`\<[`HDF5TableData`](HDF5TableData.md)\>

A promise that resolves to the loaded data accessor

#### Inherited from

`HierarchicalTableDataProviderBase.load`

***

### normalize()

> **normalize**(`dataSource`, `workspace`, `projectSource`): [`NormalizedHDF5TableDataSource`](../type-aliases/NormalizedHDF5TableDataSource.md)

Defined in: [@tissuumaps-storage/src/hierarchical/hdf5/HDF5TableDataProvider.ts:30](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/hdf5/HDF5TableDataProvider.ts#L30)

#### Parameters

##### dataSource

[`HDF5TableDataSource`](../interfaces/HDF5TableDataSource.md)

##### workspace

`FileSystemDirectoryHandle` \| `null`

##### projectSource

`string` \| `null`

#### Returns

[`NormalizedHDF5TableDataSource`](../type-aliases/NormalizedHDF5TableDataSource.md)

#### Overrides

`HierarchicalTableDataProviderBase.normalize`

***

### openHierarchicalTable()

> `protected` **openHierarchicalTable**(`normalizedSource`, `options`): `Promise`\<`HierarchicalTable`\>

Defined in: [@tissuumaps-storage/src/hierarchical/hdf5/HDF5TableDataProvider.ts:61](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/hdf5/HDF5TableDataProvider.ts#L61)

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

Defined in: [@tissuumaps-storage/src/hierarchical/hdf5/HDF5TableDataProvider.ts:53](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/hdf5/HDF5TableDataProvider.ts#L53)

Returns whether a source has an HDF5 file extension (see
HDF5TableDataProvider.\_extensions)

#### Parameters

##### normalizedSource

`string`

The normalized source to check

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to whether the source is supported
