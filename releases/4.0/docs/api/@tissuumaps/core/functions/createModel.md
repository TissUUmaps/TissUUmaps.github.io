# Function: createModel()

> **createModel**(`rawModel`): [`Model`](../type-aliases/Model.md)

Defined in: [model/base.ts:43](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/base.ts#L43)

Creates a [Model](../type-aliases/Model.md) from a [RawModel](../interfaces/RawModel.md) by applying [modelDefaults](../variables/modelDefaults.md)

## Parameters

### rawModel

[`RawModel`](../interfaces/RawModel.md)

The raw model

## Returns

[`Model`](../type-aliases/Model.md)

The complete model with the default values of missing or `undefined` properties
