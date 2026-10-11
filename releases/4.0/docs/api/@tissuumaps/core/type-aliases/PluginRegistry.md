# Type Alias: PluginRegistry

> **PluginRegistry** = `object`

Defined in: [types/plugins.ts:85](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/plugins.ts#L85)

The registry through which the application registers, mounts, unmounts and
unregisters plugins

## Properties

### mountPlugin

> **mountPlugin**: (`pluginId`) => `void`

Defined in: [types/plugins.ts:105](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/plugins.ts#L105)

Mounts a registered plugin, calling its `mount` and showing its panel

Does nothing if the plugin is not registered, has no `mount`, or is already
mounted.

#### Parameters

##### pluginId

`string`

The ID of the plugin to mount

#### Returns

`void`

***

### registerPlugin

> **registerPlugin**: (`plugin`) => `void`

Defined in: [types/plugins.ts:95](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/plugins.ts#L95)

Registers a plugin, calling its `setup`, if it has one

The plugin is not mounted: that is up to the user, or to
[mountPlugin](#mountplugin). Registering a plugin whose ID is already in use
unregisters the previously registered plugin first.

#### Parameters

##### plugin

[`Plugin`](Plugin.md)

The plugin to register

#### Returns

`void`

***

### unmountPlugin

> **unmountPlugin**: (`pluginId`) => `void`

Defined in: [types/plugins.ts:115](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/plugins.ts#L115)

Unmounts a mounted plugin, removing its panel and calling the unmount
callback returned by its `mount`

The plugin stays registered. Does nothing if the plugin is not mounted.

#### Parameters

##### pluginId

`string`

The ID of the plugin to unmount

#### Returns

`void`

***

### unregisterPlugin

> **unregisterPlugin**: (`pluginId`) => `void`

Defined in: [types/plugins.ts:123](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/plugins.ts#L123)

Unregisters a registered plugin, unmounting it if it is mounted and then
calling the teardown callback returned by its `setup`

#### Parameters

##### pluginId

`string`

The ID of the plugin to unregister

#### Returns

`void`
