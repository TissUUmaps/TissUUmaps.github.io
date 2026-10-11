# Class: AsyncUtils

Defined in: [utils/AsyncUtils.ts:5](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/AsyncUtils.ts#L5)

Utility methods for running large CPU workloads on the main thread without
blocking the UI, by cooperatively yielding to the event loop

## Constructors

### Constructor

> **new AsyncUtils**(): `AsyncUtils`

#### Returns

`AsyncUtils`

## Methods

### createYielder()

> `static` **createYielder**(`options?`): (`opts?`) => `Promise`\<`void`\>

Defined in: [utils/AsyncUtils.ts:53](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/AsyncUtils.ts#L53)

Creates a time-sliced yielder for loops whose iterations are too coarse or
heterogeneous for [AsyncUtils.forEach](#foreach) (e.g. nested loops).

Call the returned function at safe points inside a loop: it checks the
abort signal on every call for fail-fast cancellation, and additionally
yields to the event loop once the time budget since the last yield is
exceeded. When within budget and not aborted, it is a cheap no-op.

#### Parameters

##### options?

Optional time (ms) to run before yielding

###### yieldMs?

`number`

#### Returns

The yielder, which takes an optional abort signal

(`opts?`) => `Promise`\<`void`\>

***

### forEach()

> `static` **forEach**\<`T`\>(`items`, `callback`, `options?`): `Promise`\<`void`\>

Defined in: [utils/AsyncUtils.ts:86](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/AsyncUtils.ts#L86)

Invokes `callback(item, index)` for every element of `items`, yielding to
the event loop whenever the time budget is exceeded so the UI stays
responsive.

The abort signal is checked up front and after every yield, preserving
fail-fast cancellation: an abort rejects with the signal's reason and no
further iterations run.

#### Type Parameters

##### T

`T`

#### Parameters

##### items

`ArrayLike`\<`T`\>

The array-like collection to iterate over

##### callback

(`item`, `index`) => `void`

Synchronous work to perform for each `item` and its `index`

##### options?

Optional abort signal, time (ms) to run before yielding
  (`yieldMs`), and the number of iterations between budget checks
  (`checkEvery`)

###### checkEvery?

`number`

###### signal?

`AbortSignal`

###### yieldMs?

`number`

#### Returns

`Promise`\<`void`\>

A promise that resolves once every item has been visited, or
  rejects with the signal's reason

***

### raceSignal()

> `static` **raceSignal**\<`T`\>(`promise`, `options?`): `Promise`\<`T`\>

Defined in: [utils/AsyncUtils.ts:114](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/AsyncUtils.ts#L114)

Returns a promise that resolves or rejects with the given `promise`, but
rejects early if the given `signal` is aborted.

#### Type Parameters

##### T

`T`

#### Parameters

##### promise

`Promise`\<`T`\>

The promise to race against the abort signal

##### options?

Optional abort signal to race against the promise

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`T`\>

A promise that resolves or rejects based on the race condition

***

### withResolvers()

> `static` **withResolvers**\<`T`\>(): `object`

Defined in: [utils/AsyncUtils.ts:145](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/AsyncUtils.ts#L145)

Creates a promise together with the functions that resolve and reject it,
like `Promise.withResolvers()`, which is not yet widely available.

#### Type Parameters

##### T

`T`

#### Returns

`object`

The promise and the functions that resolve and reject it

##### promise

> **promise**: `Promise`\<`T`\>

##### reject

> **reject**: (`reason?`) => `void`

###### Parameters

###### reason?

`unknown`

###### Returns

`void`

##### resolve

> **resolve**: (`value`) => `void`

###### Parameters

###### value

`T` \| `PromiseLike`\<`T`\>

###### Returns

`void`

***

### yield()

> `static` **yield**(): `Promise`\<`void`\>

Defined in: [utils/AsyncUtils.ts:22](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/utils/AsyncUtils.ts#L22)

Yields control back to the event loop, allowing the browser to paint and
process input before resuming.

Uses the native `scheduler.yield()` when available, otherwise falls back to
a shared `MessageChannel` (a macrotask without `setTimeout`'s clamping).

#### Returns

`Promise`\<`void`\>

A promise that resolves once the event loop has been yielded to
