# Type Alias: Plugin

> **Plugin** = `object`

Defined in: [types/plugins.ts:27](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/plugins.ts#L27)

A plugin that can be registered with the application

A plugin's lifecycle is `setup`, `mount`, `unmount`, `teardown`: registering
the plugin calls [setup](#setup); mounting it, which happens when the user opens
it, calls [mount](#mount); unmounting it, which happens when the user closes its
panel, calls the callback returned by `mount`; and unregistering it unmounts
it if it is mounted and then calls the callback returned by `setup`. A plugin
can be mounted and unmounted any number of times while it is registered. All
four steps are optional.

## Properties

### id

> **id**: `string`

Defined in: [types/plugins.ts:29](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/plugins.ts#L29)

The unique ID of the plugin

***

### mount?

> `optional` **mount?**: (`container`, `stores`) => (() => `void`) \| `void`

Defined in: [types/plugins.ts:78](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/plugins.ts#L78)

Mounts the plugin's user interface, if any

A plugin with a `mount` can be opened by the user, which mounts it and shows
it as a panel titled with the plugin's [name](#name). Closing the panel
unmounts the plugin again, but keeps it registered, so that it can be opened
again later.

Called each time the plugin is mounted, with a fresh, empty element owned by
the application. The element is not part of the document yet: the
application attaches it to the panel once that is shown, and keeps the user
interface mounted while the panel is hidden behind other tabs or moved.
A plugin whose `mount` throws is not mounted, but stays registered.

The container is discarded when the plugin is unmounted, so the returned
callback only has to release what is not plain DOM, such as store
subscriptions, listeners on `window`, or a React root.

#### Parameters

##### container

`HTMLElement`

The element to mount the user interface into

##### stores

[`PluginStores`](PluginStores.md)

The stores provided by the application for the plugin to interact with

#### Returns

(() => `void`) \| `void`

An unmount callback that unmounts the user interface again, if
any. It is called when the plugin is unmounted, which also happens first
when a mounted plugin is unregistered, before the teardown callback
returned by [setup](#setup).

***

### name

> **name**: `string`

Defined in: [types/plugins.ts:32](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/plugins.ts#L32)

The human-readable name of the plugin

***

### setup?

> `optional` **setup?**: (`stores`) => (() => `void`) \| `void`

Defined in: [types/plugins.ts:51](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/plugins.ts#L51)

Sets up the plugin and registers any necessary event listeners or other resources

Called once when the plugin is registered. A plugin whose `setup` throws is
not registered, and the teardown callback is not called: releasing whatever
`setup` had already acquired before it throws is `setup`'s own
responsibility.

A plugin that only contributes a user interface does not need a `setup`:
its [mount](#mount) receives the same stores.

#### Parameters

##### stores

[`PluginStores`](PluginStores.md)

The stores provided by the application for the plugin to interact with

#### Returns

(() => `void`) \| `void`

A teardown callback that unregisters the event listeners and
releases the other resources again, if any. It is called last when the
plugin is unregistered, after the user interface has been unmounted, and
only for a plugin that was registered successfully.
