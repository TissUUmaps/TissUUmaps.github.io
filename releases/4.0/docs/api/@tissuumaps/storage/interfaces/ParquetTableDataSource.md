# Interface: ParquetTableDataSource

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableDataSource.ts:7](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetTableDataSource.ts#L7)

A [RawTableDataSource](../../core/interfaces/RawTableDataSource.md) with [tableDataSourceDefaults](../../core/variables/tableDataSourceDefaults.md) applied

## Extends

- [`TableDataSource`](../../core/type-aliases/TableDataSource.md)\<*typeof* [`parquetTableDataSourceType`](../variables/parquetTableDataSourceType.md)\>

## Properties

### idColumn?

> `optional` **idColumn?**: `string`

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableDataSource.ts:11](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetTableDataSource.ts#L11)

***

### nameColumn?

> `optional` **nameColumn?**: `string`

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableDataSource.ts:12](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetTableDataSource.ts#L12)

***

### requestHeaders?

> `optional` **requestHeaders?**: `object`

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableDataSource.ts:13](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetTableDataSource.ts#L13)

#### Index Signature

\[`headerName`: `string`\]: `string`

***

### source

> **source**: `string`

Defined in: [@tissuumaps-storage/src/parquet/ParquetTableDataSource.ts:10](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/parquet/ParquetTableDataSource.ts#L10)

Where the data is loaded from: a URL, an app-relative path (`//` prefix),
a workspace-relative path (`/` prefix), or a project-relative path (no
prefix); see `SourceUtils` for the syntax and how paths are resolved

#### Overrides

`TableDataSource.source`

***

### type

> **type**: `"parquet"`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:171

Data source type

#### Inherited from

`TableDataSource.type`
