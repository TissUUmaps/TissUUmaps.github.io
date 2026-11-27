# Interface: HDF5TableDataSource

Defined in: [@tissuumaps-storage/src/hierarchical/hdf5/HDF5TableDataSource.ts:8](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/hierarchical/hdf5/HDF5TableDataSource.ts#L8)

## Extends

- `HierarchicalTableDataSource`\<*typeof* [`hdf5TableDataSourceType`](../variables/hdf5TableDataSourceType.md)\>

## Properties

### idColumn?

> `optional` **idColumn?**: `string`

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataSource.ts:13](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataSource.ts#L13)

Column query of the row IDs; sequential IDs are used if omitted

#### Inherited from

`HierarchicalTableDataSource.idColumn`

***

### nameColumn?

> `optional` **nameColumn?**: `string`

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataSource.ts:15](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataSource.ts#L15)

Column query of the row names

#### Inherited from

`HierarchicalTableDataSource.nameColumn`

***

### source

> **source**: `string`

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataSource.ts:11](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataSource.ts#L11)

Where the data is loaded from: a URL, an app-relative path (`//` prefix),
a workspace-relative path (`/` prefix), or a project-relative path (no
prefix); see `SourceUtils` for the syntax and how paths are resolved

This is the only field of a data source that is resolved as a path, so
that the app can rewrite it when the data source moves to another project.

#### Inherited from

`HierarchicalTableDataSource.source`

***

### type

> **type**: `"hdf5"`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:180

Data source type

#### Inherited from

`HierarchicalTableDataSource.type`
