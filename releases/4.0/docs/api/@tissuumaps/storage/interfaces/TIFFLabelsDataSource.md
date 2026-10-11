# Interface: TIFFLabelsDataSource

Defined in: [@tissuumaps-storage/src/tiff/TIFFLabelsDataSource.ts:21](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFLabelsDataSource.ts#L21)

Data source for label masks stored in TIFF files

The `source` refers to a remote TIFF file (a URL) or to a TIFF file in the
open workspace (a workspace-relative or project-relative path), and its
formats are recognized as for TIFF images. It has to hold a single channel
of signed or unsigned integers of at most 32 bits, which are the label IDs
(see `LabelsDataSource` for the annotation table reference).

## Extends

- [`LabelsDataSource`](../../core/type-aliases/LabelsDataSource.md)\<*typeof* [`tiffLabelsDataSourceType`](../variables/tiffLabelsDataSourceType.md)\>

## Properties

### source

> **source**: `string`

Defined in: [@tissuumaps-storage/src/tiff/TIFFLabelsDataSource.ts:25](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFLabelsDataSource.ts#L25)

URL or path of the TIFF file (see `SourceUtils`)

#### Overrides

`LabelsDataSource.source`

***

### t?

> `optional` **t?**: `number`

Defined in: [@tissuumaps-storage/src/tiff/TIFFLabelsDataSource.ts:39](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFLabelsDataSource.ts#L39)

The timepoint to display, for OME-TIFF files with a time series

#### Default Value

`0`

***

### table?

> `optional` **table?**: `string`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:200

ID of the table holding the per-item annotations of this data source, if any

#### Inherited from

`LabelsDataSource.table`

***

### type

> **type**: `"tiff"`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:171

Data source type

#### Inherited from

`LabelsDataSource.type`

***

### z?

> `optional` **z?**: `number`

Defined in: [@tissuumaps-storage/src/tiff/TIFFLabelsDataSource.ts:32](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/tiff/TIFFLabelsDataSource.ts#L32)

The z-slice to display, for OME-TIFF files with a z-stack

#### Default Value

`0`
