# Interface: RawLayer

Defined in: [model/layer.ts:18](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/layer.ts#L18)

A named collection of rendered data objects sharing the same (e.g. physical) coordinate system

## Extends

- [`RawModel`](RawModel.md)

## Properties

### id

> **id**: `string`

Defined in: [model/layer.ts:22](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/layer.ts#L22)

Layer ID

***

### name

> **name**: `string`

Defined in: [model/layer.ts:27](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/layer.ts#L27)

Human-readable layer name

***

### opacity?

> `optional` **opacity?**: `number`

Defined in: [model/layer.ts:48](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/layer.ts#L48)

Layer opacity, in the range [0, 1]

#### Default Value

[layerDefaults.opacity](../variables/layerDefaults.md#opacity)

***

### pointSizeFactor?

> `optional` **pointSizeFactor?**: `number`

Defined in: [model/layer.ts:62](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/layer.ts#L62)

Layer-level point size scaling factor

A unitless scaling factor by which the size of every point rendered on this
layer is multiplied, for adjusting point sizes per layer.

Point sizes are also affected by the project-global
[WebGLPointsRenderOptions.globalPointSizeFactor](../type-aliases/WebGLPointsRenderOptions.md#globalpointsizefactor) and by the
[RawPoints](RawPoints.md)-specific size settings.

#### Default Value

[layerDefaults.pointSizeFactor](../variables/layerDefaults.md#pointsizefactor)

***

### transform?

> `optional` **transform?**: [`SimilarityTransform`](../type-aliases/SimilarityTransform.md)

Defined in: [model/layer.ts:34](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/layer.ts#L34)

Transformation from layer space to world space

#### Default Value

[layerDefaults.transform](../variables/layerDefaults.md#transform)

***

### visibility?

> `optional` **visibility?**: `boolean`

Defined in: [model/layer.ts:41](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/layer.ts#L41)

Layer visibility

#### Default Value

[layerDefaults.visibility](../variables/layerDefaults.md#visibility)
