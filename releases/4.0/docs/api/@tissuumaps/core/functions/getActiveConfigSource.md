# Function: getActiveConfigSource()

> **getActiveConfigSource**\<`TSource`\>(`config`): `TSource` \| `undefined`

Defined in: [model/configs.ts:33](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/configs.ts#L33)

Determines the active source of the given [Config](../type-aliases/Config.md)

If a source is explicitly prioritized using [Config.source](../type-aliases/Config.md#source), that source is returned.

Otherwise, the active source is determined by checking for the presence of configuration-specific fields in the following order:
- [ConstantConfig](../type-aliases/ConstantConfig.md)
- [FromConfig](../type-aliases/FromConfig.md)
- [GroupByConfig](../type-aliases/GroupByConfig.md)
- [RandomConfig](../type-aliases/RandomConfig.md)

## Type Parameters

### TSource

`TSource` *extends* `string`

## Parameters

### config

[`Config`](../type-aliases/Config.md)\<`TSource`\>

The configuration

## Returns

`TSource` \| `undefined`

The active configuration source, or `undefined` if none is active
