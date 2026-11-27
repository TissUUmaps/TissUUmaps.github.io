# Interface: RawAnnotatedDataSource\<TType\>

Defined in: [model/base.ts:352](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L352)

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

Defined in: [model/base.ts:315](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L315)

Where the data is loaded from: a URL, an app-relative path (`//` prefix),
a workspace-relative path (`/` prefix), or a project-relative path (no
prefix); see `SourceUtils` for the syntax and how paths are resolved

This is the only field of a data source that is resolved as a path, so
that the app can rewrite it when the data source moves to another project.

#### Inherited from

[`RawDataSource`](RawDataSource.md).[`source`](RawDataSource.md#source)

***

### table?

> `optional` **table?**: `string`

Defined in: [model/base.ts:356](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L356)

ID of the table holding the per-item annotations of this data source, if any

***

### type

> **type**: `TType`

Defined in: [model/base.ts:305](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L305)

Data source type

#### Inherited from

[`RawDataSource`](RawDataSource.md).[`type`](RawDataSource.md#type)
