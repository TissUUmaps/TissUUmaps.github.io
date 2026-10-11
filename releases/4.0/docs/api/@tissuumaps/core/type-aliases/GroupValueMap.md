# Type Alias: GroupValueMap\<TValue\>

> **GroupValueMap**\<`TValue`\> = `object`

Defined in: [model/primitives.ts:2](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/primitives.ts#L2)

A named mapping from string keys (groups) to typed values with an optional default value

## Type Parameters

### TValue

`TValue`

## Properties

### default?

> `optional` **default?**: `TValue`

Defined in: [model/primitives.ts:18](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/primitives.ts#L18)

Default value for groups not present in [values](#values)

***

### id

> **id**: `string`

Defined in: [model/primitives.ts:4](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/primitives.ts#L4)

Map ID, referenced from data object configurations

***

### name

> **name**: `string`

Defined in: [model/primitives.ts:7](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/primitives.ts#L7)

Human-readable map name

***

### values

> **values**: `object`

Defined in: [model/primitives.ts:15](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/primitives.ts#L15)

Mapping from group names to values

Group names are the table cell values as strings, e.g. `"3"` for a numeric
cell.

#### Index Signature

\[`key`: `string`\]: `TValue`
