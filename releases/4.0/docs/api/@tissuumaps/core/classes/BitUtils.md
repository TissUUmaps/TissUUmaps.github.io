# Class: BitUtils

Defined in: [utils/BitUtils.ts:2](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/BitUtils.ts#L2)

Utility methods for bitwise operations that yield unsigned 32-bit results

## Constructors

### Constructor

> **new BitUtils**(): `BitUtils`

#### Returns

`BitUtils`

## Methods

### safeAnd()

> `static` **safeAnd**(`a`, `b`): `number`

Defined in: [utils/BitUtils.ts:10](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/BitUtils.ts#L10)

Performs a bitwise AND, returning an unsigned 32-bit result

#### Parameters

##### a

`number`

First operand

##### b

`number`

Second operand

#### Returns

`number`

The result, as an unsigned 32-bit integer

***

### safeLeftShift()

> `static` **safeLeftShift**(`value`, `shift`): `number`

Defined in: [utils/BitUtils.ts:65](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/BitUtils.ts#L65)

Performs a left shift, returning an unsigned 32-bit result

#### Parameters

##### value

`number`

The value to shift

##### shift

`number`

Number of bit positions to shift

#### Returns

`number`

The result, as an unsigned 32-bit integer

***

### safeNot()

> `static` **safeNot**(`a`): `number`

Defined in: [utils/BitUtils.ts:51](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/BitUtils.ts#L51)

Performs a bitwise NOT, returning an unsigned 32-bit result

#### Parameters

##### a

`number`

The operand

#### Returns

`number`

The result, as an unsigned 32-bit integer

***

### safeOr()

> `static` **safeOr**(`a`, `b`): `number`

Defined in: [utils/BitUtils.ts:24](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/BitUtils.ts#L24)

Performs a bitwise OR, returning an unsigned 32-bit result

#### Parameters

##### a

`number`

First operand

##### b

`number`

Second operand

#### Returns

`number`

The result, as an unsigned 32-bit integer

***

### safeRightShift()

> `static` **safeRightShift**(`value`, `shift`): `number`

Defined in: [utils/BitUtils.ts:79](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/BitUtils.ts#L79)

Performs an unsigned right shift

#### Parameters

##### value

`number`

The value to shift

##### shift

`number`

Number of bit positions to shift

#### Returns

`number`

The result, as an unsigned 32-bit integer

***

### safeXor()

> `static` **safeXor**(`a`, `b`): `number`

Defined in: [utils/BitUtils.ts:38](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/BitUtils.ts#L38)

Performs a bitwise XOR, returning an unsigned 32-bit result

#### Parameters

##### a

`number`

First operand

##### b

`number`

Second operand

#### Returns

`number`

The result, as an unsigned 32-bit integer
