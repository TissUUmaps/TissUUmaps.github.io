# Interface: TablePointsDataSource

Defined in: [@tissuumaps-storage/src/table/TablePointsDataSource.ts:10](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsDataSource.ts#L10)

A [RawPointsDataSource](../../core/interfaces/RawPointsDataSource.md) with [pointsDataSourceDefaults](../../core/variables/pointsDataSourceDefaults.md) applied

## Extends

- [`PointsDataSource`](../../core/type-aliases/PointsDataSource.md)\<*typeof* [`tablePointsDataSourceType`](../variables/tablePointsDataSourceType.md)\>

## Properties

### source?

> `optional` **source?**: `string`

Defined in: [@tissuumaps-storage/src/table/TablePointsDataSource.ts:17](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsDataSource.ts#L17)

A table file to add as a new table, which the data source then references
instead (see `TablePointsDataProvider.prepareDataSource`); never persisted

#### Overrides

`PointsDataSource.source`

***

### table?

> `optional` **table?**: `string`

Defined in: [@tissuumaps-storage/src/table/TablePointsDataSource.ts:18](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsDataSource.ts#L18)

ID of the table holding the per-item annotations of this data source, if any

#### Overrides

`PointsDataSource.table`

***

### type

> **type**: `"table"`

Defined in: @tissuumaps-core/build/src/model/base.d.ts:171

Data source type

#### Inherited from

`PointsDataSource.type`

***

### x?

> `optional` **x?**: `string`

Defined in: [@tissuumaps-storage/src/table/TablePointsDataSource.ts:19](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsDataSource.ts#L19)

***

### y?

> `optional` **y?**: `string`

Defined in: [@tissuumaps-storage/src/table/TablePointsDataSource.ts:20](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-storage/src/table/TablePointsDataSource.ts#L20)
