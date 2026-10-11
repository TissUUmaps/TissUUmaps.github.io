# Interface: ViewerAdapter

Defined in: [adapter.ts:22](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L22)

## Properties

### addShape?

> `optional` **addShape?**: (`shape`) => `void`

Defined in: [adapter.ts:60](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L60)

#### Parameters

##### shape

[`MultiPolygon`](../../core/type-aliases/MultiPolygon.md)

#### Returns

`void`

***

### colorMaps

> **colorMaps**: [`GroupValueMap`](../../core/type-aliases/GroupValueMap.md)\<[`Color`](../../core/type-aliases/Color.md)\>[]

Defined in: [adapter.ts:32](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L32)

***

### glOptions

> **glOptions**: [`WebGLOptions`](../../core/type-aliases/WebGLOptions.md)

Defined in: [adapter.ts:36](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L36)

***

### images

> **images**: [`Image`](../../core/type-aliases/Image.md)[]

Defined in: [adapter.ts:25](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L25)

***

### interactionMode

> **interactionMode**: [`InteractionMode`](../../core/type-aliases/InteractionMode.md)

Defined in: [adapter.ts:59](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L59)

***

### labels

> **labels**: [`Labels`](../../core/type-aliases/Labels.md)[]

Defined in: [adapter.ts:26](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L26)

***

### layers

> **layers**: [`Layer`](../../core/type-aliases/Layer.md)[]

Defined in: [adapter.ts:24](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L24)

***

### loadImage

> **loadImage**: (`image`, `options?`) => `Promise`\<[`ImageData`](../../core/interfaces/ImageData.md)\>

Defined in: [adapter.ts:37](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L37)

#### Parameters

##### image

[`Image`](../../core/type-aliases/Image.md)

##### options?

###### signal?

`AbortSignal`

#### Returns

`Promise`\<[`ImageData`](../../core/interfaces/ImageData.md)\>

***

### loadLabels

> **loadLabels**: (`labels`, `options?`) => `Promise`\<[`LabelsData`](../../core/interfaces/LabelsData.md)\>

Defined in: [adapter.ts:41](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L41)

#### Parameters

##### labels

[`Labels`](../../core/type-aliases/Labels.md)

##### options?

###### signal?

`AbortSignal`

#### Returns

`Promise`\<[`LabelsData`](../../core/interfaces/LabelsData.md)\>

***

### loadPoints

> **loadPoints**: (`points`, `options?`) => `Promise`\<[`PointsData`](../../core/interfaces/PointsData.md)\>

Defined in: [adapter.ts:45](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L45)

#### Parameters

##### points

[`Points`](../../core/type-aliases/Points.md)

##### options?

###### signal?

`AbortSignal`

#### Returns

`Promise`\<[`PointsData`](../../core/interfaces/PointsData.md)\>

***

### loadShapes

> **loadShapes**: (`shapes`, `options?`) => `Promise`\<[`ShapesData`](../../core/interfaces/ShapesData.md)\>

Defined in: [adapter.ts:49](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L49)

#### Parameters

##### shapes

[`Shapes`](../../core/type-aliases/Shapes.md)

##### options?

###### signal?

`AbortSignal`

#### Returns

`Promise`\<[`ShapesData`](../../core/interfaces/ShapesData.md)\>

***

### loadTable

> **loadTable**: (`table`, `options?`) => `Promise`\<[`TableData`](../../core/interfaces/TableData.md)\>

Defined in: [adapter.ts:53](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L53)

#### Parameters

##### table

[`Table`](../../core/type-aliases/Table.md)

##### options?

###### signal?

`AbortSignal`

#### Returns

`Promise`\<[`TableData`](../../core/interfaces/TableData.md)\>

***

### markerMaps

> **markerMaps**: [`GroupValueMap`](../../core/type-aliases/GroupValueMap.md)\<[`Marker`](../../core/type-aliases/Marker.md)\>[]

Defined in: [adapter.ts:30](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L30)

***

### opacityMaps

> **opacityMaps**: [`GroupValueMap`](../../core/type-aliases/GroupValueMap.md)\<`number`\>[]

Defined in: [adapter.ts:34](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L34)

***

### osOptions

> **osOptions**: [`OpenSeadragonOptions`](../../core/type-aliases/OpenSeadragonOptions.md)

Defined in: [adapter.ts:35](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L35)

***

### points

> **points**: [`Points`](../../core/type-aliases/Points.md)[]

Defined in: [adapter.ts:27](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L27)

***

### projectInstanceId

> **projectInstanceId**: `string`

Defined in: [adapter.ts:23](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L23)

***

### shapes

> **shapes**: [`Shapes`](../../core/type-aliases/Shapes.md)[]

Defined in: [adapter.ts:28](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L28)

***

### sizeMaps

> **sizeMaps**: [`GroupValueMap`](../../core/type-aliases/GroupValueMap.md)\<`number`\>[]

Defined in: [adapter.ts:31](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L31)

***

### tables

> **tables**: [`Table`](../../core/type-aliases/Table.md)[]

Defined in: [adapter.ts:29](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L29)

***

### visibilityMaps

> **visibilityMaps**: [`GroupValueMap`](../../core/type-aliases/GroupValueMap.md)\<`boolean`\>[]

Defined in: [adapter.ts:33](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-react/src/adapter.ts#L33)
