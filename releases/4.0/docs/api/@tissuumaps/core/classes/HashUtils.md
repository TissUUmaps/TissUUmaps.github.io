# Class: HashUtils

Defined in: [utils/HashUtils.ts:34](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/HashUtils.ts#L34)

Utility methods for non-cryptographic hashing

Hashing a string is split into two steps: [hashRaw](#hashraw) reduces the
string to a 32-bit integer, and [mix](#mix) scrambles that integer together
with a seed. Callers that hash the same key repeatedly with different seeds
can cache the raw hash and only re-run the cheap mixing step. [hash](#hash)
does both in one call.

The underlying primitives, [fnv1a](#fnv1a) and [fmix32](#fmix32), are exposed
for callers that need the plain algorithms without the seeding convention
of the methods above.

## Constructors

### Constructor

> **new HashUtils**(): `HashUtils`

#### Returns

`HashUtils`

## Methods

### fmix32()

> `static` **fmix32**(`h`, `c?`): `number`

Defined in: [utils/HashUtils.ts:121](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/HashUtils.ts#L121)

Applies a three-round xorshift-multiply finalizer; defaults to MurmurHash3's constants

The finalizer is a bijective avalanche step: every input bit affects
every output bit, and distinct 32-bit inputs map to distinct outputs.
Note that `fmix32(0)` is `0`.

#### Parameters

##### h

`number`

The integer to finalize; only its lower 32 bits are used

##### c?

[`Fmix32Config`](../type-aliases/Fmix32Config.md) = `HashUtils._murmur3Config`

The constants to use; defaults are the MurmurHash3 finalizer constants

#### Returns

`number`

The finalized value, as a non-negative 32-bit integer

#### See

https://github.com/aappleby/smhasher/blob/master/src/MurmurHash3.cpp

***

### fnv1a()

> `static` **fnv1a**(`str`): `number`

Defined in: [utils/HashUtils.ts:101](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/HashUtils.ts#L101)

Computes the 32-bit FNV-1a hash of a string

Iterates over the UTF-16 code units of the string, XOR-ing each into the
running hash and multiplying by the FNV prime. The hash of an empty string
is the FNV offset basis (`0x811c9dc5`). Code units above `0xff` are XOR-ed
in whole rather than byte-wise, so results for non-Latin-1 text differ
from byte-oriented FNV-1a implementations.

#### Parameters

##### str

`string`

The string to hash

#### Returns

`number`

The hash, as a non-negative 32-bit integer

#### See

http://www.isthe.com/chongo/tech/comp/fnv/

***

### hash()

> `static` **hash**(`key`, `seed?`): `number`

Defined in: [utils/HashUtils.ts:84](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/HashUtils.ts#L84)

Computes a seeded 32-bit hash of a string

Equivalent to `mix(hashRaw(key), seed)`.

#### Parameters

##### key

`string`

The string to hash; hashed by UTF-16 code unit

##### seed?

`number` = `0`

The seed; only its lower 32 bits are used

#### Returns

`number`

The hash, as a non-negative 32-bit integer

***

### hashRaw()

> `static` **hashRaw**(`key`): `number`

Defined in: [utils/HashUtils.ts:54](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/HashUtils.ts#L54)

Computes the raw hash of a string

Currently [fnv1a](#fnv1a). The raw hash is fast and deterministic, but only
weakly mixed: similar keys yield correlated hashes, and the hash of an
empty string is non-zero. Pass the result through [mix](#mix) before
using it to select from a small range.

#### Parameters

##### key

`string`

The string to hash; hashed by UTF-16 code unit

#### Returns

`number`

The raw hash, as a non-negative 32-bit integer

***

### mix()

> `static` **mix**(`h`, `seed?`): `number`

Defined in: [utils/HashUtils.ts:71](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/HashUtils.ts#L71)

Scrambles a 32-bit integer with a seed

The seed is XOR-ed into the value, which is then passed through
[fmix32](#fmix32). Consecutive inputs map to unrelated outputs, so the result
is suitable for scattering sequential IDs or raw string hashes over a
small range, e.g. `mix(id, seed) % palette.length`. Different seeds yield
different outputs for the same input.

#### Parameters

##### h

`number`

The integer to mix; only its lower 32 bits are used

##### seed?

`number` = `0`

The seed; only its lower 32 bits are used

#### Returns

`number`

The mixed value, as a non-negative 32-bit integer
