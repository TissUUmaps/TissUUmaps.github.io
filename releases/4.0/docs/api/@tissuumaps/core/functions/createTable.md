# Function: createTable()

> **createTable**(`rawTable`): [`Table`](../type-aliases/Table.md)

Defined in: [model/table.ts:35](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/model/table.ts#L35)

Creates a [Table](../type-aliases/Table.md) from a [RawTable](../interfaces/RawTable.md) by applying [tableDefaults](../variables/tableDefaults.md)

## Parameters

### rawTable

[`RawTable`](../interfaces/RawTable.md)

The raw table

## Returns

[`Table`](../type-aliases/Table.md)

The complete table with the default values of missing or `undefined` properties
