# Interface: ParquetShapesDataSource

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesDataSource.ts:7](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetShapesDataSource.ts#L7)

A [RawShapesDataSource](../../core/interfaces/RawShapesDataSource.md) with [shapesDataSourceDefaults](../../core/variables/shapesDataSourceDefaults.md) applied

## Extends

- [`ShapesDataSource`](../../core/type-aliases/ShapesDataSource.md)\<*typeof* [`parquetShapesDataSourceType`](../variables/parquetShapesDataSourceType.md)\>

## Properties

### geometryColumn?

> `optional` **geometryColumn?**: `string`

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesDataSource.ts:11](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetShapesDataSource.ts#L11)

***

### idColumn?

> `optional` **idColumn?**: `string`

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesDataSource.ts:12](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetShapesDataSource.ts#L12)

***

### nameColumn?

> `optional` **nameColumn?**: `string`

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesDataSource.ts:13](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetShapesDataSource.ts#L13)

***

### requestHeaders?

> `optional` **requestHeaders?**: `object`

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesDataSource.ts:14](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetShapesDataSource.ts#L14)

#### Index Signature

\[`headerName`: `string`\]: `string`

***

### source

> **source**: `string`

Defined in: [@tissuumaps-storage/src/parquet/ParquetShapesDataSource.ts:10](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/parquet/ParquetShapesDataSource.ts#L10)

Where the data is loaded from: a URL, an app-relative path (`//` prefix),
a workspace-relative path (`/` prefix), or a project-relative path (no
prefix); see `SourceUtils` for the syntax and how paths are resolved

This is the only field of a data source that is resolved as a path, so
that the app can rewrite it when the data source moves to another project.

#### Overrides

`ShapesDataSource.source`

***

### table?

> `optional` **table?**: `string`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:212

ID of the table holding the per-item annotations of this data source, if any

#### Inherited from

`ShapesDataSource.table`

***

### type

> **type**: `"parquet"`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:180

Data source type

#### Inherited from

`ShapesDataSource.type`
