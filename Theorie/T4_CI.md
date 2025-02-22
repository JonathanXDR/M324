# Continuous Integration

## 1. Was ist Continuous Integration (CI) und wie wird es umgesetzt?

Unter dem Begriff Continuous Integration (CI) wird der automatisierter Prozess der kontinuierlichen qualitativen Erweiterung der Codebasis mithilfe von spezialisierten automatisierten Tools verstanden und wird durch verschiedene Komponenten und Prozesse unterstützt:

1. **Zentrale Quellcode-Repositorys**: Entwickler übertragen ihre Änderungen in ein zentrales Repository wie Git, das alle Änderungen verfolgt und die Zusammenarbeit erleichtert.
2. **CI-Server**: Server wie Jenkins oder GitLab CI überwachen das Repository auf Änderungen und automatisieren Builds, Tests und Freigaben.
3. **Code-Integration**: Entwickler reichen mehrmals täglich kleine Codeänderungen ein, um Fehler frühzeitig zu erkennen und Probleme im Team zu lösen.
4. **Automatisierung**: CI-Tools starten den Build-Prozess und führen Tests aus, sobald Codeänderungen erkannt werden.
5. **Automatisierte Tests**: Unit-Tests, Integrationstests und End-to-End-Tests validieren den Code, bevor er in das Hauptrepository integriert wird.
6. **Feedback-Mechanismen**: Bei Fehlern benachrichtigen CI-Tools die Entwickler sofort, um schnelle Korrekturen zu ermöglichen.
7. **Artefaktmanagement**: Erfolgreiche Builds erzeugen Artefakte, die für zukünftige Tests und Deployments gespeichert werden.

source: <https://www.ibm.com/de-de/topics/continuous-integration#:~:text=China%2C%20Michael%20Goodwin-,Was%20ist%20Continuous%20Integration%3F,Code%20in%20die%20Codebasis%20integrieren>.

## 2. Was sind die Vor- und Nachteile von CI?

### Vorteile

- **Frühere Fehlererkennung**: Fehler werden schnell erkannt, oft noch Minuten nach der Codeübermittlung.
- **Bessere Teamarbeit**: Alle Teammitglieder können Änderungen integrieren und Integrationsfehler schnell identifizieren, was den Wissensaustausch fördert.
- **Beschleunigte Softwareentwicklung**: Häufige Integrationen führen zu schnelleren Updates und kürzeren Entwicklungszyklen.
- **Reduziertes Risiko**: Kleine, inkrementelle Änderungen sind leichter zu überprüfen und zu testen, was das Risiko von schwerwiegenden Fehlern verringert.

### Nachteile

- **Komplexität der Einrichtung**: Die Implementierung einer CI-Pipeline erfordert eine sorgfältige Planung und kontinuierliche Wartung, insbesondere bei Änderungen an der Infrastruktur.
- **Regelmässige Wartung erforderlich**: CI-Systeme müssen an die Veränderungen in der Codebasis und der Infrastruktur angepasst werden.

source: <https://www.ibm.com/de-de/topics/continuous-integration#:~:text=China%2C%20Michael%20Goodwin-,Was%20ist%20Continuous%20Integration%3F,Code%20in%20die%20Codebasis%20integrieren>.

## 3. Was ist Continuous Testing und wie wird es umgesetzt?

Continuous Testing ist eine Methode, bei der automatisierte Tests während der gesamten Softwareentwicklung eingesetzt werden, um schnell Feedback zu erhalten und Fehler frühzeitig zu erkennen. Sie verbessert die Softwarequalität und sorgt für eine reibungslose Nutzererfahrung. Dafür werden Tests in die Entwicklungsprozesse integriert und automatisiert, um Prozesse effizient zu halten.

source: <https://www.tricentis.com/de/learn/was-ist-continuous-testing>

## 4. Was ist eine Branching Strategie und welches sind die bekannten?

