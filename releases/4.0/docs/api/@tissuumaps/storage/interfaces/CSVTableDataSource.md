# Interface: CSVTableDataSource

Defined in: [@tissuumaps-storage/src/csv/CSVTableDataSource.ts:17](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/csv/CSVTableDataSource.ts#L17)

A [RawTableDataSource](../../core/interfaces/RawTableDataSource.md) with [tableDataSourceDefaults](../../core/variables/tableDataSourceDefaults.md) applied

## Extends

- [`TableDataSource`](../../core/type-aliases/TableDataSource.md)\<*typeof* [`csvTableDataSourceType`](../variables/csvTableDataSourceType.md)\>

## Properties

### columns?

> `optional` **columns?**: `string`[]

Defined in: [@tissuumaps-storage/src/csv/CSVTableDataSource.ts:21](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/csv/CSVTableDataSource.ts#L21)

***

### idColumn?

> `optional` **idColumn?**: `string`

Defined in: [@tissuumaps-storage/src/csv/CSVTableDataSource.ts:22](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/csv/CSVTableDataSource.ts#L22)

***

### loadColumns?

> `optional` **loadColumns?**: `string`[]

Defined in: [@tissuumaps-storage/src/csv/CSVTableDataSource.ts:24](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/csv/CSVTableDataSource.ts#L24)

***

### nameColumn?

> `optional` **nameColumn?**: `string`

Defined in: [@tissuumaps-storage/src/csv/CSVTableDataSource.ts:23](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/csv/CSVTableDataSource.ts#L23)

***

### parseConfig?

> `optional` **parseConfig?**: `Pick`\<`ParseConfig`\<`any`, `undefined`\>, `"delimiter"` \| `"newline"` \| `"quoteChar"` \| `"escapeChar"` \| `"preview"` \| `"comments"` \| `"fastMode"` \| `"skipFirstNLines"`\> & `Pick`\<`ParseLocalConfig`, `"encoding"`\> & `Pick`\<`ParseRemoteConfig`, `"downloadRequestHeaders"` \| `"downloadRequestBody"` \| `"withCredentials"`\>

Defined in: [@tissuumaps-storage/src/csv/CSVTableDataSource.ts:25](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/csv/CSVTableDataSource.ts#L25)

***

### source

> **source**: `string`

Defined in: [@tissuumaps-storage/src/csv/CSVTableDataSource.ts:20](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/csv/CSVTableDataSource.ts#L20)

Where the data is loaded from: a URL, an app-relative path (`//` prefix),
a workspace-relative path (`/` prefix), or a project-relative path (no
prefix); see `SourceUtils` for the syntax and how paths are resolved

This is the only field of a data source that is resolved as a path, so
that the app can rewrite it when the data source moves to another project.

#### Overrides

`TableDataSource.source`

***

### type

> **type**: `"csv"`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:180

Data source type

#### Inherited from

`TableDataSource.type`
