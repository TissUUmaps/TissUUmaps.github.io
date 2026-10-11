# Type Alias: RenderedDataObject\<TDataSource\>

> **RenderedDataObject**\<`TDataSource`\> = [`DataObject`](DataObject.md)\<`TDataSource`\> & `Required`\<`Pick`\<[`RawRenderedDataObject`](../interfaces/RawRenderedDataObject.md)\<`TDataSource`\>, keyof *typeof* [`renderedDataObjectDefaults`](../variables/renderedDataObjectDefaults.md)\>\> & `Omit`\<[`RawRenderedDataObject`](../interfaces/RawRenderedDataObject.md)\<`TDataSource`\>, keyof *typeof* [`renderedDataObjectDefaults`](../variables/renderedDataObjectDefaults.md)\>

Defined in: [model/base.ts:125](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/base.ts#L125)

A [RawRenderedDataObject](../interfaces/RawRenderedDataObject.md) with [renderedDataObjectDefaults](../variables/renderedDataObjectDefaults.md) applied

## Type Parameters

### TDataSource

`TDataSource` *extends* [`DataSource`](DataSource.md)\<`string`\>
