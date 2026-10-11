# Type Alias: DataProviderLoadOptions

> **DataProviderLoadOptions** = `object`

Defined in: [storage/base.ts:112](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L112)

Options accepted by [DataProvider.load](../interfaces/DataProvider.md#load)

## Properties

### onProgress?

> `optional` **onProgress?**: [`ProgressCallback`](ProgressCallback.md)

Defined in: [storage/base.ts:120](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L120)

Callback for reporting the progress of the load operation

***

### signal?

> `optional` **signal?**: `AbortSignal`

Defined in: [storage/base.ts:114](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L114)

Signal for aborting the load operation

***

### workspace?

> `optional` **workspace?**: `FileSystemDirectoryHandle` \| `null`

Defined in: [storage/base.ts:117](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/storage/base.ts#L117)

Directory handle of the open workspace, if any
