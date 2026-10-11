# Interface: GeoJSONShapesDataSource

Defined in: [@tissuumaps-storage/src/geojson/GeoJSONShapesDataSource.ts:7](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/geojson/GeoJSONShapesDataSource.ts#L7)

A [RawShapesDataSource](../../core/interfaces/RawShapesDataSource.md) with [shapesDataSourceDefaults](../../core/variables/shapesDataSourceDefaults.md) applied

## Extends

- [`ShapesDataSource`](../../core/type-aliases/ShapesDataSource.md)\<*typeof* [`geoJSONShapesDataSourceType`](../variables/geoJSONShapesDataSourceType.md)\>

## Properties

### idProperty?

> `optional` **idProperty?**: `string`

Defined in: [@tissuumaps-storage/src/geojson/GeoJSONShapesDataSource.ts:11](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/geojson/GeoJSONShapesDataSource.ts#L11)

***

### nameProperty?

> `optional` **nameProperty?**: `string`

Defined in: [@tissuumaps-storage/src/geojson/GeoJSONShapesDataSource.ts:12](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/geojson/GeoJSONShapesDataSource.ts#L12)

***

### source

> **source**: `string`

Defined in: [@tissuumaps-storage/src/geojson/GeoJSONShapesDataSource.ts:10](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/geojson/GeoJSONShapesDataSource.ts#L10)

Where the data is loaded from: a URL, an app-relative path (`//` prefix),
a workspace-relative path (`/` prefix), or a project-relative path (no
prefix); see `SourceUtils` for the syntax and how paths are resolved

#### Overrides

`ShapesDataSource.source`

***

### table?

> `optional` **table?**: `string`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:200

ID of the table holding the per-item annotations of this data source, if any

#### Inherited from

`ShapesDataSource.table`

***

### type

> **type**: `"geojson"`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:171

Data source type

#### Inherited from

`ShapesDataSource.type`
