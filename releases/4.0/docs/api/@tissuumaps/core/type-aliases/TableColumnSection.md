# Type Alias: TableColumnSection

> **TableColumnSection** = `object`

Defined in: [storage/table.ts:16](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/table.ts#L16)

A group of a table's columns, by the conventions of its format (see
`TableData.getColumnSections`)

A section without subsections is a leaf: a set of columns searched as one,
e.g. the features of one expression matrix. Pass its `id` as
`sectionId` (see `TableData.suggestColumnQueries`). A section with
subsections gathers leaves that hold the same kind of columns, e.g. the
features of AnnData in `X`, a layer and `raw`. Names are for display only.

## Properties

### id

> **id**: `string`

Defined in: [storage/table.ts:21](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/table.ts#L21)

The key of the section, unique among the table's sections and
stable across reopening the table

***

### name

> **name**: `string`

Defined in: [storage/table.ts:24](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/table.ts#L24)

The name to show, e.g. "Features"

***

### subsections?

> `optional` **subsections?**: `TableColumnSection`[]

Defined in: [storage/table.ts:27](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/storage/table.ts#L27)

The sections below this one, if it is no leaf
