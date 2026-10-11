# Type Alias: Table

> **Table** = [`DataObject`](DataObject.md)\<[`TableDataSource`](TableDataSource.md)\<`string`\>\> & `Required`\<`Pick`\<[`RawTable`](../interfaces/RawTable.md), keyof *typeof* [`tableDefaults`](../variables/tableDefaults.md)\>\> & `Omit`\<[`RawTable`](../interfaces/RawTable.md), keyof *typeof* [`tableDefaults`](../variables/tableDefaults.md)\>

Defined in: [model/table.ts:24](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/table.ts#L24)

A [RawTable](../interfaces/RawTable.md) with [tableDefaults](../variables/tableDefaults.md) applied
