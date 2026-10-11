# Type Alias: ColorConfig

> **ColorConfig** = [`ConstantConfig`](ConstantConfig.md)\<[`Color`](Color.md)\> \| [`FromConfig`](FromConfig.md)\<\{ `palette`: `string`; `range?`: \[`number`, `number`\]; \}\> \| [`GroupByConfig`](GroupByConfig.md)\<`false`, \{ `palette?`: `string`; \}\> \| [`RandomConfig`](RandomConfig.md)\<\{ `palette`: `string`; \}\>

Defined in: [model/configs.ts:203](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/configs.ts#L203)

Color configuration

When sourced from a numerical table column, values are clipped to the
configured range - or min-max-scaled, if none is given - and then mapped to
the configured color palette.
