# Interface: ZarrTableDataSource

Defined in: [@tissuumaps-storage/src/hierarchical/zarr/ZarrTableDataSource.ts:8](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/zarr/ZarrTableDataSource.ts#L8)

## Extends

- `HierarchicalTableDataSource`\<*typeof* [`zarrTableDataSourceType`](../variables/zarrTableDataSourceType.md)\>

## Properties

### idColumn?

> `optional` **idColumn?**: `string`

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataSource.ts:13](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataSource.ts#L13)

Column query of the row IDs; sequential IDs are used if omitted

#### Inherited from

`HierarchicalTableDataSource.idColumn`

***

### nameColumn?

> `optional` **nameColumn?**: `string`

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataSource.ts:15](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataSource.ts#L15)

Column query of the row names

#### Inherited from

`HierarchicalTableDataSource.nameColumn`

***

### source

> **source**: `string`

Defined in: [@tissuumaps-storage/src/hierarchical/HierarchicalTableDataSource.ts:11](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/hierarchical/HierarchicalTableDataSource.ts#L11)

Where the data is loaded from: a URL, an app-relative path (`//` prefix),
a workspace-relative path (`/` prefix), or a project-relative path (no
prefix); see `SourceUtils` for the syntax and how paths are resolved

#### Inherited from

`HierarchicalTableDataSource.source`

***

### type

> **type**: `"zarr"`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:171

Data source type

#### Inherited from

`HierarchicalTableDataSource.type`
