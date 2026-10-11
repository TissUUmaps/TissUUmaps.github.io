# Type Alias: TypedArrayOrArray\<T\>

> **TypedArrayOrArray**\<`T`\> = \[`T`\] *extends* \[`number`\] ? [`TypedArray`](TypedArray.md) : `unknown` *extends* `T` ? [`TypedArray`](TypedArray.md) \| `T`[] : `T`[]

Defined in: [types/arrays.ts:38](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/arrays.ts#L38)

The array types that can hold values of type `T`

Numbers are held by numeric typed arrays only, anything else by a plain
array. For an unconstrained `T`, both are possible.

## Type Parameters

### T

`T`
