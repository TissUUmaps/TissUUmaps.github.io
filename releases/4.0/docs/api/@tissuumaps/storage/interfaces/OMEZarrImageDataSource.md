# Interface: OMEZarrImageDataSource

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataSource.ts:26](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataSource.ts#L26)

Data source for OME-Zarr images

The `source` refers to a remote OME-Zarr store (a URL), a remote zipped
OME-Zarr file (a URL with the zipped OME-Zarr extension, in any case, see
`OMEZarrUtils.isZipSource`), or an OME-Zarr store (a directory) or zipped
OME-Zarr file in the open workspace (a workspace-relative or
project-relative path).

Images with a channel axis (even one of length one) are opened as
multi-channel image data with one tile source per channel; images without
a channel axis as single-channel image data.

Images with a `z` or `t` axis are opened as a single plane: `z` and `t`
select the plane, and default to the image's `omero` defaults (or to the
middle of the axis without them).

## Extends

- [`ImageDataSource`](../../core/type-aliases/ImageDataSource.md)\<*typeof* [`omeZarrImageDataSourceType`](../variables/omeZarrImageDataSourceType.md)\>

## Properties

### source

> **source**: `string`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataSource.ts:30](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataSource.ts#L30)

URL or path of the OME-Zarr image (see `SourceUtils`)

#### Overrides

`ImageDataSource.source`

***

### t?

> `optional` **t?**: `number`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataSource.ts:33](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataSource.ts#L33)

Timepoint index (0-based) to open, for images with a `t` axis

***

### type

> **type**: `"ome-zarr"`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:171

Data source type

#### Inherited from

`ImageDataSource.type`

***

### z?

> `optional` **z?**: `number`

Defined in: [@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataSource.ts:36](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/OMEZarrImageDataSource.ts#L36)

Z-slice index (0-based) to open, for images with a `z` axis
