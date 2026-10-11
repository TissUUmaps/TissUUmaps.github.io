# Class: MathUtils

Defined in: [utils/MathUtils.ts:9](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/MathUtils.ts#L9)

Utility methods for numeric clamping, remapping, alignment, rounding,
medians, histograms and counts

## Constructors

### Constructor

> **new MathUtils**(): `MathUtils`

#### Returns

`MathUtils`

## Methods

### align()

> `static` **align**(`n`, `m`): `number`

Defined in: [utils/MathUtils.ts:59](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/MathUtils.ts#L59)

Aligns a positive number `n` to the next multiple of `m`

If `n` is already a multiple of `m`, returns `n`.
Otherwise, returns the smallest multiple of `m` that is greater than `n`.

#### Parameters

##### n

`number`

The non-negative number to align

##### m

`number`

The strictly positive multiple to align to

#### Returns

`number`

The aligned number

#### Throws

Error if `n` is negative, or if `m` is not strictly positive

***

### clamp()

> `static` **clamp**(`value`, `min`, `max`): `number`

Defined in: [utils/MathUtils.ts:18](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/MathUtils.ts#L18)

Clamps a value to the range `[min, max]`

#### Parameters

##### value

`number`

The value to clamp

##### min

`number`

Lower bound

##### max

`number`

Upper bound

#### Returns

`number`

The clamped value

***

### computeHistogram()

> `static` **computeHistogram**(`values`, `range`, `options?`): `Promise`\<\{ `hist`: `number`[]; `range`: \[`number`, `number`\]; \}\>

Defined in: [utils/MathUtils.ts:205](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/MathUtils.ts#L205)

Computes the histogram of numeric values over a given value range

`hist[i]` counts the values that are closest to bin `i`, with bins spread
evenly over `range`: bin `0` maps to the range's lower bound, the last bin
to its upper bound, and each bin in between to `vmin + i / (bins - 1) *
(vmax - vmin)`. Values outside the range are counted in the nearest edge
bin, non-finite values (`NaN`, infinities) are ignored. If the range is
degenerate (upper bound not above lower bound), or if `bins` is `1`, all
values fall into bin `0`.

If `sample` is positive and smaller than the number of values, the
histogram is estimated from `sample` values drawn uniformly with
replacement, using the seeded generator of
[RandomUtils.createUint32RNG](RandomUtils.md#createuint32rng); the counts then sum to `sample`
(minus ignored non-finite values) rather than to the number of values.
Sampling is deterministic for a given `seed`. Otherwise, every value is
counted exactly once.

The values are traversed on the main thread, yielding to the event loop
periodically so the UI stays responsive for large arrays (see
[AsyncUtils.forEach](AsyncUtils.md#foreach)). Aborting the signal rejects with its reason.

#### Parameters

##### values

[`TypedArray`](../type-aliases/TypedArray.md)

The values to compute the histogram of

##### range

\[`number`, `number`\]

The value range the bins span, as `[min, max]`

##### options?

Optional abort signal (`signal`), number of bins
  (`bins`, a positive integer, defaults to `1024`), number of values to
  sample (`sample`; omitting it, `0`, or at least the number of values
  disables sampling), and seed for sampling (`seed`, defaults to `0`)

###### bins?

`number`

###### sample?

`number`

###### seed?

`number`

###### signal?

`AbortSignal`

#### Returns

`Promise`\<\{ `hist`: `number`[]; `range`: \[`number`, `number`\]; \}\>

A promise that resolves to the histogram, as bin counts (`hist`)
and the given value range (`range`)

***

### computeRange()

> `static` **computeRange**(`values`, `options?`): `Promise`\<\[`number`, `number`\]\>

Defined in: [utils/MathUtils.ts:148](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/MathUtils.ts#L148)

Computes the range of numeric values, as their minimum and maximum

Non-finite values (`NaN`, infinities) are ignored. If no finite value is
found (e.g. for empty arrays), the empty range `[Infinity, -Infinity]` is
returned; callers can detect it by checking that the lower bound exceeds
the upper bound.

The values are traversed on the main thread, yielding to the event loop
periodically so the UI stays responsive for large arrays (see
[AsyncUtils.forEach](AsyncUtils.md#foreach)). Aborting the signal rejects with its reason.

#### Parameters

##### values

[`TypedArray`](../type-aliases/TypedArray.md)

The values to compute the range of

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<\[`number`, `number`\]\>

A promise that resolves to the range, as `[min, max]`

***

### computeUniqueValueCounts()

> `static` **computeUniqueValueCounts**\<`T`\>(`values`, `options?`): `Promise`\<`Map`\<`T`, `number`\>\>

Defined in: [utils/MathUtils.ts:298](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/MathUtils.ts#L298)

Counts the number of occurrences of every distinct value

The counts are keyed by value, in the order the values first occur.
Distinctness follows `Map` key equality, i.e. `NaN` counts as one value
and `0` and `-0` as the same one.

The values are traversed on the main thread, yielding to the event loop
periodically so the UI stays responsive for large arrays (see
[AsyncUtils.forEach](AsyncUtils.md#foreach)). Aborting the signal rejects with its reason.

#### Type Parameters

##### T

`T`

Element type of the values

#### Parameters

##### values

[`TypedArrayOrArray`](../type-aliases/TypedArrayOrArray.md)\<`T`\>

The values to count

##### options?

Optional abort signal

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`Map`\<`T`, `number`\>\>

A promise that resolves to the count of every distinct value, in
the order the values first appear

***

### computeWeightedMedian()

> `static` **computeWeightedMedian**(`values`, `weights`): `number`

Defined in: [utils/MathUtils.ts:104](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/MathUtils.ts#L104)

Computes the weighted median of numeric values

Returns the smallest value whose cumulative weight, in ascending order of
the values, reaches half the total weight. If the total weight is zero,
all values are weighted equally instead.

#### Parameters

##### values

[`TypedArray`](../type-aliases/TypedArray.md)

The non-empty values to compute the weighted median of

##### weights

[`TypedArray`](../type-aliases/TypedArray.md)

The non-negative weight of each value

#### Returns

`number`

The weighted median

#### Throws

Error if `values` is empty, or if `weights` has a different length

***

### rebinHistogram()

> `static` **rebinHistogram**(`histogram`, `range`, `bins`): `object`

Defined in: [utils/MathUtils.ts:258](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/MathUtils.ts#L258)

Redistributes the counts of a histogram over equal bins of another range

The new bins split `range` into `bins` equal intervals, the upper bound
counting in the last one. Each bin of `histogram` is counted in the new bin
that its value falls into (see [computeHistogram](#computehistogram)), or dropped if
its value is outside `range`. If `range` is degenerate (upper bound not
above lower bound), all counts fall into bin `0`.

#### Parameters

##### histogram

The histogram to redistribute, as bin counts (`hist`)
and the value range they span (`range`)

###### hist

`number`[]

###### range

\[`number`, `number`\]

##### range

\[`number`, `number`\]

The value range the new bins span, as `[min, max]`

##### bins

`number`

The number of new bins, a positive integer

#### Returns

`object`

The redistributed histogram, as the counts of the new bins
(`hist`) and the given value range (`range`)

##### hist

> **hist**: `number`[]

##### range

> **range**: \[`number`, `number`\]

***

### remap()

> `static` **remap**(`value`, `from`, `to`): `number`

Defined in: [utils/MathUtils.ts:35](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/MathUtils.ts#L35)

Linearly maps a value from one range to another

Values outside `from` are extrapolated, not clamped; clamp at the call
site where the domain is known. Swapping `from` and `to` yields the
inverse mapping.

#### Parameters

##### value

`number`

The value to map

##### from

\[`number`, `number`\]

The source range, as `[min, max]`, with `min !== max`

##### to

\[`number`, `number`\]

The target range, as `[min, max]`

#### Returns

`number`

The mapped value

#### Throws

Error if `from` is degenerate

***

### roundToStepDecimals()

> `static` **roundToStepDecimals**(`value`, `step`): `number`

Defined in: [utils/MathUtils.ts:84](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/MathUtils.ts#L84)

Rounds a value to the decimal places that a step needs

Steps of `1` or more round to whole numbers, `0.1` to one decimal place,
`0.05` to two. Stepping through a range adds floating-point noise that this
rounds away, e.g. `0.30000000000000004` becomes `0.3` for a step of `0.1`.

#### Parameters

##### value

`number`

The value to round

##### step

`number`

The strictly positive step

#### Returns

`number`

The rounded value

#### Throws

Error if `step` is not strictly positive
