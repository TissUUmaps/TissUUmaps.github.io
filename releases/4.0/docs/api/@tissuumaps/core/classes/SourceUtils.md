# Class: SourceUtils

Defined in: [utils/SourceUtils.ts:53](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/SourceUtils.ts#L53)

Utility methods for resolving the `source` of data sources to URLs or file
system handles

A source is one of the following, tried in this order:

1. A URL with a scheme (e.g. `https://…`, `blob:…`, `data:…`), which is
   normalized and returned as is.
2. An app-relative path, prefixed with `//`, resolved against the base URL
   of the application (e.g. `//data/points.csv`).
3. A workspace-relative path, prefixed with `/`, resolved to a file or
   directory within the open workspace (e.g. `/data/points.csv`). Without an
   open workspace it falls back to being app-relative.
4. A project-relative path, without prefix, resolved against where the
   project was loaded from: a URL, or a workspace-relative path (e.g.
   `points.csv`, `./points.csv`, `../shared/points.csv`). Without a project
   source it falls back to being workspace-relative. Whenever it resolves to
   a workspace-relative path - against a workspace-relative project source,
   or through that fallback - it falls back further to being app-relative if
   no workspace is open.

Resolution happens in two steps:

1. [SourceUtils.normalizeSource](#normalizesource) classifies the source, applies the
   fallbacks and normalizes it, synchronously and without touching the file
   system. The result is either an absolute URL or a workspace-relative
   path. Sources referring to the same data normalize to the same string,
   and normalizing a normalized source yields it unchanged.
2. [SourceUtils.resolveSource](#resolvesource) opens the file or directory that a
   normalized workspace-relative path refers to;
   [SourceUtils.resolveSourceFile](#resolvesourcefile) and
   [SourceUtils.resolveSourceDirectory](#resolvesourcedirectory) accept only one of the two,
   and [SourceUtils.openSourceFile](#opensourcefile) also opens the file.
   URLs need no such step and are returned as is.

Paths use `/` as separator and may contain `.` and `..` segments. Resolving
against a URL follows URL semantics: `..` segments beyond the root of the
URL's path are dropped silently. Resolving within the workspace collapses the
segments and fails if the path leaves the workspace.

Helpers work on normalized sources: [SourceUtils.isWorkspacePath](#isworkspacepath)
classifies them, [SourceUtils.makeWorkspacePath](#makeworkspacepath) builds them,
[SourceUtils.getPathSegments](#getpathsegments), [SourceUtils.getParentSource](#getparentsource),
[SourceUtils.getStem](#getstem) and [SourceUtils.getExtension](#getextension) take them
apart, and
[SourceUtils.makeProjectPath](#makeprojectpath) turns them back into project-relative
paths.

A relative path whose first segment contains a colon (e.g.
`sample1:ch2.tif`) is taken for a URL; write it as `./sample1:ch2.tif`
instead.

## Constructors

### Constructor

> **new SourceUtils**(): `SourceUtils`

#### Returns

`SourceUtils`

## Methods

### getExtension()

> `static` **getExtension**(`normalizedSource`): `string`

Defined in: [utils/SourceUtils.ts:465](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/SourceUtils.ts#L465)

Returns the last extension of the file or directory a normalized source
refers to, lower-cased for comparison

Only the last extension is returned, so `cells.ome.zarr` gives `.zarr`.
A leading dot does not start an extension, so `.hidden` has none.

#### Parameters

##### normalizedSource

`string`

The normalized source (see
  [SourceUtils.normalizeSource](#normalizesource))

#### Returns

`string`

The extension including its dot (e.g. `.csv`), or an empty
  string if the last path segment has none

#### Throws

See [SourceUtils.getPathSegments](#getpathsegments)

***

### getParentSource()

> `static` **getParentSource**(`normalizedSource`): \{ `name`: `string`; `parentSource`: `string`; \} \| `null`

Defined in: [utils/SourceUtils.ts:408](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/SourceUtils.ts#L408)

Returns the directory that contains a normalized source

#### Parameters

##### normalizedSource

`string`

The normalized source (see
  [SourceUtils.normalizeSource](#normalizesource))

#### Returns

\{ `name`: `string`; `parentSource`: `string`; \} \| `null`

The normalized parent source and the name of the source within
  it, decoded for URLs; `null` if the source is the root of its URL's path,
  is a URL without a path (such as a `data:` URL), or lies directly in the
  workspace, as the workspace root is no source

#### Throws

See [SourceUtils.getPathSegments](#getpathsegments)

***

### getPathSegments()

> `static` **getPathSegments**(`normalizedSource`): `string`[]

Defined in: [utils/SourceUtils.ts:388](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/SourceUtils.ts#L388)

Returns the path segments of a normalized source

#### Parameters

##### normalizedSource

`string`

The normalized source (see
  [SourceUtils.normalizeSource](#normalizesource))

#### Returns

`string`[]

The segments from the workspace root down to the file or
  directory, or the decoded segments of a URL's path, without its query and
  hash; empty for URLs without a path, such as `data:` URLs, and for the
  root of an origin

#### Throws

TypeError if the source is neither a workspace-relative path nor
  an absolute URL

#### Throws

Error if a workspace-relative path leads above the workspace root

***

### getStem()

> `static` **getStem**(`normalizedSource`): `string`

Defined in: [utils/SourceUtils.ts:446](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/SourceUtils.ts#L446)

Returns the name of the file or directory a normalized source refers to,
without its last extension

Only the last extension is dropped, so `cells.ome.zarr` gives `cells.ome`.
A leading dot does not start an extension, so `.hidden` stays as is.

#### Parameters

##### normalizedSource

`string`

The normalized source (see
  [SourceUtils.normalizeSource](#normalizesource))

#### Returns

`string`

The stem of the last path segment, decoded for URLs; an empty
  string for URLs without a path, such as `data:` URLs or the root of an
  origin

#### Throws

See [SourceUtils.getPathSegments](#getpathsegments)

***

### isWorkspacePath()

> `static` **isWorkspacePath**(`normalizedSource`): `boolean`

Defined in: [utils/SourceUtils.ts:299](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/SourceUtils.ts#L299)

Returns whether a normalized source refers to a file or directory within
the workspace

#### Parameters

##### normalizedSource

`string`

The normalized source (see
  [SourceUtils.normalizeSource](#normalizesource))

#### Returns

`boolean`

`true` for workspace-relative paths, `false` for URLs and
  app-relative paths

***

### makeProjectPath()

> `static` **makeProjectPath**(`normalizedSource`, `projectSource`): `string`

Defined in: [utils/SourceUtils.ts:339](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/SourceUtils.ts#L339)

Turns a workspace-relative path into a path relative to the project file,
if the project was loaded from the workspace

The result normalizes back to the same workspace-relative path (see
[SourceUtils.normalizeSource](#normalizesource)), so data sources stay valid when the
project and its data are moved together. A first segment that contains a
colon gets a `./` prefix where it would otherwise be taken for a URL.

#### Parameters

##### normalizedSource

`string`

The normalized source (see
  [SourceUtils.normalizeSource](#normalizesource)); a workspace-relative path has to
  name a file or directory within the workspace, not its root

##### projectSource

`string` \| `null`

Where the project was loaded from (see
  [SourceUtils.normalizeSource](#normalizesource))

#### Returns

`string`

The project-relative path (e.g. `points.csv` or
  `../shared/x.csv`, or `.` for the project file's own directory) if both
  the source and the project source are workspace-relative; the source
  unchanged otherwise

***

### makeWorkspacePath()

> `static` **makeWorkspacePath**(`segments`): `string`

Defined in: [utils/SourceUtils.ts:314](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/SourceUtils.ts#L314)

Builds a workspace-relative path from the segments of a path within the
workspace, as returned by `FileSystemDirectoryHandle.resolve`

#### Parameters

##### segments

`string`[]

The path segments, from the workspace root down to the
  file or directory

#### Returns

`string`

The workspace-relative path (with `/` prefix)

***

### normalizeSource()

> `static` **normalizeSource**(`source`, `workspace`, `projectSource`, `options?`): `string`

Defined in: [utils/SourceUtils.ts:82](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/SourceUtils.ts#L82)

Normalizes a source, applying the fallbacks for missing project sources
and workspaces

#### Parameters

##### source

`string`

The source to normalize

##### workspace

`FileSystemDirectoryHandle` \| `null`

The directory handle of the open workspace, if any

##### projectSource

`string` \| `null`

Where the project was loaded from: its absolute URL,
  the workspace-relative path of the project file (with `/` prefix), or
  `null` for projects that were loaded from neither (e.g. uploaded ones)

##### options?

Optional base URL that app-relative paths are resolved
  against (default `document.baseURI`); the application relies on the
  default, and the option is what keeps normalization a pure function of
  its arguments, testable without a `document`

###### baseUrl?

`string`

#### Returns

`string`

The absolute URL for URLs, app-relative paths, and paths that fall
  back to being app-relative or resolve against a project URL; or the
  normalized workspace-relative path (with `/` prefix) for paths within the
  open workspace

#### Throws

Error if the source is empty or not a valid URL, or if it cannot be
  normalized as a project-relative, workspace-relative or app-relative path
  (see SourceUtils.\_normalizeProjectPath,
  SourceUtils.\_normalizeWorkspacePath and
  SourceUtils.\_normalizeAppPath)

***

### openSourceFile()

> `static` **openSourceFile**(`normalizedSource`, `workspace`, `options?`): `Promise`\<\{ `file?`: `undefined`; `url`: `string`; \} \| \{ `file`: `File`; `url?`: `undefined`; \}\>

Defined in: [utils/SourceUtils.ts:269](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/SourceUtils.ts#L269)

Resolves a normalized source to an absolute URL or an opened file

Like [SourceUtils.resolveSourceFile](#resolvesourcefile), for readers that take either
a URL or a `File`: a file in the workspace is opened right away.

#### Parameters

##### normalizedSource

`string`

See [SourceUtils.resolveSource](#resolvesource)

##### workspace

`FileSystemDirectoryHandle` \| `null`

See [SourceUtils.resolveSource](#resolvesource)

##### options?

See [SourceUtils.resolveSource](#resolvesource); the signal is
  also checked once the file is open, as opening it does not throw on
  abort

###### signal?

`AbortSignal`

#### Returns

`Promise`\<\{ `file?`: `undefined`; `url`: `string`; \} \| \{ `file`: `File`; `url?`: `undefined`; \}\>

A promise that resolves to the absolute URL, or to the opened
  file for sources within the workspace

#### Throws

See [SourceUtils.resolveSourceFile](#resolvesourcefile)

#### Throws

DOMException if the file cannot be opened, e.g. because it was
  removed (`NotFoundError`) or its read permission was revoked
  (`NotAllowedError`)

#### Throws

The abort reason of the signal, if it is aborted once the file
  is open

***

### resolveSource()

> `static` **resolveSource**(`normalizedSource`, `workspace`, `options?`): `Promise`\<`string` \| `FileSystemDirectoryHandle` \| `FileSystemFileHandle`\>

Defined in: [utils/SourceUtils.ts:137](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/SourceUtils.ts#L137)

Resolves a normalized source to an absolute URL, a file handle or a
directory handle

URLs are returned as is. A workspace-relative path is opened within the
workspace one directory at a time, and its last segment as a file, or as a
directory if it names one. No fallbacks apply here: the source has to be
normalized with [SourceUtils.normalizeSource](#normalizesource) first, using the same
workspace. Nothing is thrown synchronously: the returned promise rejects
instead.

#### Parameters

##### normalizedSource

`string`

The normalized source to resolve: an absolute URL
  or a workspace-relative path (with `/` prefix), as returned by
  [SourceUtils.normalizeSource](#normalizesource)

##### workspace

`FileSystemDirectoryHandle` \| `null`

The directory handle of the open workspace, if any

##### options?

Optional abort signal, checked upfront and between file
  system calls

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`string` \| `FileSystemDirectoryHandle` \| `FileSystemFileHandle`\>

A promise that resolves to the absolute URL, or to the file or
  directory handle for sources within the workspace

#### Throws

Error if a workspace-relative path is given without an open
  workspace, or if the path leaves the workspace or names its root

#### Throws

DOMException if a segment names nothing within the workspace
  (`NotFoundError`), if a segment other than the last names a file
  (`TypeMismatchError`), or if the operation is aborted (`AbortError`)

***

### resolveSourceDirectory()

> `static` **resolveSourceDirectory**(`normalizedSource`, `workspace`, `options?`): `Promise`\<`string` \| `FileSystemDirectoryHandle`\>

Defined in: [utils/SourceUtils.ts:227](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/SourceUtils.ts#L227)

Resolves a normalized source to an absolute URL or a directory handle

Like [SourceUtils.resolveSource](#resolvesource), for sources that have to refer to
a directory.

#### Parameters

##### normalizedSource

`string`

See [SourceUtils.resolveSource](#resolvesource)

##### workspace

`FileSystemDirectoryHandle` \| `null`

See [SourceUtils.resolveSource](#resolvesource)

##### options?

See [SourceUtils.resolveSource](#resolvesource)

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`string` \| `FileSystemDirectoryHandle`\>

A promise that resolves to the absolute URL, or to the directory
  handle for sources within the workspace

#### Throws

See [SourceUtils.resolveSource](#resolvesource)

#### Throws

DOMException if the source refers to a file within the workspace
  (`TypeMismatchError`)

***

### resolveSourceFile()

> `static` **resolveSourceFile**(`normalizedSource`, `workspace`, `options?`): `Promise`\<`string` \| `FileSystemFileHandle`\>

Defined in: [utils/SourceUtils.ts:193](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/SourceUtils.ts#L193)

Resolves a normalized source to an absolute URL or a file handle

Like [SourceUtils.resolveSource](#resolvesource), for sources that have to refer to
a file.

#### Parameters

##### normalizedSource

`string`

See [SourceUtils.resolveSource](#resolvesource)

##### workspace

`FileSystemDirectoryHandle` \| `null`

See [SourceUtils.resolveSource](#resolvesource)

##### options?

See [SourceUtils.resolveSource](#resolvesource)

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`string` \| `FileSystemFileHandle`\>

A promise that resolves to the absolute URL, or to the file handle
  for sources within the workspace

#### Throws

See [SourceUtils.resolveSource](#resolvesource)

#### Throws

DOMException if the source refers to a directory within the
  workspace (`TypeMismatchError`)
