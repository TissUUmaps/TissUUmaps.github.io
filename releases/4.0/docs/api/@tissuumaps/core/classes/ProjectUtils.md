# Class: ProjectUtils

Defined in: [utils/ProjectUtils.ts:11](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ProjectUtils.ts#L11)

Utility methods for projects

## Constructors

### Constructor

> **new ProjectUtils**(): `ProjectUtils`

#### Returns

`ProjectUtils`

## Methods

### getColorConfigs()

> `static` **getColorConfigs**(`project`): [`ColorConfig`](../type-aliases/ColorConfig.md)[]

Defined in: [utils/ProjectUtils.ts:64](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ProjectUtils.ts#L64)

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

Defined in: [utils/ProjectUtils.ts:39](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ProjectUtils.ts#L39)

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

Defined in: [utils/ProjectUtils.ts:106](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ProjectUtils.ts#L106)

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

Defined in: [utils/ProjectUtils.ts:51](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ProjectUtils.ts#L51)

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

Defined in: [utils/ProjectUtils.ts:85](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ProjectUtils.ts#L85)

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

Defined in: [utils/ProjectUtils.ts:18](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ProjectUtils.ts#L18)

Returns whether a project has any data objects

#### Parameters

##### project

`Pick`\<[`Project`](../type-aliases/Project.md), `"images"` \| `"labels"` \| `"points"` \| `"shapes"` \| `"tables"`\>

The project, or only its data objects

#### Returns

`boolean`

`true` if the project has images, labels, points, shapes or tables
