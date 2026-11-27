# Interface: RawDataSource\<TType\>

Defined in: [model/base.ts:301](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L301)

A data source for data objects

## Extends

- [`RawModel`](RawModel.md)

## Extended by

- [`RawAnnotatedDataSource`](RawAnnotatedDataSource.md)
- [`RawImageDataSource`](RawImageDataSource.md)
- [`RawTableDataSource`](RawTableDataSource.md)

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

***

### type

> **type**: `TType`

Defined in: [model/base.ts:305](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L305)

Data source type
