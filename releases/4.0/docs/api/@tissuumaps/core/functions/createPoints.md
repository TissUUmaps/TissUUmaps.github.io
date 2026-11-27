# Function: createPoints()

> **createPoints**(`rawPoints`): [`Points`](../type-aliases/Points.md)

Defined in: [model/points.ts:114](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/points.ts#L114)

Creates a [Points](../type-aliases/Points.md) from a [RawPoints](../interfaces/RawPoints.md) by applying [pointsDefaults](../variables/pointsDefaults.md)

## Parameters

### rawPoints

[`RawPoints`](../interfaces/RawPoints.md)

The raw points

## Returns

[`Points`](../type-aliases/Points.md)

The complete points with the default values of missing or `undefined` properties
