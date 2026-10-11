# Type Alias: RandomConfig\<TRandomExtra\>

> **RandomConfig**\<`TRandomExtra`\> = [`Config`](Config.md)\<`"random"`\> & `object`

Defined in: [model/configs.ts:134](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/configs.ts#L134)

Configuration to use random values

## Type Declaration

### random

> **random**: `object` & `TRandomExtra`

Specification of random value generation

#### Type Declaration

##### seed?

> `optional` **seed?**: `number`

The seed for the random number generator

Values are drawn deterministically from the item ID and the seed, so
different seeds yield different assignments for the same items.

###### Default Value

[defaultRandomSeed](../variables/defaultRandomSeed.md)

## Type Parameters

### TRandomExtra

`TRandomExtra` = `unknown`
