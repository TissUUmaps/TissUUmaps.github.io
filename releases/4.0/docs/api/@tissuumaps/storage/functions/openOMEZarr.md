# Function: openOMEZarr()

> **openOMEZarr**(`normalizedSource`, `options?`): `Promise`\<\{ `loaded`: `OMEZarr`; `url`: `string`; `zip`: `boolean`; \}\>

Defined in: [@tissuumaps-storage/src/ome-zarr/openOMEZarr.ts:33](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/ome-zarr/openOMEZarr.ts#L33)

Opens the OME-Zarr image a data source points to, loading its metadata and
the arrays of all its resolution levels with `OMEZarrTileSource.loadOMEZarr`

The normalized source is resolved with `SourceUtils.resolveSource`: a URL is
opened as a remote zipped OME-Zarr file if it has the zipped OME-Zarr
extension in any case (see `OMEZarrUtils.isZipSource`), and as a remote
OME-Zarr store otherwise; a file in the open workspace as a zipped OME-Zarr
file, and a directory in the open workspace as an OME-Zarr store (see
`FileSystemHandleStore`).

The tile sources opened for the image share the loaded image instead of
loading it from its URL (see `OMEZarrTileSource.open`), but need an absolute
URL for their tile cache keys: sources within the workspace get a `urn:uuid:`
URL that is unique to the load.

## Parameters

### normalizedSource

`string`

The normalized source of the data source to open

### options?

`signal` aborts the load; `workspace` is the directory
handle of the open workspace, required for workspace-relative sources

#### signal?

`AbortSignal`

#### workspace?

`FileSystemDirectoryHandle` \| `null`

## Returns

`Promise`\<\{ `loaded`: `OMEZarr`; `url`: `string`; `zip`: `boolean`; \}\>

A promise that resolves to the loaded image and arrays, and to the
absolute URL and the `zip` flag to open its tile sources with

## Throws

Error if the source is workspace-relative while no workspace is open
