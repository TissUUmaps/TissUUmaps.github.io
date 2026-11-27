# Type Alias: TypedArrayOrArray\<T\>

> **TypedArrayOrArray**\<`T`\> = \[`T`\] *extends* \[`number`\] ? [`TypedArray`](TypedArray.md) : `unknown` *extends* `T` ? [`TypedArray`](TypedArray.md) \| `T`[] : `T`[]

Defined in: [types/arrays.ts:38](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/arrays.ts#L38)

The array types that can hold values of type `T`

Numbers are held by numeric typed arrays only, anything else by a plain
array. For an unconstrained `T`, both are possible.

## Type Parameters

### T

`T`
