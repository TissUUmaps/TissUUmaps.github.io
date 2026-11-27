# Type Alias: Layer

> **Layer** = [`Model`](Model.md) & `Required`\<`Pick`\<[`RawLayer`](../interfaces/RawLayer.md), keyof *typeof* [`layerDefaults`](../variables/layerDefaults.md)\>\> & `Omit`\<[`RawLayer`](../interfaces/RawLayer.md), keyof *typeof* [`layerDefaults`](../variables/layerDefaults.md)\>

Defined in: [model/layer.ts:68](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/layer.ts#L68)

A [RawLayer](../interfaces/RawLayer.md) with [layerDefaults](../variables/layerDefaults.md) applied
