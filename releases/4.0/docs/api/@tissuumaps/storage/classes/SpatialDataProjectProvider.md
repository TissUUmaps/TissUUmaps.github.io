# Class: SpatialDataProjectProvider

Defined in: [@tissuumaps-storage/src/spatialdata/SpatialDataProjectProvider.ts:68](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/spatialdata/SpatialDataProjectProvider.ts#L68)

Loads SpatialData stores as projects

A SpatialData store is a Zarr store with consolidated metadata, whose root
group lists the elements of the dataset by kind. Its elements become data
objects of the existing types:

- images and labels become OME-Zarr images and labels
- shapes become Parquet shapes if they are polygons, and point clouds of a
  Parquet table if they are circles, sized by their radius
- points become point clouds of a Parquet table (a Dask dataset directory),
  colored by their feature, if they name one
- tables (AnnData) become Zarr tables, keyed by their instance key; a table
  annotating a single element is linked to it, unless the element is circles
  or points

Each coordinate system becomes a layer, and an element becomes one object
per coordinate system it maps into, placed by its transformation into it.
Only one layer is visible: `global`, or else the first one holding the most
objects. Each layer shows only its first object, images first, then labels,
shapes and points.

## See

https://spatialdata-spec.scverse.org/

## Implements

- [`ProjectProvider`](../../core/interfaces/ProjectProvider.md)

## Constructors

### Constructor

> **new SpatialDataProjectProvider**(): `SpatialDataProjectProvider`

#### Returns

`SpatialDataProjectProvider`

## Properties

### name

> `readonly` **name**: `"SpatialData"` = `"SpatialData"`

Defined in: [@tissuumaps-storage/src/spatialdata/SpatialDataProjectProvider.ts:100](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/spatialdata/SpatialDataProjectProvider.ts#L100)

The human-readable name of the project provider

#### Implementation of

[`ProjectProvider`](../../core/interfaces/ProjectProvider.md).[`name`](../../core/interfaces/ProjectProvider.md#name)

***

### urlParam

> `readonly` **urlParam**: `"spatialdata"` = `"spatialdata"`

Defined in: [@tissuumaps-storage/src/spatialdata/SpatialDataProjectProvider.ts:101](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/spatialdata/SpatialDataProjectProvider.ts#L101)

The GET parameter naming a source to load with this project provider, if
any (e.g. `spatialdata` for `?spatialdata=…`)

#### Implementation of

[`ProjectProvider`](../../core/interfaces/ProjectProvider.md).[`urlParam`](../../core/interfaces/ProjectProvider.md#urlparam)

## Methods

### load()

> **load**(`normalizedSource`, `options?`): `Promise`\<\{ `project`: [`RawProject`](../../core/interfaces/RawProject.md); `source`: `string`; \}\>

Defined in: [@tissuumaps-storage/src/spatialdata/SpatialDataProjectProvider.ts:144](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/spatialdata/SpatialDataProjectProvider.ts#L144)

Loads a project from a source

The data sources of the project are returned as authored: relative sources
are allowed, and preferred, so that the project stays portable. They are
resolved against the returned `source` with ordinary URL semantics, like
those of a project file against the file's location, so a dataset that is
a directory includes its own name in them (e.g. `data.zarr/images/a`),
unless it is the workspace root (e.g. `images/a`).

Every ID in the project has to be unique within it, and must not contain
`:`. The application rejects merging the project into another one that
already uses one of its IDs, so a project provider that creates IDs
should make them unique across projects (e.g. with `SourceUtils.createID`).

#### Parameters

##### normalizedSource

`string`

The source, normalized with
`SourceUtils.normalizeSource`

##### options?

Optional abort signal, the directory handle of the
workspace, and a progress callback

###### signal?

`AbortSignal`

###### workspace?

`FileSystemDirectoryHandle` \| `null`

#### Returns

`Promise`\<\{ `project`: [`RawProject`](../../core/interfaces/RawProject.md); `source`: `string`; \}\>

A promise that resolves to the project, and to where it was
actually read from: the absolute URL after following any redirects, or the
workspace-relative path. The application resolves the project's relative
sources against it, as only the project provider knows it.

#### Implementation of

[`ProjectProvider`](../../core/interfaces/ProjectProvider.md).[`load`](../../core/interfaces/ProjectProvider.md#load)

***

### supports()

> **supports**(`normalizedSource`, `workspace`, `options?`): `Promise`\<`boolean`\>

Defined in: [@tissuumaps-storage/src/spatialdata/SpatialDataProjectProvider.ts:116](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/spatialdata/SpatialDataProjectProvider.ts#L116)

Returns whether a source is a SpatialData store, from the attributes of
its root group: SpatialData attributes, but not those of an element

#### Parameters

##### normalizedSource

`string`

The normalized source, which may be the
workspace root `/`

##### workspace

`FileSystemDirectoryHandle` \| `null`

The directory handle of the workspace, if any

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to whether the source is a SpatialData
store, `false` if it is no Zarr group

#### Throws

Error if the source is the workspace root without workspace, if
it cannot be resolved or read, or if the operation is aborted

#### Implementation of

[`ProjectProvider`](../../core/interfaces/ProjectProvider.md).[`supports`](../../core/interfaces/ProjectProvider.md#supports)
