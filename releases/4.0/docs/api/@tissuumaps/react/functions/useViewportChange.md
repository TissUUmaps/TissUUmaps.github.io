# Function: useViewportChange()

> **useViewportChange**(`onViewportChange`): `void`

Defined in: [hooks/useViewportChange.ts:17](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-react/src/hooks/useViewportChange.ts#L17)

Calls back once the viewer is ready, and then whenever the viewport or the
container size changes, before the viewer draws the new viewport

Only has an effect inside a `Viewer`, e.g. in a `ViewerControl`. Memoize
the callback: a new identity resubscribes and calls it again.

## Parameters

### onViewportChange

(`viewport`, `containerSize`) => `void`

Called with the visible viewport, in world
coordinates, and the container size, in CSS pixels

## Returns

`void`
