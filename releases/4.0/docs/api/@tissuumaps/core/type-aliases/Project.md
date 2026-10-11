# Type Alias: Project

> **Project** = [`Model`](Model.md) & `Required`\<`Pick`\<[`RawProject`](../interfaces/RawProject.md), keyof *typeof* [`projectDefaults`](../variables/projectDefaults.md)\>\> & `Omit`\<[`RawProject`](../interfaces/RawProject.md), keyof *typeof* [`projectDefaults`](../variables/projectDefaults.md) \| `"layers"` \| `"images"` \| `"labels"` \| `"points"` \| `"shapes"` \| `"tables"`\> & `object`

Defined in: [model/project.ts:183](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/project.ts#L183)

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
