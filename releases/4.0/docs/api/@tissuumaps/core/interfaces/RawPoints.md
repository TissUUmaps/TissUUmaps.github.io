# Interface: RawPoints

Defined in: [model/points.ts:41](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/points.ts#L41)

A two-dimensional point cloud

## Extends

- [`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md)\<[`RawPointsDataSource`](RawPointsDataSource.md)\<`string`\>\>

## Properties

### dataSource

> **dataSource**: [`RawPointsDataSource`](RawPointsDataSource.md)

Defined in: [model/base.ts:70](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L70)

Data source

#### Inherited from

[`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md).[`dataSource`](RawRenderedItemsDataObject.md#datasource)

***

### id

> **id**: `string`

Defined in: [model/base.ts:64](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L64)

Data object ID

#### Inherited from

[`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md).[`id`](RawRenderedItemsDataObject.md#id)

***

### layer

> **layer**: `string` \| [`TableColumnRef`](../type-aliases/TableColumnRef.md)

Defined in: [model/base.ts:253](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L253)

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

Defined in: [model/base.ts:67](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L67)

Human-readable data object name

#### Inherited from

[`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md).[`name`](RawRenderedItemsDataObject.md#name)

***

### opacity?

> `optional` **opacity?**: `number`

Defined in: [model/base.ts:129](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L129)

Data object opacity, in the range [0, 1]

#### Default Value

[renderedDataObjectDefaults.opacity](../variables/renderedDataObjectDefaults.md#opacity)

#### Inherited from

[`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md).[`opacity`](RawRenderedItemsDataObject.md#opacity)

***

### pointColor?

> `optional` **pointColor?**: [`ColorConfig`](../type-aliases/ColorConfig.md)

Defined in: [model/points.ts:63](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/points.ts#L63)

Point color

#### Default Value

[pointsDefaults.pointColor](../variables/pointsDefaults.md#pointcolor)

***

### pointMarker?

> `optional` **pointMarker?**: [`MarkerConfig`](../type-aliases/MarkerConfig.md)

Defined in: [model/points.ts:49](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/points.ts#L49)

Point marker

#### Default Value

[pointsDefaults.pointMarker](../variables/pointsDefaults.md#pointmarker)

***

### pointOpacity?

> `optional` **pointOpacity?**: [`OpacityConfig`](../type-aliases/OpacityConfig.md)

Defined in: [model/points.ts:77](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/points.ts#L77)

Point opacity

#### Default Value

[pointsDefaults.pointOpacity](../variables/pointsDefaults.md#pointopacity)

***

### pointOrder?

> `optional` **pointOrder?**: [`OrderConfig`](../type-aliases/OrderConfig.md)

Defined in: [model/points.ts:84](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/points.ts#L84)

Point draw order

If not specified, points are drawn in item order.

***

### pointSize?

> `optional` **pointSize?**: [`SizeConfig`](../type-aliases/SizeConfig.md)

Defined in: [model/points.ts:56](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/points.ts#L56)

Point size

#### Default Value

[pointsDefaults.pointSize](../variables/pointsDefaults.md#pointsize)

***

### pointSizeFactor?

> `optional` **pointSizeFactor?**: `number`

Defined in: [model/points.ts:98](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/points.ts#L98)

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

Defined in: [model/points.ts:70](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/points.ts#L70)

Point visibility

#### Default Value

[pointsDefaults.pointVisibility](../variables/pointsDefaults.md#pointvisibility)

***

### transform?

> `optional` **transform?**: [`SimilarityTransform`](../type-aliases/SimilarityTransform.md)

Defined in: [model/base.ts:136](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L136)

Transformation from data object space to layer space

#### Default Value

[renderedDataObjectDefaults.transform](../variables/renderedDataObjectDefaults.md#transform)

#### Inherited from

[`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md).[`transform`](RawRenderedItemsDataObject.md#transform)

***

### visibility?

> `optional` **visibility?**: `boolean`

Defined in: [model/base.ts:122](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L122)

Data object visibility

#### Default Value

[renderedDataObjectDefaults.visibility](../variables/renderedDataObjectDefaults.md#visibility)

#### Inherited from

[`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md).[`visibility`](RawRenderedItemsDataObject.md#visibility)
