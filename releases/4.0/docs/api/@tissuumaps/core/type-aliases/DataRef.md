# Type Alias: DataRef\<TData\>

> **DataRef**\<`TData`\> = `object` & \{ `progress?`: `number`; `status`: `"loading"`; `total?`: `number`; \} \| \{ `data`: `TData`; `status`: `"loaded"`; \} \| \{ `error`: `unknown`; `status`: `"error"`; \}

Defined in: [types/stores/data.ts:18](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/data.ts#L18)

A reference to an object's data, in one of three states

While `status` is `"loading"`, `progress` and `total` carry the most recent
progress report, if there was any; `"loaded"` carries the data, and
`"error"` the reason why loading it failed. A reference is replaced, rather
than mutated, whenever its state changes.

## Type Declaration

### promise

> **promise**: `Promise`\<`TData`\>

Resolves with the loaded data, or rejects with the loading error

## Type Parameters

### TData

`TData` *extends* [`Data`](../interfaces/Data.md)
