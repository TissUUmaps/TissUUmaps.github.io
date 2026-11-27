# Type Alias: ProjectStoreState

> **ProjectStoreState** = [`Project`](Project.md) & `object`

Defined in: [types/stores/project.ts:24](https://github.com/TissUUmaps/TissUUmaps/blob/fff0b4b2976f09abd0015299aa33eb9ef2914996/packages/@tissuumaps-core/src/types/stores/project.ts#L24)

The state of the project store, i.e. the currently open [Project](Project.md)

In addition to the project itself, the store keeps track of where the
project was loaded from, which is what project-relative paths in its data
sources are resolved against, of the file it can be saved back to, of an ID
identifying the open project as such, and of the project as it was last
loaded or saved. These describe how the project was opened rather than what
it contains, so they are not part of [Project](Project.md) and are not to be
saved, serialized or exported with it.

## Type Declaration

### instanceId

> **instanceId**: `string`

Identifies the open project regardless of its content: a fresh ID is
generated whenever a project is loaded or the store is cleared, so that a
new project can be told apart from edits to the open one

### savedProject

> **savedProject**: [`Project`](Project.md)

The open project as it was when it was last loaded or saved, sharing its
unchanged parts with the open project, so that a part that differs by
reference has unsaved changes; written by the application alone

### saveTarget

> **saveTarget**: \{ `handle`: `FileSystemFileHandle`; `projectProvider`: [`ProjectProvider`](../interfaces/ProjectProvider.md); \} \| `null`

The file that Save writes the open project to: the project file within the
workspace that it was loaded from or last saved as, with the project
provider that reads and writes it, or `null` if there is no such file or
the workspace has changed since; written by the application alone

### source

> **source**: `string` \| `null`

Where the open project was loaded from or last saved as: its absolute URL,
the workspace-relative path of the project file, or `null` if neither
