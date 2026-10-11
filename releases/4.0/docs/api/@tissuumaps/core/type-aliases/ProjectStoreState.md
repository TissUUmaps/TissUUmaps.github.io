# Type Alias: ProjectStoreState

> **ProjectStoreState** = [`Project`](Project.md) & `object`

Defined in: [types/stores/project.ts:23](https://github.com/TissUUmaps/TissUUmaps/blob/4d87878a5a9aef5a0eabcac819b543bc23f43411/packages/@tissuumaps-core/src/types/stores/project.ts#L23)

The state of the project store, i.e. the currently open [Project](Project.md)

In addition to the project itself, the store keeps track of where the
project was loaded from, which is what project-relative paths in its data
sources are resolved against, and of an ID identifying the open project as
such. Both
describe how the project was opened rather than what it contains, so they are
not part of [Project](Project.md) and are not to be saved, serialized or exported
with it.

## Type Declaration

### instanceId

> **instanceId**: `string`

Identifies the open project regardless of its content: a fresh ID is
generated whenever a project is loaded or the store is cleared, so that a
new project can be told apart from edits to the open one

### source

> **source**: `string` \| `null`

Where the open project was loaded from: its absolute URL, the
workspace-relative path of the project file, or `null` if it was loaded
from neither