Eine Branching-Strategie beschreibt, wie Entwickler mit verschiedenen Zweigen (Branches) innerhalb eines Versionskontrollsystems arbeiten, um parallele Entwicklungen durchzuführen, ohne dass sich die Änderungen gegenseitig stören. Branches ermöglichen es, Funktionen oder Fehlerbehebungen isoliert zu entwickeln und zu testen, bevor sie in den Hauptzweig (Main) integriert werden. Eine gute Branching-Strategie sorgt für effektive Zusammenarbeit und minimiert das Risiko von Konflikten und Instabilitäten im Code.

### Bekannte Branching-Strategien

1. **Release Branching**:

   - Bei dieser Strategie wird ein separater Branch für jede Release-Version erstellt.
   - Änderungen müssen sowohl im Release-Branch als auch im Main-Branch integriert werden.
   - **Nachteil**: Zusätzlicher Aufwand, da Änderungen doppelt gemanagt werden müssen und es bei vielen Entwicklern schwierig sein kann, alle Änderungen zusammenzuführen.

2. **Feature Branching**:

   - Entwickler erstellen für jedes Feature einen eigenen Branch.
   - Features können mit sogenannten Feature Flags aktiviert oder deaktiviert werden, was es ermöglicht, den Code bereits vor der Aktivierung der Funktion zu integrieren.
   - **Vorteil**: Features können früh integriert werden, ohne dass sie für Endbenutzer sichtbar sind, und bieten eine einfache Möglichkeit, Funktionen bei Problemen schnell zurückzusetzen.

3. **Task Branching (Issue Branching)**:
   - Jeder Branch ist einer Aufgabe oder einem Issue aus einem Issue-Tracker (z. B. Jira) zugeordnet.
   - Der Branch-Name enthält die Issue-ID, was es einfach macht, zu sehen, welche Änderungen zu welchem Problem gehören.
   - **Vorteil**: Hohe Transparenz, besonders geeignet für agile Teams, da jeder Task seinen eigenen Branch hat.

source: <https://www.atlassian.com/agile/software-development/branching>

## 5. Wie kann man Commits und Branches mit User Stories verknüpfen?

Man sollte für jede einzelen User-Story oder Ticket einen Branch erstellen für das Entwickeln vom Feature oder dem Fix. Commit-Messages sollten eine klare Struktur haben um mögliche Fehler einfacher zu finden. Eine mögliche Struktur für Commit-Messages wäre:
"&lt;ticket-nummer>: &lt;beschreibung der arbeit>"
So ist alles immer schön sortiert und einfacher zu debuggen.

source: <https://git-scm.com/book/de/v2/Git-Branching-Einfaches-Branching-und-Merging> und Jons persönliche Arbeitserfahrung.

## 6. Welche Merge Strategien gibt es und wie werden sie umgesetzt?

Git bietet verschiedene Merge-Strategien, die sich je nach Bedarf anwenden lassen. Die Standardstrategie ist "Recursive", die Konflikte bei der Zusammenführung von zwei Branches löst. "Resolve" wird für einfache 3-Wege-Merges verwendet, während "Octopus" mehrere Branches gleichzeitig zusammenführt. "Ours" bevorzugt die Änderungen des aktuellen Branches, und "Subtree" wird genutzt, um Verzeichnisstrukturen anzupassen. Jede dieser Strategien lässt sich mit git merge -s &lt;Strategie> anwenden.

source: <https://www.atlassian.com/de/git/tutorials/using-branches/merge-strategy>

## 7. Was ist Semantic Versioning und wie wird es umgesetzt?

Semantic Versioning ist ein System zur Nummerierung von Softwareversionen mit dem Format X.Y.Z (MAJOR.MINOR.PATCH). Änderungen werden so kategorisiert: MAJOR bei inkompatiblen Anpassungen, MINOR für neue Funktionen, und PATCH für Fehlerbehebungen. Dieses Schema erleichtert die Nachvollziehbarkeit von Updates und sorgt für Kompatibilität. Entwickler starten oft mit 1.0.0 und passen Nummern entsprechend der Änderungen an.

