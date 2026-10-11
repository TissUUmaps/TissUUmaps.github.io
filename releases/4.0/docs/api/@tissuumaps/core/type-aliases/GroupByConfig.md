# Type Alias: GroupByConfig\<TMapRequired, TGroupByExtra\>

> **GroupByConfig**\<`TMapRequired`, `TGroupByExtra`\> = [`Config`](Config.md)\<`"groupBy"`\> & `object`

Defined in: [model/configs.ts:107](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/model/configs.ts#L107)

Configuration to map a categorical table column to values

## Type Declaration

### groupBy

> **groupBy**: [`TableColumnRef`](TableColumnRef.md) & `object` & `TGroupByExtra`

Specification of what categorical table column to load and how to map groups to values

#### Type Declaration

##### map

> **map**: `TMapRequired` *extends* `true` ? `string` : `string` \| `undefined`

Project-global group-to-value map ID

## Type Parameters

### TMapRequired

`TMapRequired` *extends* `boolean`

### TGroupByExtra

`TGroupByExtra` = `unknown`
