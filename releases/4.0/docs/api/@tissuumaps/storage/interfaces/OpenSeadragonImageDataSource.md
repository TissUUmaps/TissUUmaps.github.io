# Interface: OpenSeadragonImageDataSource

Defined in: [@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataSource.ts:7](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataSource.ts#L7)

A [RawImageDataSource](../../core/interfaces/RawImageDataSource.md) with [imageDataSourceDefaults](../../core/variables/imageDataSourceDefaults.md) applied

## Extends

- [`ImageDataSource`](../../core/type-aliases/ImageDataSource.md)\<*typeof* [`openSeadragonImageDataSourceType`](../variables/openSeadragonImageDataSourceType.md)\>

## Properties

### source?

> `optional` **source?**: `string`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:189

Where the data is loaded from: a URL, an app-relative path (`//` prefix),
a workspace-relative path (`/` prefix), or a project-relative path (no
prefix); see `SourceUtils` for the syntax and how paths are resolved

This is the only field of a data source that is resolved as a path, so
that the app can rewrite it when the data source moves to another project.

#### Inherited from

`ImageDataSource.source`

***

### tileSource?

> `optional` **tileSource?**: `object`

Defined in: [@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataSource.ts:10](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataSource.ts#L10)

***

### type

> **type**: `"image"`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:180

Data source type

#### Inherited from

`ImageDataSource.type`
