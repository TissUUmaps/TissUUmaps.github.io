# Class: ConfigUtils

Defined in: [utils/ConfigUtils.ts:13](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ConfigUtils.ts#L13)

Utility methods for property configurations

## Constructors

### Constructor

> **new ConfigUtils**(): `ConfigUtils`

#### Returns

`ConfigUtils`

## Methods

### createGroupValueGetter()

> `static` **createGroupValueGetter**\<`TValue`\>(`config`, `map`, `defaultValue`, `palette?`, `groups?`): (`group`) => `TValue`

Defined in: [utils/ConfigUtils.ts:82](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ConfigUtils.ts#L82)

Creates the function that returns the value a group-by configuration
assigns to a group

With a map, a group takes its value in the map, else the map's default,
else `defaultValue`; a map that does not exist gives every group
`defaultValue`. Without a map, the groups take the palette values in
order, cycling through the palette if there are more groups than values;
a group that is not listed, or every group if there is no palette, takes
`defaultValue`.

#### Type Parameters

##### TValue

`TValue`

#### Parameters

##### config

[`GroupByConfig`](../type-aliases/GroupByConfig.md)\<`false`\>

The group-by configuration

##### map

[`GroupValueMap`](../type-aliases/GroupValueMap.md)\<`TValue`\> \| `undefined`

The map the configuration refers to (see
[findGroupByMap](#findgroupbymap)), or `undefined` if it refers to none or the map
does not exist

##### defaultValue

`TValue`

The value of a group that nothing assigns one to

##### palette?

readonly `TValue`[]

The values to assign to the groups if there is no map

##### groups?

`Iterable`\<`string`, `any`, `any`\>

All groups of the column the configuration groups by, in
the order they take the palette values (see `TableUtils.loadGroupCounts`)

#### Returns

The value of a group, by group name (the cell value as a string)

(`group`) => `TValue`

***

### findGroupByMap()

> `static` **findGroupByMap**\<`TValue`\>(`config`, `maps`): [`GroupValueMap`](../type-aliases/GroupValueMap.md)\<`TValue`\> \| `undefined`

Defined in: [utils/ConfigUtils.ts:28](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ConfigUtils.ts#L28)

Returns the group-to-value map that a configuration resolves its values
from, if any

Only an active `groupBy` source (see [getActiveConfigSource](../functions/getActiveConfigSource.md)) with a
map ID resolves from a map. The map is returned as found in `maps`, rather
than copied: maps are never mutated, as an edit replaces the map, so
callers can detect an edit by comparing the returned maps by identity.

#### Type Parameters

##### TValue

`TValue`

#### Parameters

##### config

[`Config`](../type-aliases/Config.md)\<`string`\>

The configuration

##### maps

[`GroupValueMap`](../type-aliases/GroupValueMap.md)\<`TValue`\>[]

The project-global maps to look the referenced map up in

#### Returns

[`GroupValueMap`](../type-aliases/GroupValueMap.md)\<`TValue`\> \| `undefined`

The map, or `undefined` if the configuration does not resolve
from a map, or if the map it references does not exist

***

### getGroupByColumn()

> `static` **getGroupByColumn**(`config`): [`TableColumnRef`](../type-aliases/TableColumnRef.md) \| `undefined`

Defined in: [utils/ConfigUtils.ts:115](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ConfigUtils.ts#L115)

Returns the table column a configuration groups by

#### Parameters

##### config

[`Config`](../type-aliases/Config.md)\<`string`\>

The configuration

#### Returns

[`TableColumnRef`](../type-aliases/TableColumnRef.md) \| `undefined`

The column, or `undefined` if `groupBy` is not the active source

***

### getGroupByMapIds()

> `static` **getGroupByMapIds**(`configs`): `Set`\<`string`\>

Defined in: [utils/ConfigUtils.ts:51](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ConfigUtils.ts#L51)

Returns the IDs of the maps that configurations refer to

A configuration refers to its map whatever its active source, as switching
back to `groupBy` uses the map again.

#### Parameters

##### configs

[`Config`](../type-aliases/Config.md)\<`string`\>[]

The configurations

#### Returns

`Set`\<`string`\>

The IDs of the referenced maps

***

### getUnit()

> `static` **getUnit**(`config`): [`CoordinateSpace`](../type-aliases/CoordinateSpace.md) \| `undefined`

Defined in: [utils/ConfigUtils.ts:178](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ConfigUtils.ts#L178)

Returns the unit of the active source of a configuration

#### Parameters

##### config

[`Config`](../type-aliases/Config.md)\<`string`\>

The configuration, of which only sizes have a unit

#### Returns

[`CoordinateSpace`](../type-aliases/CoordinateSpace.md) \| `undefined`

The unit, or `undefined` if the active source has none

***

### isSameTableColumn()

> `static` **isSameTableColumn**(`tableColumnRef`, `otherTableColumnRef`, `defaultTable?`): `boolean`

Defined in: [utils/ConfigUtils.ts:206](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ConfigUtils.ts#L206)

Determines whether two table column references point to the same column

References without a table point to the column of `defaultTable`.

#### Parameters

##### tableColumnRef

[`TableColumnRef`](../type-aliases/TableColumnRef.md)

The table column reference

##### otherTableColumnRef

[`TableColumnRef`](../type-aliases/TableColumnRef.md)

The table column reference to compare with

##### defaultTable?

`string`

ID of the table of references without a table

#### Returns

`boolean`

Whether both references point to the same column

***

### withGroupByMap()

> `static` **withGroupByMap**(`config`, `groupBy`, `mapId`): [`GroupByConfig`](../type-aliases/GroupByConfig.md)\<`true`\>

Defined in: [utils/ConfigUtils.ts:137](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/ConfigUtils.ts#L137)

Points a configuration at a map, grouping by a column

The configuration keeps its other sources and the extra fields of its
`groupBy` specification (e.g. a palette), so that switching back to them
restores them. The unit of the active source, which only sizes have, is
carried over, so that the values keep their scale. A configuration that
already groups by the column with the map is returned as is, so that
updating an object with it changes nothing.

#### Parameters

##### config

[`Config`](../type-aliases/Config.md)\<`string`\>

The configuration

##### groupBy

[`TableColumnRef`](../type-aliases/TableColumnRef.md)

The categorical table column to group by

##### mapId

`string`

ID of the project-global map to take the group values from

#### Returns

[`GroupByConfig`](../type-aliases/GroupByConfig.md)\<`true`\>

The configuration, with `groupBy` as its active source
