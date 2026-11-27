# Class: ProjectUtils

Defined in: [utils/ProjectUtils.ts:13](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/utils/ProjectUtils.ts#L13)

Utility methods for projects

## Constructors

### Constructor

> **new ProjectUtils**(): `ProjectUtils`

#### Returns

`ProjectUtils`

## Methods

### getColorConfigs()

> `static` **getColorConfigs**(`project`): [`ColorConfig`](../type-aliases/ColorConfig.md)[]

Defined in: [utils/ProjectUtils.ts:89](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/utils/ProjectUtils.ts#L89)

Returns the color configurations of a project's labels, points and shapes

#### Parameters

##### project

`Pick`\<[`Project`](../type-aliases/Project.md), `"labels"` \| `"points"` \| `"shapes"`\>

The project, or only its labels, points and shapes

#### Returns

[`ColorConfig`](../type-aliases/ColorConfig.md)[]

The color configurations, including the fill and stroke colors of
shapes

***

### getMarkerConfigs()

> `static` **getMarkerConfigs**(`project`): [`MarkerConfig`](../type-aliases/MarkerConfig.md)[]

Defined in: [utils/ProjectUtils.ts:64](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/utils/ProjectUtils.ts#L64)

Returns the marker configurations of a project's points

#### Parameters

##### project

`Pick`\<[`Project`](../type-aliases/Project.md), `"labels"` \| `"points"` \| `"shapes"`\>

The project, or only its labels, points and shapes

#### Returns

[`MarkerConfig`](../type-aliases/MarkerConfig.md)[]

The marker configurations

***

### getOpacityConfigs()

> `static` **getOpacityConfigs**(`project`): [`OpacityConfig`](../type-aliases/OpacityConfig.md)[]

Defined in: [utils/ProjectUtils.ts:131](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/utils/ProjectUtils.ts#L131)

Returns the opacity configurations of a project's labels, points and shapes

#### Parameters

##### project

`Pick`\<[`Project`](../type-aliases/Project.md), `"labels"` \| `"points"` \| `"shapes"`\>

The project, or only its labels, points and shapes

#### Returns

[`OpacityConfig`](../type-aliases/OpacityConfig.md)[]

The opacity configurations, including the shape, fill and stroke
opacities of shapes

***

### getSizeConfigs()

> `static` **getSizeConfigs**(`project`): [`SizeConfig`](../type-aliases/SizeConfig.md)[]

Defined in: [utils/ProjectUtils.ts:76](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/utils/ProjectUtils.ts#L76)

Returns the size configurations of a project's points

#### Parameters

##### project

`Pick`\<[`Project`](../type-aliases/Project.md), `"labels"` \| `"points"` \| `"shapes"`\>

The project, or only its labels, points and shapes

#### Returns

[`SizeConfig`](../type-aliases/SizeConfig.md)[]

The size configurations

***

### getVisibilityConfigs()

> `static` **getVisibilityConfigs**(`project`): [`VisibilityConfig`](../type-aliases/VisibilityConfig.md)[]

Defined in: [utils/ProjectUtils.ts:110](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/utils/ProjectUtils.ts#L110)

Returns the visibility configurations of a project's labels, points and
shapes

#### Parameters

##### project

`Pick`\<[`Project`](../type-aliases/Project.md), `"labels"` \| `"points"` \| `"shapes"`\>

The project, or only its labels, points and shapes

#### Returns

[`VisibilityConfig`](../type-aliases/VisibilityConfig.md)[]

The visibility configurations, including the shape, fill and
stroke visibilities of shapes

***

### hasData()

> `static` **hasData**(`project`): `boolean`

Defined in: [utils/ProjectUtils.ts:20](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/utils/ProjectUtils.ts#L20)

Returns whether a project has any data objects

#### Parameters

##### project

`Pick`\<[`Project`](../type-aliases/Project.md), `"images"` \| `"labels"` \| `"points"` \| `"shapes"` \| `"tables"`\>

The project, or only its data objects

#### Returns

`boolean`

`true` if the project has images, labels, points, shapes or tables

***

### mayBeVisible()

> `static` **mayBeVisible**(`object`, `layers`): `boolean`

Defined in: [utils/ProjectUtils.ts:47](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/utils/ProjectUtils.ts#L47)

Returns whether an object may be visible

An object may be visible if it is visible itself and its layer is visible.
An object whose items are assigned to layers by a table column may be
visible if it is visible itself, even if all of its items' layers are
hidden.

#### Parameters

##### object

The object, or only its visibility and layer

###### layer

`string` \| [`TableColumnRef`](../type-aliases/TableColumnRef.md)

###### visibility

`boolean`

##### layers

[`Layer`](../type-aliases/Layer.md)[]

The layers of the project

#### Returns

`boolean`

`true` if the object may be visible
