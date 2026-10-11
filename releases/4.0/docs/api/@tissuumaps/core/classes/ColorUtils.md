# Class: ColorUtils

Defined in: [utils/ColorUtils.ts:8](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ColorUtils.ts#L8)

Utility methods for color parsing, packing, and conversion

## Constructors

### Constructor

> **new ColorUtils**(): `ColorUtils`

#### Returns

`ColorUtils`

## Methods

### equals()

> `static` **equals**(`a`, `b`): `boolean`

Defined in: [utils/ColorUtils.ts:172](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ColorUtils.ts#L172)

Checks whether two colors have identical RGB components

Components are compared exactly, without rounding or tolerance.

#### Parameters

##### a

[`Color`](../type-aliases/Color.md)

The first color

##### b

[`Color`](../type-aliases/Color.md)

The second color

#### Returns

`boolean`

`true` if all three components are equal, `false` otherwise

***

### fromHex()

> `static` **fromHex**(`hex`): [`Color`](../type-aliases/Color.md)

Defined in: [utils/ColorUtils.ts:140](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ColorUtils.ts#L140)

Parses a hex color string into a [Color](../type-aliases/Color.md)

#### Parameters

##### hex

`string`

A `#RRGGBB` hex string

#### Returns

[`Color`](../type-aliases/Color.md)

The parsed color

#### Throws

Error if the string is not a valid 6-digit hex color

***

### fromHSB()

> `static` **fromHSB**(`hue`, `saturation`, `brightness`): [`Color`](../type-aliases/Color.md)

Defined in: [utils/ColorUtils.ts:183](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ColorUtils.ts#L183)

Converts an HSB (HSV) color to RGB, following Java's `Color.HSBtoRGB`

#### Parameters

##### hue

`number`

The hue, in the range [0, 1) (values outside wrap around)

##### saturation

`number`

The saturation, in the range [0, 1]

##### brightness

`number`

The brightness, in the range [0, 1]

#### Returns

[`Color`](../type-aliases/Color.md)

The RGB color, with integer components in the range [0, 255]

***

### packColor()

> `static` **packColor**(`color`): `number`

Defined in: [utils/ColorUtils.ts:84](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ColorUtils.ts#L84)

Packs an RGB color into a single 24-bit integer, `0xBBGGRR`

The red component occupies the lowest byte, so that the integer, when
stored in host byte order on a little-endian host, matches the R, G, B byte
order of a canvas `ImageData` buffer.

#### Parameters

##### color

[`Color`](../type-aliases/Color.md)

The color to pack

#### Returns

`number`

The packed color, `0xBBGGRR`

***

### packOpacity()

> `static` **packOpacity**(`opacity`): `number`

Defined in: [utils/ColorUtils.ts:105](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ColorUtils.ts#L105)

Packs an opacity into the form that [withAlpha](#withalpha) folds into a color

#### Parameters

##### opacity

`number`

The opacity, in the range [0, 1]; values outside are clamped

#### Returns

`number`

The opacity as an integer in the range [0, 255]

***

### packVisibility()

> `static` **packVisibility**(`visibility`): `number`

Defined in: [utils/ColorUtils.ts:95](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ColorUtils.ts#L95)

Packs a visibility into the form that [withAlpha](#withalpha) folds into a color

#### Parameters

##### visibility

`boolean`

The visibility

#### Returns

`number`

`1` if visible, `0` if not

***

### parsePalette()

> `static` **parsePalette**(`str`, `options?`): [`Color`](../type-aliases/Color.md)[]

Defined in: [utils/ColorUtils.ts:21](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ColorUtils.ts#L21)

Parses a text-based color palette into an array of colors

Each non-empty line is expected to contain three numeric components
separated by `sep`, scaled from `[0, maxValue]` to `[0, 255]`.

#### Parameters

##### str

`string`

Multi-line palette string

##### options?

Component separator (default `" "`) and maximum input
value per component (default `1`)

###### maxValue?

`number`

###### sep?

`string`

#### Returns

[`Color`](../type-aliases/Color.md)[]

The parsed colors, in the order of the palette's lines

#### Throws

Error if a non-empty line does not hold exactly three components

***

### sampleColorScheme()

> `static` **sampleColorScheme**(`colorScheme`, `n`): [`Color`](../type-aliases/Color.md)[]

Defined in: [utils/ColorUtils.ts:54](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ColorUtils.ts#L54)

Samples a continuous color scheme into an array of colors

The scheme is evaluated at `n` evenly spaced positions covering the whole
`[0, 1]` range, both ends included.

#### Parameters

##### colorScheme

(`t`) => `string`

Maps a position within `[0, 1]` to a CSS color string

##### n

`number`

Number of colors to sample, an integer of at least two

#### Returns

[`Color`](../type-aliases/Color.md)[]

The sampled colors, in the order of the scheme

#### Throws

Error if `n` is not an integer of at least two, or if the scheme
yields a color string that cannot be parsed

***

### toHex()

> `static` **toHex**(`color`): `string`

Defined in: [utils/ColorUtils.ts:156](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ColorUtils.ts#L156)

Formats a [Color](../type-aliases/Color.md) as a `#RRGGBB` hex string

#### Parameters

##### color

[`Color`](../type-aliases/Color.md)

The color to format

#### Returns

`string`

The formatted hex string

***

### withAlpha()

> `static` **withAlpha**(`packedColor`, `packedVisibility`, `packedOpacity`): `number`

Defined in: [utils/ColorUtils.ts:121](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ColorUtils.ts#L121)

Folds a visibility and an opacity into the alpha channel of a packed color

Combines the lower 24 bits of `color` (see [packColor](#packcolor)) with
`opacity` as alpha if `visibility` is non-zero, and with zero alpha
otherwise, into a packed 32-bit RGBA color, `0xAABBGGRR`.

#### Parameters

##### packedColor

`number`

The packed color, `0xBBGGRR`; any higher bits are discarded

##### packedVisibility

`number`

The visibility, larger than `0` for visible

##### packedOpacity

`number`

The opacity, in the range [0, 255]

#### Returns

`number`

The packed RGBA color, `0xAABBGGRR`, as an unsigned 32-bit integer
