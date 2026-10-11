# Interface: OMEZarrLabelsDataSource

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataSource.ts:26](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataSource.ts#L26)

Data source for OME-Zarr label images

The `source` refers to a remote OME-Zarr store (a URL), a remote zipped
OME-Zarr file (a URL with the zipped OME-Zarr extension, in any case, see
`OMEZarrUtils.isZipSource`), or an OME-Zarr store (a directory) or zipped
OME-Zarr file in the open workspace (a workspace-relative or
project-relative path).

Label images have to hold signed or unsigned integers of up to 32 bits.
Their `image-label` metadata is not read (see `LabelsDataSource` for the
annotation table reference).

Label images with a `z` or `t` axis are opened as a single plane: `z` and
`t` select the plane, and default to the image's `omero` defaults (or to the
middle of the axis without them).

## Extends

- [`LabelsDataSource`](../../core/type-aliases/LabelsDataSource.md)\<*typeof* [`omeZarrLabelsDataSourceType`](../variables/omeZarrLabelsDataSourceType.md)\>

## Properties

### source

> **source**: `string`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataSource.ts:30](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataSource.ts#L30)

URL or path of the OME-Zarr label image (see `SourceUtils`)

#### Overrides

`LabelsDataSource.source`

***

### t?

> `optional` **t?**: `number`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataSource.ts:33](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataSource.ts#L33)

Timepoint index (0-based) to open, for label images with a `t` axis

***

### table?

> `optional` **table?**: `string`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:200

ID of the table holding the per-item annotations of this data source, if any

#### Inherited from

`LabelsDataSource.table`

***

### type

> **type**: `"ome-zarr"`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:171

Data source type

#### Inherited from

`LabelsDataSource.type`

***

### z?

> `optional` **z?**: `number`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataSource.ts:36](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrLabelsDataSource.ts#L36)

Z-slice index (0-based) to open, for label images with a `z` axis
