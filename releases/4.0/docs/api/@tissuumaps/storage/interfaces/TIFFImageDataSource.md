# Interface: TIFFImageDataSource

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageDataSource.ts:19](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageDataSource.ts#L19)

Data source for TIFF images

The `source` refers to a remote TIFF file (a URL) or to a TIFF file in the
open workspace (a workspace-relative or project-relative path). OME-TIFF,
QPTIFF and plain pyramidal TIFF are recognized by their metadata.

## Extends

- [`ImageDataSource`](../../core/type-aliases/ImageDataSource.md)\<*typeof* [`tiffImageDataSourceType`](../variables/tiffImageDataSourceType.md)\>

## Properties

### source

> **source**: `string`

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageDataSource.ts:23](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageDataSource.ts#L23)

URL or path of the TIFF file (see `SourceUtils`)

#### Overrides

`ImageDataSource.source`

***

### t?

> `optional` **t?**: `number`

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageDataSource.ts:37](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageDataSource.ts#L37)

The timepoint to display, for OME-TIFF files with a time series

#### Default Value

`0`

***

### type

> **type**: `"tiff"`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:171

Data source type

#### Inherited from

`ImageDataSource.type`

***

### z?

> `optional` **z?**: `number`

Defined in: [@tissuumaps-storage/src/tiff/TIFFImageDataSource.ts:30](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFImageDataSource.ts#L30)

The z-slice to display, for OME-TIFF files with a z-stack

#### Default Value

`0`
