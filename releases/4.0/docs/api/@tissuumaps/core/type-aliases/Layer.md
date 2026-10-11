# Type Alias: Layer

> **Layer** = [`Model`](Model.md) & `Required`\<`Pick`\<[`RawLayer`](../interfaces/RawLayer.md), keyof *typeof* [`layerDefaults`](../variables/layerDefaults.md)\>\> & `Omit`\<[`RawLayer`](../interfaces/RawLayer.md), keyof *typeof* [`layerDefaults`](../variables/layerDefaults.md)\>

Defined in: [model/layer.ts:68](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/layer.ts#L68)

A [RawLayer](../interfaces/RawLayer.md) with [layerDefaults](../variables/layerDefaults.md) applied
