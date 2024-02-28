```mermaid
classDiagram
    class GlobalLayout

    class Container
    class DesktopItem
    class MissionControlContext

    class TerminalTab
    class ChromeTab

    GlobalLayout o-- Container

    MissionControlContext <|-- Container
    Container ..> MissionControlContext
    Container *-- DesktopItem

    Container *-- TerminalTab
    Container *-- ChromeTab

    TerminalTab ..> MissionControlContext
    ChromeTab ..> MissionControlContext
```
