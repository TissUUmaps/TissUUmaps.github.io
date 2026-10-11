# Interface: RawDataSource\<TType\>

Defined in: [model/base.ts:284](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L284)

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

Defined in: [model/base.ts:295](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L295)

Where the data is loaded from: a URL, an app-relative path (`//` prefix),
a workspace-relative path (`/` prefix), or a project-relative path (no
prefix); see `SourceUtils` for the syntax and how paths are resolved

***

### type

> **type**: `TType`

Defined in: [model/base.ts:288](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L288)

Data source type
