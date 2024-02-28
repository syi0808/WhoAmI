```mermaid
classDiagram
    class GlobalLayout

    namespace MissionControl {
      class Container
      class DesktopItem
      class MissionControlContext
    }

    namespace Tabs {
      class TerminalTab
      class ChromeTab
    }

    GlobalLayout o-- Container

    MissionControlContext <|-- Container
    Container ..> MissionControlContext
    Container *-- DesktopItem

    Container *-- TerminalTab
    Container *-- ChromeTab

    TerminalTab ..> MissionControlContext
    ChromeTab ..> MissionControlContext
```
