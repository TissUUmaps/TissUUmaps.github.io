# Class: SVGController

Defined in: [SVGController.ts:37](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/SVGController.ts#L37)

Controller for managing the drawing of SVG shapes

## Constructors

### Constructor

> **new SVGController**(`container`, `options?`): `SVGController`

Defined in: [SVGController.ts:80](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/SVGController.ts#L80)

Creates the transform node inside the given container and registers the
shape drawing event handlers

The viewport starts out as the unit square; [setViewport](#setviewport) is the only
way to change it.

#### Parameters

##### container

`SVGSVGElement`

The `<svg>` element to draw on (typically created by [createContainer](#createcontainer))

##### options?

Optional shape drawing event handlers

###### onShapeComplete?

(`shape`) => `void`

#### Returns

`SVGController`

## Properties

### container

> `readonly` **container**: `SVGSVGElement`

Defined in: [SVGController.ts:38](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/SVGController.ts#L38)

***

### shapeCompleteHandler?

> `readonly` `optional` **shapeCompleteHandler?**: (`shape`) => `void`

Defined in: [SVGController.ts:40](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/SVGController.ts#L40)

#### Parameters

##### shape

[`MultiPolygon`](../../core/type-aliases/MultiPolygon.md)

#### Returns

`void`

***

### transformNode

> `readonly` **transformNode**: `SVGGElement`

Defined in: [SVGController.ts:39](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/SVGController.ts#L39)

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [SVGController.ts:153](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/SVGController.ts#L153)

#### Returns

`void`

***

### resizeContainer()

> **resizeContainer**(`newContainerSize`): `boolean`

Defined in: [SVGController.ts:132](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/SVGController.ts#L132)

Resizes the SVG container to match the given screen-space dimensions,
accounting for `devicePixelRatio`

#### Parameters

##### newContainerSize

[`Dims`](../../core/type-aliases/Dims.md)

Desired container size in screen-space pixels

#### Returns

`boolean`

`true` if the container size actually changed, `false` otherwise

***

### setInteractionMode()

> **setInteractionMode**(`newInteractionMode`): `void`

Defined in: [SVGController.ts:115](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/SVGController.ts#L115)

Updates the interaction mode

#### Parameters

##### newInteractionMode

[`InteractionMode`](../../core/type-aliases/InteractionMode.md)

New interaction mode

#### Returns

`void`

***

### setViewport()

> **setViewport**(`viewport`): `boolean`

Defined in: [SVGController.ts:101](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/SVGController.ts#L101)

Updates the world-space viewport rectangle

#### Parameters

##### viewport

[`Rect`](../../core/type-aliases/Rect.md)

New viewport bounds in world coordinates

#### Returns

`boolean`

`true` if the viewport actually changed, `false` otherwise

***

### createContainer()

> `static` **createContainer**(): `SVGSVGElement`

Defined in: [SVGController.ts:60](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-render/src/SVGController.ts#L60)

Creates a positioned, full-size `<svg>` element for the SVG overlay

#### Returns

`SVGSVGElement`
