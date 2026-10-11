# Interface: CustomTileSource

Defined in: [types/openseadragon.ts:7](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/openseadragon.ts#L7)

A custom tile source that resolves tile URLs programmatically

## Methods

### getTileUrl()

> **getTileUrl**(`level`, `x`, `y`): `string` \| (() => `string`)

Defined in: [types/openseadragon.ts:16](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/openseadragon.ts#L16)

Returns the URL for a specific tile

#### Parameters

##### level

`number`

Pyramid level

##### x

`number`

Tile column index

##### y

`number`

Tile row index

#### Returns

`string` \| (() => `string`)

The tile URL, or a function that returns the URL
