# Interface: ProjectProvider

Defined in: [storage/project.ts:29](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/project.ts#L29)

Reads projects in a project file format, writes them, or both

The project-level counterpart of `DataProvider`: where a data provider opens
the data behind a data object, a project provider opens a whole project,
e.g. a TissUUmaps project file or a SpatialData dataset. The application
either opens a loaded project, replacing the current one, or imports it,
merging it into the current one.

Its members serve three roles:

- recognizing what it loads: [ProjectProvider.fileTypes](#filetypes) for local
  files, [ProjectProvider.supports](#supports) for sources
- loading: [ProjectProvider.load](#load), also from the GET parameter
  [ProjectProvider.urlParam](#urlparam)
- writing: [ProjectProvider.toFile](#tofile)

`load` and `toFile` are both optional, as some formats can only be read and
others only be written, but a project provider has to implement at least
one of them. The members for recognizing and loading are only used for
project providers that implement `load`.

A source can be the workspace root `/`, e.g. for a directory that is about
to become the workspace.

## Properties

### fileTypes?

> `readonly` `optional` **fileTypes?**: `Record`\<`string`, `string`[]\>

Defined in: [storage/project.ts:49](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/project.ts#L49)

The project files this project provider loads, as their extensions by
media type, in lowercase and with leading dot (e.g.
`{ "application/json": [".tm4"] }`)

Used to pick a project provider for a local file, matching its name
regardless of case, and to filter file pickers. Local files are matched
this way also within the workspace, as those outside of it have no source
to pass to [ProjectProvider.supports](#supports).

***

### name

> `readonly` **name**: `string`

Defined in: [storage/project.ts:31](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/project.ts#L31)

The human-readable name of the project provider

***

### urlParam?

> `readonly` `optional` **urlParam?**: `string`

Defined in: [storage/project.ts:37](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/project.ts#L37)

The GET parameter naming a source to load with this project provider, if
any (e.g. `spatialdata` for `?spatialdata=…`)

## Methods

### load()?

> `optional` **load**(`normalizedSource`, `options?`): `Promise`\<\{ `project`: [`RawProject`](RawProject.md); `source`: `string`; \}\>

Defined in: [storage/project.ts:95](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/project.ts#L95)

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

###### onProgress?

[`ProgressCallback`](../type-aliases/ProgressCallback.md)

###### signal?

`AbortSignal`

###### workspace?

`FileSystemDirectoryHandle` \| `null`

#### Returns

`Promise`\<\{ `project`: [`RawProject`](RawProject.md); `source`: `string`; \}\>

A promise that resolves to the project, and to where it was
actually read from: the absolute URL after following any redirects, or the
workspace-relative path. The application resolves the project's relative
sources against it, as only the project provider knows it.

***

### supports()?

> `optional` **supports**(`normalizedSource`, `workspace`, `options?`): `Promise`\<`boolean`\>

Defined in: [storage/project.ts:65](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/project.ts#L65)

Returns whether this project provider can likely load a source

Used to pick a project provider for a source the user entered or dropped,
e.g. by its extension or by cheaply reading its metadata. A project
provider without this method is never picked for a source automatically,
but can still be chosen by the user. Callers treat a rejection as `false`.

#### Parameters

##### normalizedSource

`string`

The source, normalized with
`SourceUtils.normalizeSource`

##### workspace

`FileSystemDirectoryHandle` \| `null`

The directory handle of the workspace, if any

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to whether the source is supported

***

### toFile()?

> `optional` **toFile**(`project`, `options?`): `Promise`\<`File`\>

Defined in: [storage/project.ts:118](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/project.ts#L118)

Writes a project to a single file, which the application downloads

The project has been detached from the project store beforehand, and holds
the project's own properties only. Its data sources are written as they
are.

#### Parameters

##### project

[`Project`](../type-aliases/Project.md)

The project to write

##### options?

Optional name of the file without extension, to use as is
(e.g. that of the file the project was opened from), abort signal and
progress callback

###### name?

`string`

###### onProgress?

[`ProgressCallback`](../type-aliases/ProgressCallback.md)

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`File`\>

A promise that resolves to the file, named as given or else after
the project, and with the extension of the format