source: <https://blog.disane.dev/semantic-versioning-ein-leitfaden-fur-entwickler/>

## 8. Welchen Unterschied haben Mono- und Multirepo (speziell im Zusammenhang mit Microservices)?

1. **Definition:**

   - **Monorepo:** Alle Codebasen und Microservices eines Projekts befinden sich in einem einzigen Repository. Teams teilen sich das gleiche Repository, arbeiten jedoch an unterschiedlichen Verzeichnissen oder Ordnern innerhalb dieses Repos.
   - **Multirepo:** Jeder Microservice hat sein eigenes Repository. Teams arbeiten unabhängig voneinander an getrennten Repos.

2. **Zusammenarbeit und Versionierung:**

   - **Monorepo:**
     - Einheitliche Versionierung für das gesamte Projekt.
     - Änderungen, die mehrere Microservices betreffen, können als Teil eines einzigen Commits oder Pull Requests durchgeführt werden.
     - Einfachere Konsistenz bei Abhängigkeiten, da alle Services in der gleichen Codebasis sind.
   - **Multirepo:**
     - Jeder Microservice hat seine eigene Versionsgeschichte und Versionsnummern.
     - Änderungen an mehreren Services erfordern Koordination zwischen den Repos und können komplexer werden.

3. **Build- und Deployment-Prozesse:**

   - **Monorepo:**
     - Zentralisierte Build- und CI/CD-Pipelines.
     - Tools wie Bazel oder Nx helfen dabei, nur die betroffenen Teile zu bauen oder zu testen.
     - Deployment für alle Services erfolgt zentral, was die Wartung erleichtern kann.
   - **Multirepo:**
     - Jeder Microservice hat separate Build- und Deployment-Pipelines.
     - Diese Isolation ermöglicht unabhängige Deployments und Updates für jeden Microservice.

4. **Skalierbarkeit und Komplexität:**

   - **Monorepo:**
     - Wird bei sehr großen Teams oder Projekten schnell komplex. Tools sind notwendig, um mit der Größe umzugehen.
     - Änderungen am Repository können sich auf viele Entwickler auswirken, was Abstimmungen erfordert.
   - **Multirepo:**
     - Ermöglicht Teams, unabhängig und fokussiert zu arbeiten.
     - Schwieriger, Änderungen global über alle Microservices hinweg zu synchronisieren.

5. **Vorteile und Herausforderungen:**
   - **Monorepo:**
     - Vorteile:
       - Einfache Zusammenarbeit.
       - Einfachere Wiederverwendung von Code.
       - Konsistente Abhängigkeiten.
     - Herausforderungen:
       - Komplexes Repository-Management bei zunehmender Größe.
       - Performance-Probleme bei großen Repos.
   - **Multirepo:**
     - Vorteile:
       - Hohe Modularität und Unabhängigkeit der Services.
       - Weniger Konflikte bei der Zusammenarbeit.
     - Herausforderungen:
       - Mehr Aufwand bei der Synchronisation von Änderungen.
       - Mögliche Inkonsistenzen bei geteilten Abhängigkeiten.

**Im Kontext von Microservices:**

- Monorepo eignet sich besser, wenn Konsistenz, enge Zusammenarbeit und gemeinsame Abhängigkeiten im Vordergrund stehen.

- Multirepo ist ideal, wenn Microservices stark voneinander entkoppelt sind und Teams unabhängig arbeiten sollen.

source: <https://kinsta.com/de/blog/monorepo-vs-multi-repo/#monorepo-vs-multirepo-primre-unterschiede>

## 9. Was ist eine Artifact-Repository und welche Rolle spielt es in Ihrem Prozess?

Ein Artifact Repository speichert build artifacts (Files, welche im Build Prozess erstellt werden z.B. Logs und Reports) welche von CI produziert werden und stellt sie bereit für automatisierte Deplyoments.

source: <https://www.jetbrains.com/teamcity/ci-cd-guide/concepts/artifact-repository/>
