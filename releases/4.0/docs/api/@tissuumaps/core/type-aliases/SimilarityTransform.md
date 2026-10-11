# Type Alias: SimilarityTransform

> **SimilarityTransform** = `object`

Defined in: [model/primitives.ts:31](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/primitives.ts#L31)

Similarity transform (uniform scale, rotation, translation, and flip)

## Properties

### flip

> **flip**: `boolean`

Defined in: [model/primitives.ts:33](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/primitives.ts#L33)

Horizontal reflection, applied before scaling, rotation, and translation

***

### rotation

> **rotation**: `number`

Defined in: [model/primitives.ts:39](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/primitives.ts#L39)

Rotation around origin, in degrees

***

### scale

> **scale**: `number`

Defined in: [model/primitives.ts:36](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/primitives.ts#L36)

Uniform scale factor (1 = no scaling)

***

### translation

> **translation**: `object`

Defined in: [model/primitives.ts:42](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/primitives.ts#L42)

Translation in X and Y, applied after scaling and rotation

#### x

> **x**: `number`

#### y

> **y**: `number`
