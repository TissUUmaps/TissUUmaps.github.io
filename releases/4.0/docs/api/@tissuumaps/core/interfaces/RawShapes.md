# Interface: RawShapes

Defined in: [model/shapes.ts:38](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/shapes.ts#L38)

A two-dimensional shape cloud

## Extends

- [`RawRenderedItemsDataObject`](RawRenderedItemsDataObject.md)\<[`RawShapesDataSource`](RawShapesDataSource.md)\<`string`\>\>

## Properties

### dataSource

> **dataSource**: [`RawShapesDataSource`](RawShapesDataSource.md)

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

### shapeFillColor?

> `optional` **shapeFillColor?**: [`ColorConfig`](../type-aliases/ColorConfig.md)

Defined in: [model/shapes.ts:65](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/shapes.ts#L65)

Shape fill color

#### Default Value

[shapesDefaults.shapeFillColor](../variables/shapesDefaults.md#shapefillcolor)

***

### shapeFillOpacity?

> `optional` **shapeFillOpacity?**: [`OpacityConfig`](../type-aliases/OpacityConfig.md)

Defined in: [model/shapes.ts:79](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/shapes.ts#L79)

Shape fill opacity

#### Default Value

[shapesDefaults.shapeFillOpacity](../variables/shapesDefaults.md#shapefillopacity)

***

### shapeFillVisibility?

> `optional` **shapeFillVisibility?**: [`VisibilityConfig`](../type-aliases/VisibilityConfig.md)

Defined in: [model/shapes.ts:72](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/shapes.ts#L72)

Shape fill visibility

#### Default Value

[shapesDefaults.shapeFillVisibility](../variables/shapesDefaults.md#shapefillvisibility)

***

### shapeOpacity?

> `optional` **shapeOpacity?**: [`OpacityConfig`](../type-aliases/OpacityConfig.md)

Defined in: [model/shapes.ts:58](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/shapes.ts#L58)

Shape opacity

Multiplies [shapeFillOpacity](#shapefillopacity) and [shapeStrokeOpacity](#shapestrokeopacity).

#### Default Value

[shapesDefaults.shapeOpacity](../variables/shapesDefaults.md#shapeopacity)

***

### shapeStrokeColor?

> `optional` **shapeStrokeColor?**: [`ColorConfig`](../type-aliases/ColorConfig.md)

Defined in: [model/shapes.ts:86](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/shapes.ts#L86)

Shape stroke color

#### Default Value

[shapesDefaults.shapeStrokeColor](../variables/shapesDefaults.md#shapestrokecolor)

***

### shapeStrokeOpacity?

> `optional` **shapeStrokeOpacity?**: [`OpacityConfig`](../type-aliases/OpacityConfig.md)

Defined in: [model/shapes.ts:100](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/shapes.ts#L100)

Shape stroke opacity

#### Default Value

[shapesDefaults.shapeStrokeOpacity](../variables/shapesDefaults.md#shapestrokeopacity)

***

### shapeStrokeVisibility?

> `optional` **shapeStrokeVisibility?**: [`VisibilityConfig`](../type-aliases/VisibilityConfig.md)

Defined in: [model/shapes.ts:93](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/shapes.ts#L93)

Shape stroke visibility

#### Default Value

[shapesDefaults.shapeStrokeVisibility](../variables/shapesDefaults.md#shapestrokevisibility)

***

### shapeVisibility?

> `optional` **shapeVisibility?**: [`VisibilityConfig`](../type-aliases/VisibilityConfig.md)

Defined in: [model/shapes.ts:49](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/shapes.ts#L49)

Shape visibility

Applies to both the fill and the stroke of a shape, on top of
[shapeFillVisibility](#shapefillvisibility) and [shapeStrokeVisibility](#shapestrokevisibility).

#### Default Value

[shapesDefaults.shapeVisibility](../variables/shapesDefaults.md#shapevisibility)

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
