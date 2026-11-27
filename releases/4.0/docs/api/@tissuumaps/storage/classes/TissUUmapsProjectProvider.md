# Class: TissUUmapsProjectProvider

Defined in: [@tissuumaps-storage/src/tissuumaps/TissUUmapsProjectProvider.ts:19](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/tissuumaps/TissUUmapsProjectProvider.ts#L19)

Reads and writes TissUUmaps project files (`.tm4`), the native project
format of TissUUmaps

A project file holds a project as JSON, with non-finite numbers encoded by
`JSONUtils`. Its relative data sources are relative to the file.

## Implements

- [`ProjectProvider`](../../core/interfaces/ProjectProvider.md)

## Constructors

### Constructor

> **new TissUUmapsProjectProvider**(): `TissUUmapsProjectProvider`

#### Returns

`TissUUmapsProjectProvider`

## Properties

### fileTypes

> `readonly` **fileTypes**: `object`

Defined in: [@tissuumaps-storage/src/tissuumaps/TissUUmapsProjectProvider.ts:25](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/tissuumaps/TissUUmapsProjectProvider.ts#L25)

The project files this project provider loads, as their extensions by
media type, in lowercase and with leading dot (e.g.
`{ "application/json": [".tm4"] }`)

Used to pick a project provider for a local file, matching its name
regardless of case, and to filter file pickers. Local files are matched
this way also within the workspace, as those outside of it have no source
to pass to [ProjectProvider.supports](../../core/interfaces/ProjectProvider.md#supports).

#### application/json

> **application/json**: `string`[]

#### Implementation of

[`ProjectProvider`](../../core/interfaces/ProjectProvider.md).[`fileTypes`](../../core/interfaces/ProjectProvider.md#filetypes)

***

### name

> `readonly` **name**: `"TissUUmaps"` = `"TissUUmaps"`

Defined in: [@tissuumaps-storage/src/tissuumaps/TissUUmapsProjectProvider.ts:23](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/tissuumaps/TissUUmapsProjectProvider.ts#L23)

The human-readable name of the project provider

#### Implementation of

[`ProjectProvider`](../../core/interfaces/ProjectProvider.md).[`name`](../../core/interfaces/ProjectProvider.md#name)

***

### urlParam

> `readonly` **urlParam**: `"project"` = `"project"`

Defined in: [@tissuumaps-storage/src/tissuumaps/TissUUmapsProjectProvider.ts:24](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/tissuumaps/TissUUmapsProjectProvider.ts#L24)

The GET parameter naming a source to load with this project provider, if
any (e.g. `spatialdata` for `?spatialdata=…`)

#### Implementation of

[`ProjectProvider`](../../core/interfaces/ProjectProvider.md).[`urlParam`](../../core/interfaces/ProjectProvider.md#urlparam)

## Methods

### load()

> **load**(`normalizedSource`, `options?`): `Promise`\<\{ `project`: [`RawProject`](../../core/interfaces/RawProject.md); `source`: `string`; \}\>

Defined in: [@tissuumaps-storage/src/tissuumaps/TissUUmapsProjectProvider.ts:38](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/tissuumaps/TissUUmapsProjectProvider.ts#L38)

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

> **supports**(`normalizedSource`): `Promise`\<`boolean`\>

Defined in: [@tissuumaps-storage/src/tissuumaps/TissUUmapsProjectProvider.ts:31](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/tissuumaps/TissUUmapsProjectProvider.ts#L31)

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

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to whether the source is supported

#### Implementation of

[`ProjectProvider`](../../core/interfaces/ProjectProvider.md).[`supports`](../../core/interfaces/ProjectProvider.md#supports)

***

### toFile()

> **toFile**(`project`, `options?`): `Promise`\<`File`\>

Defined in: [@tissuumaps-storage/src/tissuumaps/TissUUmapsProjectProvider.ts:84](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-storage/src/tissuumaps/TissUUmapsProjectProvider.ts#L84)

Writes a project to a project file

The file is named as given, or else after the project, with whitespace
replaced by hyphens and any other non-alphanumeric characters removed from
the project name, falling back to `Untitled`.

#### Parameters

##### project

[`Project`](../../core/type-aliases/Project.md)

The project to write

##### options?

Optional name of the file without extension, used as is

###### name?

`string`

#### Returns

`Promise`\<`File`\>

A promise that resolves to the project file

#### Implementation of

[`ProjectProvider`](../../core/interfaces/ProjectProvider.md).[`toFile`](../../core/interfaces/ProjectProvider.md#tofile)
