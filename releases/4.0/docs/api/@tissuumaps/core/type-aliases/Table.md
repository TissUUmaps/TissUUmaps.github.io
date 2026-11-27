# Type Alias: Table

> **Table** = [`DataObject`](DataObject.md)\<[`TableDataSource`](TableDataSource.md)\<`string`\>\> & `Required`\<`Pick`\<[`RawTable`](../interfaces/RawTable.md), keyof *typeof* [`tableDefaults`](../variables/tableDefaults.md)\>\> & `Omit`\<[`RawTable`](../interfaces/RawTable.md), keyof *typeof* [`tableDefaults`](../variables/tableDefaults.md)\>

Defined in: [model/table.ts:25](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/table.ts#L25)

A [RawTable](../interfaces/RawTable.md) with [tableDefaults](../variables/tableDefaults.md) applied
