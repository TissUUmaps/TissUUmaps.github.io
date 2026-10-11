# Interface: RawAnnotatedDataSource\<TType\>

Defined in: [model/base.ts:332](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L332)

A data source for rendered data objects whose items can be annotated by a
referenced table (e.g. labels, points, shapes)

## Extends

- [`RawDataSource`](RawDataSource.md)\<`TType`\>

## Extended by

- [`RawLabelsDataSource`](RawLabelsDataSource.md)
- [`RawPointsDataSource`](RawPointsDataSource.md)
- [`RawShapesDataSource`](RawShapesDataSource.md)

## Type Parameters

### TType

`TType` *extends* `string` = `string`

## Properties

### source?

> `optional` **source?**: `string`

Defined in: [model/base.ts:295](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L295)

Where the data is loaded from: a URL, an app-relative path (`//` prefix),
a workspace-relative path (`/` prefix), or a project-relative path (no
prefix); see `SourceUtils` for the syntax and how paths are resolved

#### Inherited from

[`RawDataSource`](RawDataSource.md).[`source`](RawDataSource.md#source)

***

### table?

> `optional` **table?**: `string`

Defined in: [model/base.ts:336](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L336)

ID of the table holding the per-item annotations of this data source, if any

***

### type

> **type**: `TType`

Defined in: [model/base.ts:288](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L288)

Data source type

#### Inherited from

[`RawDataSource`](RawDataSource.md).[`type`](RawDataSource.md#type)
