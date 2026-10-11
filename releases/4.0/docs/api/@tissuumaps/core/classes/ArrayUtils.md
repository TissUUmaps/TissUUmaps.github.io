# Class: ArrayUtils

Defined in: [utils/ArrayUtils.ts:7](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ArrayUtils.ts#L7)

Utility methods for converting arrays to the types the storage API holds

## Constructors

### Constructor

> **new ArrayUtils**(): `ArrayUtils`

#### Returns

`ArrayUtils`

## Methods

### parseSafeInts()

> `static` **parseSafeInts**(`values`): `Float64Array`

Defined in: [utils/ArrayUtils.ts:76](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ArrayUtils.ts#L76)

Converts 64-bit integers to 64-bit floats

#### Parameters

##### values

`ArrayLike`\<`bigint`\>

The integers, as read from a file (e.g. a `BigInt64Array`)

#### Returns

`Float64Array`

The integers as floats

#### Throws

Error if an integer is outside the safe integer range

***

### toIDArray()

> `static` **toIDArray**(`values`): [`IDArray`](../type-aliases/IDArray.md)

Defined in: [utils/ArrayUtils.ts:24](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ArrayUtils.ts#L24)

Converts item IDs to an `IDArray`

Integer typed arrays, string arrays and 64-bit float arrays holding safe
integers are returned as they are. Any other array has to hold either
strings only, which are copied into a string array, or safe integers only,
which are copied into 64-bit floats. Numeric strings are not parsed:
whether `"12"` is an ID or a number is up to the data provider. An empty
array yields an empty unsigned 32-bit integer array.

#### Parameters

##### values

`ArrayLike`\<`unknown`\>

The IDs to convert

#### Returns

[`IDArray`](../type-aliases/IDArray.md)

The IDs as an integer typed array, a 64-bit float array or a
string array

#### Throws

Error if a value is neither a string nor a safe integer, or if
strings and integers are mixed
