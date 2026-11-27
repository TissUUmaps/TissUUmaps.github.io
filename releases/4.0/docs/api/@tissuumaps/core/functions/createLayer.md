# Function: createLayer()

> **createLayer**(`rawLayer`): [`Layer`](../type-aliases/Layer.md)

Defined in: [model/layer.ts:78](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/layer.ts#L78)

Creates a [Layer](../type-aliases/Layer.md) from a [RawLayer](../interfaces/RawLayer.md) by applying [layerDefaults](../variables/layerDefaults.md)

## Parameters

### rawLayer

[`RawLayer`](../interfaces/RawLayer.md)

The raw layer

## Returns

[`Layer`](../type-aliases/Layer.md)

The complete layer with the default values of missing or `undefined` properties
