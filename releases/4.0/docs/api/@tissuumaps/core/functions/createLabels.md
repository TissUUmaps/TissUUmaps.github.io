# Function: createLabels()

> **createLabels**(`rawLabels`): [`Labels`](../type-aliases/Labels.md)

Defined in: [model/labels.ts:67](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/labels.ts#L67)

Creates a [Labels](../type-aliases/Labels.md) from a [RawLabels](../interfaces/RawLabels.md) by applying [labelsDefaults](../variables/labelsDefaults.md)

## Parameters

### rawLabels

[`RawLabels`](../interfaces/RawLabels.md)

The raw labels

## Returns

[`Labels`](../type-aliases/Labels.md)

The complete labels with the default values of missing or `undefined` properties
