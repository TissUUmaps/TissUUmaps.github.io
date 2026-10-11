# Type Alias: Fmix32Config

> **Fmix32Config** = `object`

Defined in: [utils/HashUtils.ts:8](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/HashUtils.ts#L8)

Constants for the three-round xorshift-multiply finalizer [HashUtils.fmix32](../classes/HashUtils.md#fmix32)

The finalizer computes `h ^= h >>> s1; h *= m1; h ^= h >>> s2; h *= m2;
h ^= h >>> s3` in 32-bit arithmetic. Shifts must lie in `[1, 31]` and
multipliers must be odd for the finalizer to remain a bijection.

## Properties

### m1

> **m1**: `number`

Defined in: [utils/HashUtils.ts:12](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/HashUtils.ts#L12)

Odd 32-bit multiplier applied after the first xorshift

***

### m2

> **m2**: `number`

Defined in: [utils/HashUtils.ts:16](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/HashUtils.ts#L16)

Odd 32-bit multiplier applied after the second xorshift

***

### s1

> **s1**: `number`

Defined in: [utils/HashUtils.ts:10](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/HashUtils.ts#L10)

Right shift of the first xorshift round, in bits

***

### s2

> **s2**: `number`

Defined in: [utils/HashUtils.ts:14](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/HashUtils.ts#L14)

Right shift of the second xorshift round, in bits

***

### s3

> **s3**: `number`

Defined in: [utils/HashUtils.ts:18](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/HashUtils.ts#L18)

Right shift of the final xorshift round, in bits
