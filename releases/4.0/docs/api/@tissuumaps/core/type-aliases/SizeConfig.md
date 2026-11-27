# Type Alias: SizeConfig

> **SizeConfig** = [`ConstantConfig`](ConstantConfig.md)\<`number`, \{ `unit?`: [`CoordinateSpace`](CoordinateSpace.md); \}\> \| [`FromConfig`](FromConfig.md)\<\{ `unit?`: [`CoordinateSpace`](CoordinateSpace.md); \}\> \| [`GroupByConfig`](GroupByConfig.md)\<`true`, \{ `unit?`: [`CoordinateSpace`](CoordinateSpace.md); \}\>

Defined in: [model/configs.ts:176](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/configs.ts#L176)

Size configuration

When sourced from a table column, numerical values are interpreted as sizes
in the specified [CoordinateSpace](CoordinateSpace.md) unit.
