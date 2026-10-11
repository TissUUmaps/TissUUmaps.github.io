# Interface: RawProject

Defined in: [model/project.ts:76](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/project.ts#L76)

A TissUUmaps project

Top-level container that assembles layers, data objects (images, labels,
points, shapes), tables, group-to-value maps, and viewer/render options
into a single serializable configuration.

## Extends

- [`RawModel`](RawModel.md)

## Properties

### colorMaps?

> `optional` **colorMaps?**: [`GroupValueMap`](../type-aliases/GroupValueMap.md)\<[`Color`](../type-aliases/Color.md)\>[]

Defined in: [model/project.ts:137](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/project.ts#L137)

Project-global color maps, referenced by [GroupByConfig](../type-aliases/GroupByConfig.md) color configurations

Map IDs are unique within this list; the other lists of maps may reuse them.

#### Default Value

[projectDefaults.colorMaps](../variables/projectDefaults.md#colormaps)

***

### glOptions?

> `optional` **glOptions?**: [`WebGLOptions`](../type-aliases/WebGLOptions.md)

Defined in: [model/project.ts:170](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/project.ts#L170)

WebGL render options for points/shapes

#### Default Value

[projectDefaults.glOptions](../variables/projectDefaults.md#gloptions)

***

### images?

> `optional` **images?**: [`RawImage`](RawImage.md)[]

Defined in: [model/project.ts:90](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/project.ts#L90)

Images

***

### labels?

> `optional` **labels?**: [`RawLabels`](RawLabels.md)[]

Defined in: [model/project.ts:95](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/project.ts#L95)

Labels

***

### layers?

> `optional` **layers?**: [`RawLayer`](RawLayer.md)[]

Defined in: [model/project.ts:85](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/project.ts#L85)

Layers

***

### markerMaps?

> `optional` **markerMaps?**: [`GroupValueMap`](../type-aliases/GroupValueMap.md)\<[`Marker`](../type-aliases/Marker.md)\>[]

Defined in: [model/project.ts:119](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/project.ts#L119)

Project-global marker maps, referenced by [GroupByConfig](../type-aliases/GroupByConfig.md) marker configurations

Map IDs are unique within this list; the other lists of maps may reuse them.

#### Default Value

[projectDefaults.markerMaps](../variables/projectDefaults.md#markermaps)

***

### name

> **name**: `string`

Defined in: [model/project.ts:80](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/project.ts#L80)

Project name

***

### opacityMaps?

> `optional` **opacityMaps?**: [`GroupValueMap`](../type-aliases/GroupValueMap.md)\<`number`\>[]

Defined in: [model/project.ts:155](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/project.ts#L155)

Project-global opacity maps, referenced by [GroupByConfig](../type-aliases/GroupByConfig.md) opacity configurations

Map IDs are unique within this list; the other lists of maps may reuse them.

#### Default Value

[projectDefaults.opacityMaps](../variables/projectDefaults.md#opacitymaps)

***

### osOptions?

> `optional` **osOptions?**: [`OpenSeadragonOptions`](../type-aliases/OpenSeadragonOptions.md)

Defined in: [model/project.ts:163](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/project.ts#L163)

OpenSeadragon viewer options for images/labels

#### Default Value

[projectDefaults.osOptions](../variables/projectDefaults.md#osoptions)

#### See

https://openseadragon.github.io/docs/OpenSeadragon.html#.Options

***

### points?

> `optional` **points?**: [`RawPoints`](RawPoints.md)[]

Defined in: [model/project.ts:100](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/project.ts#L100)

Points

***

### shapes?

> `optional` **shapes?**: [`RawShapes`](RawShapes.md)[]

Defined in: [model/project.ts:105](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/project.ts#L105)

Shapes

***

### sizeMaps?

> `optional` **sizeMaps?**: [`GroupValueMap`](../type-aliases/GroupValueMap.md)\<`number`\>[]

Defined in: [model/project.ts:128](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/project.ts#L128)

Project-global size maps, referenced by [GroupByConfig](../type-aliases/GroupByConfig.md) size configurations

Map IDs are unique within this list; the other lists of maps may reuse them.

#### Default Value

[projectDefaults.sizeMaps](../variables/projectDefaults.md#sizemaps)

***

### tables?

> `optional` **tables?**: [`RawTable`](RawTable.md)[]

Defined in: [model/project.ts:110](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/project.ts#L110)

Tables

***

### viewerBackgroundColor?

> `optional` **viewerBackgroundColor?**: [`Color`](../type-aliases/Color.md)

Defined in: [model/project.ts:177](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/project.ts#L177)

Color of the viewer background, behind all rendered content

#### Default Value

[projectDefaults.viewerBackgroundColor](../variables/projectDefaults.md#viewerbackgroundcolor)

***

### visibilityMaps?

> `optional` **visibilityMaps?**: [`GroupValueMap`](../type-aliases/GroupValueMap.md)\<`boolean`\>[]

Defined in: [model/project.ts:146](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/project.ts#L146)

Project-global visibility maps, referenced by [GroupByConfig](../type-aliases/GroupByConfig.md) visibility configurations

Map IDs are unique within this list; the other lists of maps may reuse them.

#### Default Value

[projectDefaults.visibilityMaps](../variables/projectDefaults.md#visibilitymaps)
