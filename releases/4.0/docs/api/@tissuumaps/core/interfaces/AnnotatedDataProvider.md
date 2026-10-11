# Interface: AnnotatedDataProvider\<TAnnotatedDataSource, TData, TNormalizedAnnotatedDataSource\>

Defined in: [storage/base.ts:283](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L283)

Base interface for data providers opening [AnnotatedDataSource](../type-aliases/AnnotatedDataSource.md)s

In addition to a [DataProvider](DataProvider.md), an annotated data provider receives
the data of the table referenced by the data source, if any, when loading
(see [AnnotatedDataProviderLoadOptions](../type-aliases/AnnotatedDataProviderLoadOptions.md)).

## Extends

- [`DataProvider`](DataProvider.md)\<`TAnnotatedDataSource`, `TData`, `TNormalizedAnnotatedDataSource`\>

## Extended by

- [`LabelsDataProvider`](LabelsDataProvider.md)
- [`PointsDataProvider`](PointsDataProvider.md)
- [`ShapesDataProvider`](ShapesDataProvider.md)

## Type Parameters

### TAnnotatedDataSource

`TAnnotatedDataSource` *extends* [`AnnotatedDataSource`](../type-aliases/AnnotatedDataSource.md)

The data source type this data provider
opens

### TData

`TData` *extends* [`Data`](Data.md)

The [Data](Data.md) type produced by this data provider

### TNormalizedAnnotatedDataSource

`TNormalizedAnnotatedDataSource` *extends* `TAnnotatedDataSource` = `TAnnotatedDataSource`

The data source type produced by
[DataProvider.normalize](DataProvider.md#normalize) and accepted by
[AnnotatedDataProvider.load](#load)

## Properties

### name

> `readonly` **name**: `string`

Defined in: [storage/base.ts:137](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L137)

The name of the data provider

#### Inherited from

[`DataProvider`](DataProvider.md).[`name`](DataProvider.md#name)

***

### schema

> `readonly` **schema**: `JsonSchema`

Defined in: [storage/base.ts:140](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L140)

The JSON schema for the data source

#### Inherited from

[`DataProvider`](DataProvider.md).[`schema`](DataProvider.md#schema)

***

### uischema

> `readonly` **uischema**: `UISchemaElement`

Defined in: [storage/base.ts:148](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L148)

The JSON Forms UI schema for the data source

It must not contain a control for the data source's `source`, which the
application renders itself if the schema declares it, as a string.

#### Inherited from

[`DataProvider`](DataProvider.md).[`uischema`](DataProvider.md#uischema)

## Methods

### load()

> **load**(`normalizedDataSource`, `options?`): `Promise`\<`TData`\>

Defined in: [storage/base.ts:303](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L303)

Opens a data source and returns the loaded data accessor

The data source has to have been normalized by
[DataProvider.normalize](DataProvider.md#normalize) beforehand.

#### Parameters

##### normalizedDataSource

`TNormalizedAnnotatedDataSource`

The normalized data source to open

##### options?

[`AnnotatedDataProviderLoadOptions`](../type-aliases/AnnotatedDataProviderLoadOptions.md)

See [AnnotatedDataProviderLoadOptions](../type-aliases/AnnotatedDataProviderLoadOptions.md)

#### Returns

`Promise`\<`TData`\>

A promise that resolves to the loaded data accessor

#### Overrides

[`DataProvider`](DataProvider.md).[`load`](DataProvider.md#load)

***

### normalize()

> **normalize**(`dataSource`, `workspace`, `projectSource`): `TNormalizedAnnotatedDataSource`

Defined in: [storage/base.ts:175](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L175)

Returns the data source with all of this data provider's defaults applied
and its source normalized

Data sources that normalize to the same value are considered equal, and
their data is loaded only once and shared between all referencing objects.
Normalization has to be idempotent: normalizing an already normalized data
source must return the same value again.

The source is normalized with `SourceUtils.normalizeSource`, which resolves
it against the project source and the open workspace, so the result has to
be recomputed when either changes.

Normalizing may throw, e.g. for a source that cannot be resolved against
the given workspace and project source. The data cache catches it, so only
the objects referencing that data source fail to load; the data of all
other objects is unaffected.

#### Parameters

##### dataSource

`TAnnotatedDataSource`

The data source to normalize

##### workspace

`FileSystemDirectoryHandle` \| `null`

The directory handle of the open workspace, if any

##### projectSource

`string` \| `null`

Where the project was loaded from: its absolute URL,
the workspace-relative path of the project file, or `null` for projects
that were loaded from neither

#### Returns

`TNormalizedAnnotatedDataSource`

The normalized data source

#### Inherited from

[`DataProvider`](DataProvider.md).[`normalize`](DataProvider.md#normalize)

***

### prepareDataSource()?

> `optional` **prepareDataSource**(`dataSource`, `workspace`, `projectSource`, `options?`): `Promise`\<`TAnnotatedDataSource`\>

Defined in: [storage/base.ts:238](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L238)

Prepares a data source before a data object backed by it is added, or
before it is saved with a changed source or type

Called once per added data object, with the data source the user entered,
and once per saved edit that changes the data source's `source` or `type`.
May create the data objects the data source depends on, and returns the
data source to add or save.

#### Parameters

##### dataSource

`TAnnotatedDataSource`

The data source to prepare, not normalized

##### workspace

`FileSystemDirectoryHandle` \| `null`

The directory handle of the open workspace, if any

##### projectSource

`string` \| `null`

Where the project was loaded from, if anywhere (see
[DataProvider.normalize](DataProvider.md#normalize))

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`TAnnotatedDataSource`\>

A promise that resolves to the data source to add or save

#### Inherited from

[`DataProvider`](DataProvider.md).[`prepareDataSource`](DataProvider.md#preparedatasource)

***

### readName()?

> `optional` **readName**(`normalizedSource`, `workspace`, `options?`): `Promise`\<`string` \| `undefined`\>

Defined in: [storage/base.ts:216](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L216)

Reads the name a source stores in its metadata

Used to name data objects added from a source the user entered or
dropped. Only names stored in the source are returned, never names
derived from the source itself, such as from its path. Without this
method, or if it resolves to `undefined`, callers derive the name from the
file name. Callers treat a rejection like `undefined`.

#### Parameters

##### normalizedSource

`string`

The source, normalized with
`SourceUtils.normalizeSource` like [DataProvider.normalize](DataProvider.md#normalize) does

##### workspace

`FileSystemDirectoryHandle` \| `null`

The directory handle of the open workspace, if any

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`string` \| `undefined`\>

A promise that resolves to the name, if any

#### Inherited from

[`DataProvider`](DataProvider.md).[`readName`](DataProvider.md#readname)

***

### supports()?

> `optional` **supports**(`normalizedSource`, `workspace`, `options?`): `Promise`\<`boolean`\>

Defined in: [storage/base.ts:195](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L195)

Returns whether this data provider can likely open a source

Used to pick a data provider for a source the user entered or dropped,
e.g. by its file extension or by cheaply reading its metadata. A data
provider without this method is never picked automatically, but can
still be chosen by the user. Callers treat a rejection as `false`.

#### Parameters

##### normalizedSource

`string`

The source, normalized with
`SourceUtils.normalizeSource` like [DataProvider.normalize](DataProvider.md#normalize) does

##### workspace

`FileSystemDirectoryHandle` \| `null`

The directory handle of the open workspace, if any

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to whether the source is supported

#### Inherited from

[`DataProvider`](DataProvider.md).[`supports`](DataProvider.md#supports)
