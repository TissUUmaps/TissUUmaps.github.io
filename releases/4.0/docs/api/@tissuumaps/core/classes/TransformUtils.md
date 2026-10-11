# Class: TransformUtils

Defined in: [utils/TransformUtils.ts:10](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/TransformUtils.ts#L10)

Utility methods for converting between [SimilarityTransform](../type-aliases/SimilarityTransform.md)
objects and `gl-matrix` mat3 matrices

## Constructors

### Constructor

> **new TransformUtils**(): `TransformUtils`

#### Returns

`TransformUtils`

## Methods

### compose()

> `static` **compose**(`tf`, `pivot?`): `mat3`

Defined in: [utils/TransformUtils.ts:66](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/TransformUtils.ts#L66)

Builds a 3×3 similarity matrix from a (partial) [SimilarityTransform](../type-aliases/SimilarityTransform.md)

Applies, in order: flip/scale, rotation, and translation.

If `pivot` is given, flip and rotation are applied about `pivot` (in the
source coordinates of the transform) instead of the origin, while scale
stays about the origin. The translation is then the position of the
scaled content before it is flipped and rotated about its (scaled)
pivot. This is the inverse of [decompose](#decompose) called with
the same pivot.

#### Parameters

##### tf

`Partial`\<[`SimilarityTransform`](../type-aliases/SimilarityTransform.md)\>

The transform components (all optional)

##### pivot?

Optional point about which flip and rotation are applied

###### x

`number`

###### y

`number`

#### Returns

`mat3`

The composed matrix

***

### decompose()

> `static` **decompose**(`m`, `pivot?`): [`SimilarityTransform`](../type-aliases/SimilarityTransform.md)

Defined in: [utils/TransformUtils.ts:30](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/TransformUtils.ts#L30)

Decomposes a 3×3 similarity matrix into a [SimilarityTransform](../type-aliases/SimilarityTransform.md)

Extracts flip, uniform scale, rotation (in degrees), and translation
from a column-major `gl-matrix` mat3. A negative 2D determinant
indicates a horizontal reflection.

If `pivot` is given, flip and rotation are expressed about `pivot`
(in the input coordinates of `m`) instead of the origin, while scale
stays about the origin. Flip, scale, and rotation are unaffected; only
the translation changes to `m(pivot) - scale * pivot`, i.e. the position
of the scaled content before it is flipped and rotated about its (scaled)
pivot. This matches viewers that place an image by its top-left corner
and then flip/rotate it about its center.

#### Parameters

##### m

`mat3`

The source matrix

##### pivot?

Optional point about which flip and rotation are expressed

###### x

`number`

###### y

`number`

#### Returns

[`SimilarityTransform`](../type-aliases/SimilarityTransform.md)

The decomposed transform

***

### transformBoundingBox()

> `static` **transformBoundingBox**(`rect`, `m`): [`Rect`](../type-aliases/Rect.md)

Defined in: [utils/TransformUtils.ts:103](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/TransformUtils.ts#L103)

Transforms an axis-aligned rectangle and returns the axis-aligned bounding box of the transformed corners

#### Parameters

##### rect

[`Rect`](../type-aliases/Rect.md)

The rectangle to transform

##### m

`mat3`

The transformation matrix to apply to the rectangle corners

#### Returns

[`Rect`](../type-aliases/Rect.md)

The axis-aligned bounding box of the transformed rectangle
