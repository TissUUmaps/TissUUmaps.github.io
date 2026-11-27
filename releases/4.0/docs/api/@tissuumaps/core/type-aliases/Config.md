# Type Alias: Config\<TSource\>

> **Config**\<`TSource`\> = `object`

Defined in: [model/configs.ts:10](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/configs.ts#L10)

Base type for property configurations that can be sourced from different providers

Concrete configuration types (e.g. [ColorConfig](ColorConfig.md), [SizeConfig](SizeConfig.md)) are unions
of this base with one or more source-specific types such as [ConstantConfig](ConstantConfig.md),
[FromConfig](FromConfig.md), [GroupByConfig](GroupByConfig.md), and [RandomConfig](RandomConfig.md).

## Type Parameters

### TSource

`TSource` *extends* `string`

## Properties

### source?

> `optional` **source?**: `TSource`

Defined in: [model/configs.ts:16](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/configs.ts#L16)

Explicitly prioritized configuration source

When set, this overrides the automatic source detection in [getActiveConfigSource](../functions/getActiveConfigSource.md).
