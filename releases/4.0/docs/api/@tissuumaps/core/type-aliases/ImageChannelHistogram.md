# Type Alias: ImageChannelHistogram

> **ImageChannelHistogram** = `object`

Defined in: [storage/image.ts:10](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/image.ts#L10)

The value histogram of a channel, in raw pixel values

## Properties

### hist

> **hist**: `number`[]

Defined in: [storage/image.ts:16](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/image.ts#L16)

The number of samples per bin, bin `i` of `n` counting the values around
`vmin + i / (n - 1) * (vmax - vmin)` (see
[MathUtils.computeHistogram](../classes/MathUtils.md#computehistogram))

***

### range

> **range**: \[`number`, `number`\]

Defined in: [storage/image.ts:19](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/image.ts#L19)

The values the first and the last bin are centered on, as `[vmin, vmax]`
