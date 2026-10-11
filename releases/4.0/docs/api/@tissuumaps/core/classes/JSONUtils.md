# Class: JSONUtils

Defined in: [utils/JSONUtils.ts:9](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/JSONUtils.ts#L9)

Utility methods for JSON serialization with support for non-finite numbers

`NaN`, `Infinity` and `-Infinity` are encoded as the sentinel strings
`"__NaN__"`, `"__PositiveInfinity__"` and `"__NegativeInfinity__"`, which
[JSONUtils.parse](#parse) decodes back into numbers. Strings that happen to
equal a sentinel are therefore not round-trip safe.

## Constructors

### Constructor

> **new JSONUtils**(): `JSONUtils`

#### Returns

`JSONUtils`

## Methods

### parse()

> `static` **parse**(`text`): `unknown`

Defined in: [utils/JSONUtils.ts:66](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/JSONUtils.ts#L66)

Parses JSON, decoding the sentinel strings written by
[JSONUtils.stringify](#stringify) back into `NaN`, `Infinity` and `-Infinity`

#### Parameters

##### text

`string`

The JSON text to parse

#### Returns

`unknown`

#### Throws

If the text is not valid JSON

***

### stringify()

> `static` **stringify**(`value`, `options?`): `string`

Defined in: [utils/JSONUtils.ts:30](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/JSONUtils.ts#L30)

Serializes a value to JSON, encoding non-finite numbers as sentinel strings

Behaves like `JSON.stringify` without indentation: `toJSON` methods are
honored, and object properties that cannot be represented (`undefined`,
functions, symbols) are omitted.

It differs from `JSON.stringify` where the latter is lossy: such a value
throws instead of yielding `undefined` when it is the top-level value, and
throws instead of being written as `null` when it is an array element. It
also does not detect circular references, which overflow the stack rather
than throwing a `TypeError`.

#### Parameters

##### value

`unknown`

The value to serialize

##### options?

Optional `stable` flag, sorting object keys alphabetically
  so that the output is independent of property insertion order
  (default `false`)

###### stable?

`boolean`

#### Returns

`string`

#### Throws

If the value itself, or any array element it contains, cannot be
  represented in JSON
