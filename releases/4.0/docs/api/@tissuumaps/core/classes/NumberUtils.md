# Class: NumberUtils

Defined in: [utils/NumberUtils.ts:9](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/NumberUtils.ts#L9)

Utility methods for coercing untrusted values to numbers

Numbers, bigints and non-blank strings are accepted; everything else, and
everything that does not coerce to a finite number, is rejected. The
`tryParse*` methods report rejection by returning `undefined`, the `parse*`
methods by throwing.

## Constructors

### Constructor

> **new NumberUtils**(): `NumberUtils`

#### Returns

`NumberUtils`

## Methods

### parseFinite()

> `static` **parseFinite**(`value`): `number`

Defined in: [utils/NumberUtils.ts:20](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/NumberUtils.ts#L20)

Parses a value as a finite number

#### Parameters

##### value

`unknown`

The value to parse

#### Returns

`number`

The parsed number

#### Throws

Error if the value is not a finite number

***

### parseSafeInt()

> `static` **parseSafeInt**(`value`): `number`

Defined in: [utils/NumberUtils.ts:35](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/NumberUtils.ts#L35)

Parses a value as a safe integer

#### Parameters

##### value

`unknown`

The value to parse

#### Returns

`number`

The parsed integer

#### Throws

Error if the value is not a safe integer

***

### tryParseFinite()

> `static` **tryParseFinite**(`value`, `options?`): `number` \| `undefined`

Defined in: [utils/NumberUtils.ts:55](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/NumberUtils.ts#L55)

Parses a value as a finite number, without throwing

A bigint outside of the safe integer range loses precision when converted:
by default this is only warned about, `requireSafeBigInt` rejects it.

#### Parameters

##### value

`unknown`

The value to parse

##### options?

Set `requireSafeBigInt` to reject bigints that are outside
of the safe integer range, rather than converting them with a warning

###### requireSafeBigInt?

`boolean`

#### Returns

`number` \| `undefined`

The parsed number, or `undefined` if the value is not a finite
number

***

### tryParseSafeInt()

> `static` **tryParseSafeInt**(`value`): `number` \| `undefined`

Defined in: [utils/NumberUtils.ts:88](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/NumberUtils.ts#L88)

Parses a value as a safe integer, without throwing

#### Parameters

##### value

`unknown`

The value to parse

#### Returns

`number` \| `undefined`

The parsed integer, or `undefined` if the value is not a safe
integer
