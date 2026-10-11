# Interface: RawTableDataSource\<TType\>

Defined in: [model/table.ts:54](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/table.ts#L54)

A data source for tabular data

## Extends

- [`RawDataSource`](RawDataSource.md)\<`TType`\>

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

### type

> **type**: `TType`

Defined in: [model/base.ts:288](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L288)

Data source type

#### Inherited from

[`RawDataSource`](RawDataSource.md).[`type`](RawDataSource.md#type)
