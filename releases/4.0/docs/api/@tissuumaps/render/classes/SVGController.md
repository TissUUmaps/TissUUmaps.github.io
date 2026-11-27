# Class: SVGController

Defined in: [SVGController.ts:37](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-render/src/SVGController.ts#L37)

Controller for managing the drawing of SVG shapes

## Constructors

### Constructor

> **new SVGController**(`container`, `options?`): `SVGController`

Defined in: [SVGController.ts:81](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-render/src/SVGController.ts#L81)

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

Defined in: [SVGController.ts:38](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-render/src/SVGController.ts#L38)

***

### shapeCompleteHandler?

> `readonly` `optional` **shapeCompleteHandler?**: (`shape`) => `void`

Defined in: [SVGController.ts:40](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-render/src/SVGController.ts#L40)

#### Parameters

##### shape

[`MultiPolygon`](../../core/type-aliases/MultiPolygon.md)

#### Returns

`void`

***

### transformNode

> `readonly` **transformNode**: `SVGGElement`

Defined in: [SVGController.ts:39](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-render/src/SVGController.ts#L39)

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [SVGController.ts:160](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-render/src/SVGController.ts#L160)

#### Returns

`void`

***

### resizeContainer()

> **resizeContainer**(`newContainerSize`): `boolean`

Defined in: [SVGController.ts:139](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-render/src/SVGController.ts#L139)

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

Defined in: [SVGController.ts:116](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-render/src/SVGController.ts#L116)

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

Defined in: [SVGController.ts:102](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-render/src/SVGController.ts#L102)

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

Defined in: [SVGController.ts:61](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-render/src/SVGController.ts#L61)

Creates a positioned, full-size `<svg>` element for the SVG overlay

#### Returns

`SVGSVGElement`
