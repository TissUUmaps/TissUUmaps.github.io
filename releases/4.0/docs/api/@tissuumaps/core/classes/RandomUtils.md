# Class: RandomUtils

Defined in: [utils/RandomUtils.ts:26](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/RandomUtils.ts#L26)

Utility methods for seeded, non-cryptographic pseudo-random numbers

All methods except [seed](#seed) are deterministic: the same seed always
yields the same sequence, so callers can store a seed instead of the values
it produced (e.g. for reproducible random colors). None of the generators
are suitable for security-sensitive purposes.

[createUint32RNG](#createuint32rng) returns a generator that draws one 32-bit integer
per call; [toUnitFloat32](#tounitfloat32) maps such a draw to `[0, 1)`. The scalar
`rand*` methods take the first draw of a fresh generator, and the
`rand*Array` methods write consecutive draws of a fresh generator into a
typed array. Because they all consume the same stream,
`randUint32Array(n, seed)` starts with `randUint32(seed)`, and a longer
array has the shorter one as a prefix.

Every `rand*` method takes either a seed or a generator as `seedOrRng`. A
seed creates a fresh generator; passing a generator draws from it instead,
which allows continuing one stream across several calls.

The underlying generator, [splitmix32](#splitmix32), is exposed for callers that
need the plain algorithm regardless of the current default.

## Constructors

### Constructor

> **new RandomUtils**(): `RandomUtils`

#### Returns

`RandomUtils`

## Methods

### createUint32RNG()

> `static` **createUint32RNG**(`seed?`): () => `number`

Defined in: [utils/RandomUtils.ts:58](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/RandomUtils.ts#L58)

Creates a seeded generator of 32-bit integers

Currently [splitmix32](#splitmix32). Each call to the returned function yields
the next value of the stream.

#### Parameters

##### seed?

`number` = `0`

The seed; only its lower 32 bits are used

#### Returns

A function that returns the next non-negative 32-bit integer

() => `number`

***

### randUint32()

> `static` **randUint32**(`seedOrRng?`): `number`

Defined in: [utils/RandomUtils.ts:74](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/RandomUtils.ts#L74)

Draws a 32-bit integer

Given a seed, returns the first value of a fresh generator for it, i.e.
`createUint32RNG(seed)()`. Note that this is a pure function of the seed:
calling it repeatedly with the same seed returns the same value. Given a
generator, returns its next value instead.

#### Parameters

##### seedOrRng?

`number` \| (() => `number`)

The seed (only its lower 32 bits are used), or the
generator to draw from

#### Returns

`number`

A non-negative 32-bit integer

***

### randUint32Array()

> `static` **randUint32Array**(`n`, `seedOrRng?`, `array?`): `Uint32Array`

Defined in: [utils/RandomUtils.ts:95](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/RandomUtils.ts#L95)

Draws consecutive 32-bit integers into an array

Given a seed, values come from a fresh generator for it, so the first
element equals `randUint32(seed)`. Given a generator, its next `n` values
are drawn instead, e.g. to continue one stream across several arrays. By
default, a new array of length `n` is allocated; pass `array` to fill the
first `n` elements of an existing array in place instead, leaving any
further elements untouched.

#### Parameters

##### n

`number`

The number of values to draw, a non-negative integer

##### seedOrRng?

`number` \| (() => `number`)

The seed (only its lower 32 bits are used), or the
generator to draw from

##### array?

`Uint32Array` = `...`

The array to fill; defaults to `new Uint32Array(n)`

#### Returns

`Uint32Array`

The filled array, i.e. `array` if given

#### Throws

RangeError if `array` is given and holds fewer than `n` elements

***

### randUnitFloat32()

> `static` **randUnitFloat32**(`seedOrRng?`): `number`

Defined in: [utils/RandomUtils.ts:137](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/RandomUtils.ts#L137)

Draws a float in `[0, 1)` that is exact in `float32`

Equivalent to `toUnitFloat32(randUint32(seedOrRng))`. Given a seed, this
is a pure function of it: calling it repeatedly with the same seed returns
the same value. Given a generator, its next value is drawn instead.

#### Parameters

##### seedOrRng?

`number` \| (() => `number`)

The seed (only its lower 32 bits are used), or the
generator to draw from

#### Returns

`number`

A float in `[0, 1)`, exact in `float32`

***

### randUnitFloat32Array()

> `static` **randUnitFloat32Array**(`n`, `seedOrRng?`, `array?`): `Float32Array`

Defined in: [utils/RandomUtils.ts:161](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/RandomUtils.ts#L161)

Draws consecutive floats in `[0, 1)` into an array

Each element is `toUnitFloat32` of the corresponding element that
[randUint32Array](#randuint32array) would produce for the same arguments, and is
stored in the `Float32Array` without rounding. Given a seed, values come
from a fresh generator for it, so the first element equals
`randUnitFloat32(seed)`. Given a generator, its next `n` values are drawn
instead, e.g. to continue one stream across several arrays. By default, a
new array of length `n` is allocated; pass `array` to fill the first `n`
elements of an existing array in place instead, leaving any further
elements untouched.

#### Parameters

##### n

`number`

The number of values to draw, a non-negative integer

##### seedOrRng?

`number` \| (() => `number`)

The seed (only its lower 32 bits are used), or the
generator to draw from

##### array?

`Float32Array` = `...`

The array to fill; defaults to `new Float32Array(n)`

#### Returns

`Float32Array`

The filled array, i.e. `array` if given

#### Throws

RangeError if `array` is given and holds fewer than `n` elements

***

### seed()

> `static` **seed**(): `number`

Defined in: [utils/RandomUtils.ts:45](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/RandomUtils.ts#L45)

Draws a random seed from `Math.random()`

This is the one non-deterministic method of this class; use it to obtain
a seed for the other methods when reproducibility is not required, e.g.
for a "shuffle" action. The result is stored rather than the values it
produces, so the draw can be reproduced later.

#### Returns

`number`

A uniformly distributed non-negative 32-bit integer

***

### splitmix32()

> `static` **splitmix32**(`seed?`): () => `number`

Defined in: [utils/RandomUtils.ts:190](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/RandomUtils.ts#L190)

Creates a SplitMix32 generator

The state is a 32-bit counter advanced by the golden-ratio constant
`0x9e3779b9` (a Weyl sequence); each output is the state passed through
[HashUtils.fmix32](HashUtils.md#fmix32) with the SplitMix32 constants. Since the
finalizer is a bijection, the stream has a period of `2^32` and visits
every 32-bit value exactly once per period. All seeds walk the same
cycle; seeds that differ in their lower 32 bits start at different points.

#### Parameters

##### seed?

`number` = `0`

The seed; only its lower 32 bits are used

#### Returns

A function that returns the next non-negative 32-bit integer

() => `number`

#### See

https://github.com/bryc/code/blob/master/jshash/PRNGs.md#splitmix32

***

### toUnitFloat32()

> `static` **toUnitFloat32**(`uint32`): `number`

Defined in: [utils/RandomUtils.ts:121](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/RandomUtils.ts#L121)

Maps a 32-bit integer to a float in `[0, 1)` that is exact in `float32`

Uses the upper 24 bits of the integer, so the result is a multiple of
`2^-24` and survives storage in a `Float32Array` without rounding. The
largest possible result is `1 - 2^-24`; the lower 8 bits of the input are
discarded.

#### Parameters

##### uint32

`number`

The integer to map; only its lower 32 bits are used

#### Returns

`number`

A float in `[0, 1)`
