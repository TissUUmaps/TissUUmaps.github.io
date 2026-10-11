# Class: GeoJSONShapesDataProvider

Defined in: [@tissuumaps-storage/src/geojson/GeoJSONShapesDataProvider.ts:15](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/geojson/GeoJSONShapesDataProvider.ts#L15)

Data provider for shape (polygon) collections

## Implements

- [`ShapesDataProvider`](../../core/interfaces/ShapesDataProvider.md)\<[`GeoJSONShapesDataSource`](../interfaces/GeoJSONShapesDataSource.md), [`GeoJSONShapesData`](GeoJSONShapesData.md), [`NormalizedGeoJSONShapesDataSource`](../type-aliases/NormalizedGeoJSONShapesDataSource.md)\>

## Constructors

### Constructor

> **new GeoJSONShapesDataProvider**(): `GeoJSONShapesDataProvider`

#### Returns

`GeoJSONShapesDataProvider`

## Properties

### name

> `readonly` **name**: `"GeoJSON"` = `"GeoJSON"`

Defined in: [@tissuumaps-storage/src/geojson/GeoJSONShapesDataProvider.ts:23](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/geojson/GeoJSONShapesDataProvider.ts#L23)

The name of the data provider

#### Implementation of

[`ShapesDataProvider`](../../core/interfaces/ShapesDataProvider.md).[`name`](../../core/interfaces/ShapesDataProvider.md#name)

***

### schema

> `readonly` **schema**: `object`

Defined in: [@tissuumaps-storage/src/geojson/GeoJSONShapesDataProvider.ts:25](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/geojson/GeoJSONShapesDataProvider.ts#L25)

The JSON schema for the data source

#### properties

> **properties**: `object`

##### properties.idProperty

> **idProperty**: `object`

##### properties.idProperty.type

> **type**: `string` = `"string"`

##### properties.nameProperty

> **nameProperty**: `object`

##### properties.nameProperty.type

> **type**: `string` = `"string"`

##### properties.source

> **source**: `object`

##### properties.source.type

> **type**: `string` = `"string"`

##### properties.table

> **table**: `object`

##### properties.table.type

> **type**: `string` = `"string"`

#### required

> **required**: `string`[]

#### type

> **type**: `string` = `"object"`

#### Implementation of

[`ShapesDataProvider`](../../core/interfaces/ShapesDataProvider.md).[`schema`](../../core/interfaces/ShapesDataProvider.md#schema)

***

### uischema

> `readonly` **uischema**: `object`

Defined in: [@tissuumaps-storage/src/geojson/GeoJSONShapesDataProvider.ts:44](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/geojson/GeoJSONShapesDataProvider.ts#L44)

The JSON Forms UI schema for the data source

It must not contain a control for the data source's `source`, which the
application renders itself if the schema declares it, as a string.

#### elements

> **elements**: `object`[]

#### type

> **type**: `string` = `"VerticalLayout"`

#### Implementation of

[`ShapesDataProvider`](../../core/interfaces/ShapesDataProvider.md).[`uischema`](../../core/interfaces/ShapesDataProvider.md#uischema)

## Methods

### load()

> **load**(`normalizedDataSource`, `options?`): `Promise`\<[`GeoJSONShapesData`](GeoJSONShapesData.md)\>

Defined in: [@tissuumaps-storage/src/geojson/GeoJSONShapesDataProvider.ts:96](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/geojson/GeoJSONShapesDataProvider.ts#L96)

Opens a data source and returns the loaded data accessor

The data source has to have been normalized by
[DataProvider.normalize](../../core/interfaces/DataProvider.md#normalize) beforehand.

#### Parameters

##### normalizedDataSource

[`NormalizedGeoJSONShapesDataSource`](../type-aliases/NormalizedGeoJSONShapesDataSource.md)

The normalized data source to open

##### options?

[`DataProviderLoadOptions`](../../core/type-aliases/DataProviderLoadOptions.md)

See [AnnotatedDataProviderLoadOptions](../../core/type-aliases/AnnotatedDataProviderLoadOptions.md)

#### Returns

`Promise`\<[`GeoJSONShapesData`](GeoJSONShapesData.md)\>

A promise that resolves to the loaded data accessor

#### Implementation of

[`ShapesDataProvider`](../../core/interfaces/ShapesDataProvider.md).[`load`](../../core/interfaces/ShapesDataProvider.md#load)

***

### normalize()

> **normalize**(`dataSource`, `workspace`, `projectSource`): [`NormalizedGeoJSONShapesDataSource`](../type-aliases/NormalizedGeoJSONShapesDataSource.md)

Defined in: [@tissuumaps-storage/src/geojson/GeoJSONShapesDataProvider.ts:65](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/geojson/GeoJSONShapesDataProvider.ts#L65)

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

[`GeoJSONShapesDataSource`](../interfaces/GeoJSONShapesDataSource.md)

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

[`NormalizedGeoJSONShapesDataSource`](../type-aliases/NormalizedGeoJSONShapesDataSource.md)

The normalized data source

#### Implementation of

[`ShapesDataProvider`](../../core/interfaces/ShapesDataProvider.md).[`normalize`](../../core/interfaces/ShapesDataProvider.md#normalize)

***

### supports()

> **supports**(`normalizedSource`): `Promise`\<`boolean`\>

Defined in: [@tissuumaps-storage/src/geojson/GeoJSONShapesDataProvider.ts:88](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/geojson/GeoJSONShapesDataProvider.ts#L88)

Returns whether a source has a GeoJSON file extension (see
GeoJSONShapesDataProvider.\_extensions)

#### Parameters

##### normalizedSource

`string`

The normalized source to check

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to whether the source is supported

#### Implementation of

[`ShapesDataProvider`](../../core/interfaces/ShapesDataProvider.md).[`supports`](../../core/interfaces/ShapesDataProvider.md#supports)
