# Interface: RawPoints

Defined in: [model/points.ts:39](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/points.ts#L39)

A two-dimensional point cloud

## Extends

- [`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md)\<[`RawPointsDataSource`](RawPointsDataSource.md)\<`string`\>\>

## Properties

### dataSource

> **dataSource**: [`RawPointsDataSource`](RawPointsDataSource.md)

Defined in: [model/base.ts:53](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L53)

Data source

#### Inherited from

[`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md).[`dataSource`](RawRenderedItemsDataObject.md#datasource)

***

### id

> **id**: `string`

Defined in: [model/base.ts:47](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L47)

Data object ID

#### Inherited from

[`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md).[`id`](RawRenderedItemsDataObject.md#id)

***

### layer

> **layer**: `string` \| [`TableColumnRef`](../type-aliases/TableColumnRef.md)

Defined in: [model/base.ts:236](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L236)

Layer ID

Can be specified as:
- An ID of an existing Layer
- A table column holding the layer ID values for each item, of the
  object's own table unless it names another

#### Inherited from

[`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md).[`layer`](RawRenderedItemsDataObject.md#layer)

***

### name

> **name**: `string`

Defined in: [model/base.ts:50](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L50)

Human-readable data object name

#### Inherited from

[`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md).[`name`](RawRenderedItemsDataObject.md#name)

***

### opacity?

> `optional` **opacity?**: `number`

Defined in: [model/base.ts:112](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L112)

Data object opacity, in the range [0, 1]

#### Default Value

[renderedDataObjectDefaults.opacity](../variables/renderedDataObjectDefaults.md#opacity)

#### Inherited from

[`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md).[`opacity`](RawRenderedItemsDataObject.md#opacity)

***

### pointColor?

> `optional` **pointColor?**: [`ColorConfig`](../type-aliases/ColorConfig.md)

Defined in: [model/points.ts:61](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/points.ts#L61)

Point color

#### Default Value

[pointsDefaults.pointColor](../variables/pointsDefaults.md#pointcolor)

***

### pointMarker?

> `optional` **pointMarker?**: [`MarkerConfig`](../type-aliases/MarkerConfig.md)

Defined in: [model/points.ts:47](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/points.ts#L47)

Point marker

#### Default Value

[pointsDefaults.pointMarker](../variables/pointsDefaults.md#pointmarker)

***

### pointOpacity?

> `optional` **pointOpacity?**: [`OpacityConfig`](../type-aliases/OpacityConfig.md)

Defined in: [model/points.ts:75](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/points.ts#L75)

Point opacity

#### Default Value

[pointsDefaults.pointOpacity](../variables/pointsDefaults.md#pointopacity)

***

### pointSize?

> `optional` **pointSize?**: [`SizeConfig`](../type-aliases/SizeConfig.md)

Defined in: [model/points.ts:54](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/points.ts#L54)

Point size

#### Default Value

[pointsDefaults.pointSize](../variables/pointsDefaults.md#pointsize)

***

### pointSizeFactor?

> `optional` **pointSizeFactor?**: `number`

Defined in: [model/points.ts:89](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/points.ts#L89)

Object-level point size scaling factor

A unitless scaling factor by which the size of every point of this object is
multiplied, for adjusting point sizes without touching the individual point
sizes or their unit.

Point sizes are also affected by [RawLayer.pointSizeFactor](RawLayer.md#pointsizefactor) and by the
project-global [WebGLPointsRenderOptions.globalPointSizeFactor](../type-aliases/WebGLPointsRenderOptions.md#globalpointsizefactor).

#### Default Value

[pointsDefaults.pointSizeFactor](../variables/pointsDefaults.md#pointsizefactor)

***

### pointVisibility?

> `optional` **pointVisibility?**: [`VisibilityConfig`](../type-aliases/VisibilityConfig.md)

Defined in: [model/points.ts:68](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/points.ts#L68)

Point visibility

#### Default Value

[pointsDefaults.pointVisibility](../variables/pointsDefaults.md#pointvisibility)

***

### transform?

> `optional` **transform?**: [`SimilarityTransform`](../type-aliases/SimilarityTransform.md)

Defined in: [model/base.ts:119](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L119)

Transformation from data object space to layer space

#### Default Value

[renderedDataObjectDefaults.transform](../variables/renderedDataObjectDefaults.md#transform)

#### Inherited from

[`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md).[`transform`](RawRenderedItemsDataObject.md#transform)

***

### visibility?

> `optional` **visibility?**: `boolean`

Defined in: [model/base.ts:105](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L105)

Data object visibility

#### Default Value

[renderedDataObjectDefaults.visibility](../variables/renderedDataObjectDefaults.md#visibility)

#### Inherited from

[`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md).[`visibility`](RawRenderedItemsDataObject.md#visibility)
