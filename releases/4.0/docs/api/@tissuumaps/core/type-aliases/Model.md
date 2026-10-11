# Type Alias: Model

> **Model** = `object` & `Required`\<`Pick`\<[`RawModel`](../interfaces/RawModel.md), keyof *typeof* [`modelDefaults`](../variables/modelDefaults.md)\>\> & `Omit`\<[`RawModel`](../interfaces/RawModel.md), keyof *typeof* [`modelDefaults`](../variables/modelDefaults.md)\>

Defined in: [model/base.ts:19](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L19)

A [RawModel](../interfaces/RawModel.md) with [modelDefaults](../variables/modelDefaults.md) applied
