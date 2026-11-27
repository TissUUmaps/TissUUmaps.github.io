# Interface: RawProject

Defined in: [model/project.ts:106](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L106)

A TissUUmaps project

Top-level container that assembles layers, data objects (images, labels,
points, shapes), tables, group-to-value maps, and viewer/render options
into a single serializable configuration.

## Extends

- [`RawModel`](RawModel.md)

## Properties

### colorbarsVisibility?

> `optional` **colorbarsVisibility?**: `boolean`

Defined in: [model/project.ts:237](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L237)

Whether the viewer shows the colorbars of colors taken from table columns

#### Default Value

[projectDefaults.colorbarsVisibility](../variables/projectDefaults.md#colorbarsvisibility)

***

### colorMaps?

> `optional` **colorMaps?**: [`GroupValueMap`](../type-aliases/GroupValueMap.md)\<[`Color`](../type-aliases/Color.md)\>[]

Defined in: [model/project.ts:167](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L167)

Project-global color maps, referenced by [GroupByConfig](../type-aliases/GroupByConfig.md) color configurations

Map IDs are unique within this list; the other lists of maps may reuse them.

#### Default Value

[projectDefaults.colorMaps](../variables/projectDefaults.md#colormaps)

***

### glOptions?

> `optional` **glOptions?**: [`WebGLOptions`](../type-aliases/WebGLOptions.md)

Defined in: [model/project.ts:200](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L200)

WebGL render options for points/shapes

#### Default Value

[projectDefaults.glOptions](../variables/projectDefaults.md#gloptions)

***

### images?

> `optional` **images?**: [`RawImage`](RawImage.md)[]

Defined in: [model/project.ts:120](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L120)

Images

***

### labels?

> `optional` **labels?**: [`RawLabels`](RawLabels.md)[]

Defined in: [model/project.ts:125](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L125)

Labels

***

### layers?

> `optional` **layers?**: [`RawLayer`](RawLayer.md)[]

Defined in: [model/project.ts:115](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L115)

Layers

***

### markerMaps?

> `optional` **markerMaps?**: [`GroupValueMap`](../type-aliases/GroupValueMap.md)\<[`Marker`](../type-aliases/Marker.md)\>[]

Defined in: [model/project.ts:149](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L149)

Project-global marker maps, referenced by [GroupByConfig](../type-aliases/GroupByConfig.md) marker configurations

Map IDs are unique within this list; the other lists of maps may reuse them.

#### Default Value

[projectDefaults.markerMaps](../variables/projectDefaults.md#markermaps)

***

### name

> **name**: `string`

Defined in: [model/project.ts:110](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L110)

Project name

***

### opacityMaps?

> `optional` **opacityMaps?**: [`GroupValueMap`](../type-aliases/GroupValueMap.md)\<`number`\>[]

Defined in: [model/project.ts:185](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L185)

Project-global opacity maps, referenced by [GroupByConfig](../type-aliases/GroupByConfig.md) opacity configurations

Map IDs are unique within this list; the other lists of maps may reuse them.

#### Default Value

[projectDefaults.opacityMaps](../variables/projectDefaults.md#opacitymaps)

***

### osOptions?

> `optional` **osOptions?**: [`OpenSeadragonOptions`](../type-aliases/OpenSeadragonOptions.md)

Defined in: [model/project.ts:193](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L193)

OpenSeadragon viewer options for images/labels

#### Default Value

[projectDefaults.osOptions](../variables/projectDefaults.md#osoptions)

#### See

https://openseadragon.github.io/docs/OpenSeadragon.html#.Options

***

### physicalUnit?

> `optional` **physicalUnit?**: `string`

Defined in: [model/project.ts:223](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L223)

Unit of the physical unit size

Either one of the [PhysicalUnit](../variables/PhysicalUnit.md) names, between which the scalebar
converts, or any other text, which the scalebar shows as is.

***

### physicalUnitSize?

> `optional` **physicalUnitSize?**: `number`

Defined in: [model/project.ts:215](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L215)

Physical size of one world unit, in the physical unit

The scalebar is in world units unless this is set to a positive value
and the physical unit is set.

***

### points?

> `optional` **points?**: [`RawPoints`](RawPoints.md)[]

Defined in: [model/project.ts:130](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L130)

Points

***

### scalebarVisibility?

> `optional` **scalebarVisibility?**: `boolean`

Defined in: [model/project.ts:230](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L230)

Whether the viewer shows the scalebar

#### Default Value

[projectDefaults.scalebarVisibility](../variables/projectDefaults.md#scalebarvisibility)

***

### shapes?

> `optional` **shapes?**: [`RawShapes`](RawShapes.md)[]

Defined in: [model/project.ts:135](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L135)

Shapes

***

### sizeMaps?

> `optional` **sizeMaps?**: [`GroupValueMap`](../type-aliases/GroupValueMap.md)\<`number`\>[]

Defined in: [model/project.ts:158](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L158)

Project-global size maps, referenced by [GroupByConfig](../type-aliases/GroupByConfig.md) size configurations

Map IDs are unique within this list; the other lists of maps may reuse them.

#### Default Value

[projectDefaults.sizeMaps](../variables/projectDefaults.md#sizemaps)

***

### tables?

> `optional` **tables?**: [`RawTable`](RawTable.md)[]

Defined in: [model/project.ts:140](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L140)

Tables

***

### viewerBackgroundColor?

> `optional` **viewerBackgroundColor?**: [`Color`](../type-aliases/Color.md)

Defined in: [model/project.ts:207](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L207)

Color of the viewer background, behind all rendered content

#### Default Value

[projectDefaults.viewerBackgroundColor](../variables/projectDefaults.md#viewerbackgroundcolor)

***

### visibilityMaps?

> `optional` **visibilityMaps?**: [`GroupValueMap`](../type-aliases/GroupValueMap.md)\<`boolean`\>[]

Defined in: [model/project.ts:176](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L176)

Project-global visibility maps, referenced by [GroupByConfig](../type-aliases/GroupByConfig.md) visibility configurations

Map IDs are unique within this list; the other lists of maps may reuse them.

#### Default Value

[projectDefaults.visibilityMaps](../variables/projectDefaults.md#visibilitymaps)
