# Interface: OpenSeadragonImageDataSource

Defined in: [@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataSource.ts:7](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataSource.ts#L7)

A [RawImageDataSource](../../core/interfaces/RawImageDataSource.md) with [imageDataSourceDefaults](../../core/variables/imageDataSourceDefaults.md) applied

## Extends

- [`ImageDataSource`](../../core/type-aliases/ImageDataSource.md)\<*typeof* [`openSeadragonImageDataSourceType`](../variables/openSeadragonImageDataSourceType.md)\>

## Properties

### source?

> `optional` **source?**: `string`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:177

Where the data is loaded from: a URL, an app-relative path (`//` prefix),
a workspace-relative path (`/` prefix), or a project-relative path (no
prefix); see `SourceUtils` for the syntax and how paths are resolved

#### Inherited from

`ImageDataSource.source`

***

### tileSource?

> `optional` **tileSource?**: `string` \| `object`

Defined in: [@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataSource.ts:10](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/openseadragon/OpenSeadragonImageDataSource.ts#L10)

***

### type

> **type**: `"image"`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:171

Data source type

#### Inherited from

`ImageDataSource.type`
