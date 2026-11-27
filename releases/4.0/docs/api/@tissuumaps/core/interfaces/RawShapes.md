# Interface: RawShapes

Defined in: [model/shapes.ts:41](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/shapes.ts#L41)

A two-dimensional shape cloud

## Extends

- [`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md)\<[`RawShapesDataSource`](RawShapesDataSource.md)\<`string`\>\>

## Properties

### dataSource

> **dataSource**: [`RawShapesDataSource`](RawShapesDataSource.md)

Defined in: [model/base.ts:70](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L70)

Data source

#### Inherited from

[`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md).[`dataSource`](RawRenderedItemsDataObject.md#datasource)

***

### fillVisibility?

> `optional` **fillVisibility?**: `boolean`

Defined in: [model/shapes.ts:113](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/shapes.ts#L113)

Object-level fill visibility

Hides the fill of every shape of this object when `false`, on top of
[shapeFillVisibility](#shapefillvisibility), without touching the individual shapes.

#### Default Value

[shapesDefaults.fillVisibility](../variables/shapesDefaults.md#fillvisibility)

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

### shapeFillColor?

> `optional` **shapeFillColor?**: [`ColorConfig`](../type-aliases/ColorConfig.md)

Defined in: [model/shapes.ts:68](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/shapes.ts#L68)

Shape fill color

#### Default Value

[shapesDefaults.shapeFillColor](../variables/shapesDefaults.md#shapefillcolor)

***

### shapeFillOpacity?

> `optional` **shapeFillOpacity?**: [`OpacityConfig`](../type-aliases/OpacityConfig.md)

Defined in: [model/shapes.ts:82](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/shapes.ts#L82)

Shape fill opacity

#### Default Value

[shapesDefaults.shapeFillOpacity](../variables/shapesDefaults.md#shapefillopacity)

***

### shapeFillVisibility?

> `optional` **shapeFillVisibility?**: [`VisibilityConfig`](../type-aliases/VisibilityConfig.md)

Defined in: [model/shapes.ts:75](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/shapes.ts#L75)

Shape fill visibility

#### Default Value

[shapesDefaults.shapeFillVisibility](../variables/shapesDefaults.md#shapefillvisibility)

***

### shapeOpacity?

> `optional` **shapeOpacity?**: [`OpacityConfig`](../type-aliases/OpacityConfig.md)

Defined in: [model/shapes.ts:61](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/shapes.ts#L61)

Shape opacity

Multiplies [shapeFillOpacity](#shapefillopacity) and [shapeStrokeOpacity](#shapestrokeopacity).

#### Default Value

[shapesDefaults.shapeOpacity](../variables/shapesDefaults.md#shapeopacity)

***

### shapeStrokeColor?

> `optional` **shapeStrokeColor?**: [`ColorConfig`](../type-aliases/ColorConfig.md)

Defined in: [model/shapes.ts:89](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/shapes.ts#L89)

Shape stroke color

#### Default Value

[shapesDefaults.shapeStrokeColor](../variables/shapesDefaults.md#shapestrokecolor)

***

### shapeStrokeOpacity?

> `optional` **shapeStrokeOpacity?**: [`OpacityConfig`](../type-aliases/OpacityConfig.md)

Defined in: [model/shapes.ts:103](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/shapes.ts#L103)

Shape stroke opacity

#### Default Value

[shapesDefaults.shapeStrokeOpacity](../variables/shapesDefaults.md#shapestrokeopacity)

***

### shapeStrokeVisibility?

> `optional` **shapeStrokeVisibility?**: [`VisibilityConfig`](../type-aliases/VisibilityConfig.md)

Defined in: [model/shapes.ts:96](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/shapes.ts#L96)

Shape stroke visibility

#### Default Value

[shapesDefaults.shapeStrokeVisibility](../variables/shapesDefaults.md#shapestrokevisibility)

***

### shapeVisibility?

> `optional` **shapeVisibility?**: [`VisibilityConfig`](../type-aliases/VisibilityConfig.md)

Defined in: [model/shapes.ts:52](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/shapes.ts#L52)

Shape visibility

Applies to both the fill and the stroke of a shape, on top of
[shapeFillVisibility](#shapefillvisibility) and [shapeStrokeVisibility](#shapestrokevisibility).

#### Default Value

[shapesDefaults.shapeVisibility](../variables/shapesDefaults.md#shapevisibility)

***

### strokeVisibility?

> `optional` **strokeVisibility?**: `boolean`

Defined in: [model/shapes.ts:123](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/shapes.ts#L123)

Object-level stroke visibility

Hides the stroke of every shape of this object when `false`, on top of
[shapeStrokeVisibility](#shapestrokevisibility), without touching the individual shapes.

#### Default Value

[shapesDefaults.strokeVisibility](../variables/shapesDefaults.md#strokevisibility)

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
