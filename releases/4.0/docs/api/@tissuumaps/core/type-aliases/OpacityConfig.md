# Type Alias: OpacityConfig

> **OpacityConfig** = [`ConstantConfig`](ConstantConfig.md)\<`number`\> \| [`FromConfig`](FromConfig.md)\<\{ `range?`: \[`number` \| `null`, `number` \| `null`\]; \}\> \| [`GroupByConfig`](GroupByConfig.md)\<`true`\>

Defined in: [model/configs.ts:251](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/configs.ts#L251)

Opacity configuration

When sourced from a numerical table column, values are clipped to the
configured range - or min-max-scaled, if none is given - and then mapped
linearly to opacities between `0` (fully transparent) and `1` (fully opaque).
