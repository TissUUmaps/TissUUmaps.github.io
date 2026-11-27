# Type Alias: Project

> **Project** = [`Model`](Model.md) & `Required`\<`Pick`\<[`RawProject`](../interfaces/RawProject.md), keyof *typeof* [`projectDefaults`](../variables/projectDefaults.md)\>\> & `Omit`\<[`RawProject`](../interfaces/RawProject.md), keyof *typeof* [`projectDefaults`](../variables/projectDefaults.md) \| `"layers"` \| `"images"` \| `"labels"` \| `"points"` \| `"shapes"` \| `"tables"`\> & `object`

Defined in: [model/project.ts:243](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/project.ts#L243)

A [RawProject](../interfaces/RawProject.md) with [projectDefaults](../variables/projectDefaults.md) applied

## Type Declaration

### images

> **images**: [`Image`](Image.md)[]

### labels

> **labels**: [`Labels`](Labels.md)[]

### layers

> **layers**: [`Layer`](Layer.md)[]

### points

> **points**: [`Points`](Points.md)[]

### shapes

> **shapes**: [`Shapes`](Shapes.md)[]

### tables

> **tables**: [`Table`](Table.md)[]
