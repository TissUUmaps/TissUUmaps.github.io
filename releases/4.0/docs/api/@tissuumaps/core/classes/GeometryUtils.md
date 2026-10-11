# Class: GeometryUtils

Defined in: [utils/GeometryUtils.ts:4](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/GeometryUtils.ts#L4)

Utility methods for rectangle and dimension geometry

## Constructors

### Constructor

> **new GeometryUtils**(): `GeometryUtils`

#### Returns

`GeometryUtils`

## Methods

### dilate()

> `static` **dilate**(`rect`, `amount`): [`Rect`](../type-aliases/Rect.md)

Defined in: [utils/GeometryUtils.ts:51](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/GeometryUtils.ts#L51)

Grows a rectangle by the same amount on every side

#### Parameters

##### rect

[`Rect`](../type-aliases/Rect.md)

The rectangle to grow

##### amount

`number`

The amount to move every side outwards by; negative
amounts shrink the rectangle

#### Returns

[`Rect`](../type-aliases/Rect.md)

The grown rectangle

***

### dimsEquals()

> `static` **dimsEquals**(`a`, `b`): `boolean`

Defined in: [utils/GeometryUtils.ts:67](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/GeometryUtils.ts#L67)

Checks if two dimensions are equal by comparing their width and height properties

#### Parameters

##### a

[`Dims`](../type-aliases/Dims.md)

The first dimensions to compare

##### b

[`Dims`](../type-aliases/Dims.md)

The second dimensions to compare

#### Returns

`boolean`

`true` if the dimensions are equal, `false` otherwise

***

### intersection()

> `static` **intersection**(`a`, `b`): [`Rect`](../type-aliases/Rect.md) \| `null`

Defined in: [utils/GeometryUtils.ts:32](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/GeometryUtils.ts#L32)

Computes the intersection of two rectangles

#### Parameters

##### a

[`Rect`](../type-aliases/Rect.md)

The first rectangle

##### b

[`Rect`](../type-aliases/Rect.md)

The second rectangle

#### Returns

[`Rect`](../type-aliases/Rect.md) \| `null`

The rectangle covered by both, or `null` if they do not overlap
(touching edges do not count as overlapping)

***

### rectEquals()

> `static` **rectEquals**(`a`, `b`): `boolean`

Defined in: [utils/GeometryUtils.ts:78](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/GeometryUtils.ts#L78)

Checks if two rectangles are equal by comparing their x, y, width, and height properties

#### Parameters

##### a

[`Rect`](../type-aliases/Rect.md)

The first rectangle to compare

##### b

[`Rect`](../type-aliases/Rect.md)

The second rectangle to compare

#### Returns

`boolean`

`true` if the rectangles are equal, `false` otherwise

***

### union()

> `static` **union**(...`rects`): [`Rect`](../type-aliases/Rect.md) \| `null`

Defined in: [utils/GeometryUtils.ts:11](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/GeometryUtils.ts#L11)

Computes the union of multiple rectangles and returns the smallest rectangle that contains all of them

#### Parameters

##### rects

...[`Rect`](../type-aliases/Rect.md)[]

The rectangles to compute the union of

#### Returns

[`Rect`](../type-aliases/Rect.md) \| `null`

The smallest rectangle that contains all the input rectangles, or `null` if no rectangles are provided
