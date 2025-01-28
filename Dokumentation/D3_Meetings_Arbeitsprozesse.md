# [Meetings / Arbeitsprozesse](https://gitlab.com/ch-tbz-it/Stud/m324/-/blob/main/Projekt/D3_Meetings_Prozesse.md)

## Scrum-Prozess

### Rollen und Verantwortlichkeiten

In unserem Projektteam haben wir verschiedene Scrum-Rollen definiert, die jeweils mit spezifischen Verantwortlichkeiten verbunden sind. Als Scrum Master fungiert Zakria Samma, der für die erfolgreiche Implementierung und Aufrechterhaltung der Scrum-Praktiken verantwortlich ist. In dieser Rolle unterstützt er das Team dabei, effizient zu arbeiten, beseitigt auftretende Hindernisse und stellt sicher, dass die Scrum-Prinzipien korrekt angewendet werden.

Jonathan Russ übernimmt die Rolle des Product Owners. In dieser Position vertritt er die Interessen der Stakeholder und Endnutzer. Er ist verantwortlich für die Definition und Priorisierung der Produktanforderungen im Product Backlog, um sicherzustellen, dass wertvolle Ergebnisse erzielt werden.

Als wichtiger Stakeholder bringt Thanam Pangri seine Expertise ein und liefert wesentliche Anforderungen, Feedback und Entscheidungen für das Projekt. Das Entwicklungsteam besteht aus Jonathan Russ, Pascal Rieder, Jon Landa und Kalel Jong. Sie setzen die Anforderungen um, führen Tests durch und liefern funktionale Produktinkremente gemäss den Vorgaben des Product Owners.

| Rolle             | Beschreibung                                                                                                                                                                                                          | Name                                                |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **Scrum Master**  | Verantwortlich für die Implementierung und Einhaltung des Scrum-Prozesses. Unterstützt das Team dabei, effektiv zu arbeiten, beseitigt Hindernisse und stellt sicher, dass Scrum-Praktiken korrekt angewendet werden. | Zakria Samma                                        |
| **Product Owner** | Vertritt die Interessen der Stakeholder und Endbenutzer. Verantwortlich für die Definition und Priorisierung der Produktanforderungen im Product Backlog, um wertvolle Ergebnisse sicherzustellen.                    | Jonathan Russ                                       |
| **Stakeholder**   | Liefert Anforderungen, Feedback und wichtige Entscheidungen.                                                                                                                                                          | Thanam Pangri                                       |
| **Developer**     | Teammitglieder, die Anforderungen umsetzen, testen und funktionierende Produktinkremente gemäss den Vorgaben des Product Owners liefern.                                                                              | Jonathan Russ, Pascal Rieder, Jon Landa, Kalel Jong |

### Sprint-Planung und Weekly Meetings

Unser Entwicklungsprozess basiert auf wöchentlichen Sprints, die einen überschaubaren Zeitrahmen für die Umsetzung definierter Ziele bieten. Die Weekly Meetings finden einmal pro Woche (während des Unterrichts) am anfang des Sprints statt und sind daher auch gleichzeitig die Sprint-Planning Meetings. In diesen Meetings besprechen wir drei wesentliche Aspekte: Zunächst erfolgt eine Überprüfung der in der vorherigen Woche abgeschlossenen Aufgaben, die vom Stakeholder validiert werden. Anschliessend planen wir die anstehenden Aufgaben und User Stories für die aktuelle Woche bzw. Sprint. Abschliessend werfen wir einen kurzen Blick auf die Erkenntnisse aus der letzten Retrospektive, um sicherzustellen, dass wir die vereinbarten Verbesserungsmassnahmen umsetzen.

### Sprint-Retrospektive

Die Sprint-Retrospektive ist ein wesentlicher Bestandteil unseres kontinuierlichen Verbesserungsprozesses. Sie findet wöchentlich am Ende des Unterrichtstages, üblicherweise donnerstags von 16:15 bis 16:30 Uhr, statt. In dieser Zeit reflektiert das Team gemeinsam über die vergangene Woche und identifiziert Verbesserungspotenziale für den nächsten Sprint. Die gesammelten Erkenntnisse werden dokumentiert und in konkrete Massnahmen umgesetzt. Durch diesen regelmässigen Prozess stellen wir sicher, dass wir uns als Team kontinuierlich weiterentwickeln und unsere Arbeitsweise optimieren.

### Meeting-Typen

#### Weekly Meetings

- Finden wöchentlich am Anfang des Sprints statt.
- Themen:
  - Besprechung der am Vortag gelösten Aufgaben (vom Stakeholder kontrolliert und reflektiert).
  - Planung der täglichen Aufgaben und User Stories.
  - Kurzes Update zur gestrigen Retrospektive.

#### Retrospective (KVP)

- Wöchentliche Meetings am Ende des Sprints (Donnerstags ca. 16:15 - 16:30).
- Themen:
  - Reflexion der Woche.
  - Verbesserungsvorschläge für die nächste Woche.

### Meeting-Protokolle

Die Meeting-Protokolle können [hier](../Dokumentation/D3_Meeting_Protokolle.md) eingesehen werden. Sie enthalten eine Zusammenfassung der besprochenen Themen, der erzielten Ergebnisse und der vereinbarten Massnahmen.

## Aufgabenverwaltung

### GitHub Projects und Kanban-System

Für die Organisation und Verwaltung unserer Aufgaben nutzen wir GitHub Projects mit einem Kanban-Board. Dieses visuelle System ermöglicht es uns, den Fortschritt unserer Arbeit transparent darzustellen und effektiv zu verwalten. Unser Board ist in mehrere Spalten unterteilt, die den Workflow abbilden:

1. **Backlog**

   - Noch nicht gestartete Items
   - Grössere Epics/User Stories oder Ideen, die später umgesetzt werden

2. **Ready**

   - Aufgaben, die zur Bearbeitung freigegeben sind
   - Klare Anforderung und geschätzter Umfang

3. **In Progress**

   - Aufgaben, an denen gerade gearbeitet wird
   - Typischerweise wird hier auch ein PR eröffnet

4. **Review**

   - Fertig implementierte Items, die auf Code-Review warten
   - Möglicherweise offener Pull Request

5. **Rework**

   - Items, die nach dem Review überarbeitet werden müssen
   - Fehler, Verbesserungen oder zusätzliche Anforderungen

6. **Done**
   - Abgeschlossene und abgenommene Aufgaben
   - Code ist gemergt und Tests sind erfolgreich

### Strukturierung der Issues

Die Verwaltung unserer Aufgaben erfolgt durch ein klar definiertes System von Issues in GitHub. Wir unterscheiden dabei zwischen verschiedenen Hierarchieebenen, die durch spezifische Prefixe gekennzeichnet werden.

Epics stellen dabei die oberste Ebene dar und werden mit dem Prefix `Epic:` versehen. Sie repräsentieren grössere Projektphasen, wie beispielsweise `Epic: P2`.

User Stories, gekennzeichnet durch den Prefix `User Story:`, beschreiben konkrete Anforderungen aus Anwendersicht. Ein Beispiel hierfür ist `User Story: Band erfassen`, das die Funktionalität zur Erfassung einer neuen Band im System beschreibt.

Die kleinsten Einheiten sind Tasks, markiert mit dem Prefix `Task:`, die spezifische Arbeitsaufgaben darstellen, wie etwa `Task: Fehlervalidierung beim erfassen einer Band`.

#### Aufwandsschätzung

Für die Aufwandsschätzung verwenden wir ein T-Shirt-Sizes, welche uns helfen, den Umfang von Aufgaben besser einzuordnen. Die Grössen reichen von XS für sehr kleine Aufgabenbis hin zu 3XL für komplexe Aufgaben bzw. Projektphasen, die eine weitere Unterteilung erfordern. Diese Schätzungen helfen uns bei der Sprint-Planung und der gleichmässigen Verteilung der Arbeitslast. Folgend eine kurze Übersicht der Grössen und ihrer genauen Bedeutung:

| Grösse | Bedeutung                                             | Effekitve Arbeitszeit |
| ------ | ----------------------------------------------------- | --------------------- |
| XS     | sehr kleine Aufgabe                                   | ca. < 0.5 Stunden     |
| S      | kleine Aufgabe                                        | ca. 0.5 - 1 Stunden   |
| M      | mittlere Aufgabe                                      | ca. 1 - 2 Stunden     |
| L      | grosse Aufgabe                                        | ca. 2 - 2.5 Stunden   |
| XL     | sehr grosse Aufgabe                                   | ca. 2.5 - 3.5 Stunden |
| 2XL    | sehr umfangreich (ggf. Split erforderlich)            | 3.5 - 4.5 Stunden     |
| 3XL    | extrem gross (sollte in mehrere Tasks zerlegt werden) | > 4.5 Stunden         |

---

## Code-Qualität und Standards

### Branching-Strategie

Die Entwicklung des Projekts basiert auf einer durchdachten Branching-Strategie, die sowohl die Entwicklung neuer Features als auch die Wartung des Produktivsystems unterstützt. Der main-Branch repräsentiert dabei stets den produktiven Stand der Anwendung. Parallel dazu existiert der develop-Branch als Integrationsumgebung für neue Entwicklungen.

Für die Entwicklung neuer Features erstellen wir feature-Branches, die vom develop-Branch abzweigen. Bugfixes vor einem Release werden in bugfix-Branches bearbeitet. Für die Vorbereitung von Releases nutzen wir release-Branches, während kritische Fehlerbehebungen im Produktivsystem über hotfix-Branches erfolgen.

Die genau Branching-Strategie und Versionierung, kann [hier](../Dokumentation/D2_Branching_Strategie_Semantic_Versioning.md) eingesehen werden.

### Commit-Standards

Wir verwenden [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) als Standard für unsere Commit-Messages. Diese Konvention ermöglicht eine klare und einheitliche Dokumentation der Änderungen im Code. Die wichtigsten Prefixe sind dabei:

- `feat`: für neue Funktionalitäten
- `fix`: für Fehlerbehebungen
- `docs`: für Dokumentationsänderungen
- `style`: für Code-Style-Anpassungen
- `refactor`: für Code-Überarbeitungen
- `test`: für Test-bezogene Änderungen
- `chore`: für Wartungsarbeiten

#### Git Hooks

Die Qualitätssicherung unseres Codes wird durch verschiedene automatisierte Prozesse unterstützt. Mit Hilfe von [Husky](https://github.com/typicode/husky) und [lint-staged](https://github.com/lint-staged/lint-staged) haben wir [Git Hooks](https://git-scm.com/book/ms/v2/Customizing-Git-Git-Hooks) eingerichtet, die vor jedem Commit eine Reihe von Überprüfungen durchführen. Dazu gehören das Linting mit [ESLint](https://eslint.org/), die Formatierung mit [Prettier](https://prettier.io/) und die Typenprüfung mit [TypeScript](https://www.typescriptlang.org/). Zusätzlich wird die Einhaltung unserer Commit-Message-Konventionen überprüft.

### Code-Review-Prozess

Ein wesentlicher Bestandteil unserer Qualitätssicherung ist der Code-Review-Prozess. Jede Änderung muss von mindestens zwei anderen Teammitgliedern überprüft und genehmigt werden, bevor sie in den develop-Branch integriert werden kann. Bei den Reviews achten wir besonders auf die Einhaltung unserer Coding-Standards, eine ausreichende Testabdeckung und vollständige Dokumentation.

### Teststrategie

Unsere Teststrategie umfasst mehrere Ebenen, um die Qualität unserer Anwendung sicherzustellen. Auf der untersten Ebene führen wir Unit-Tests durch, die einzelne Komponenten und Funktionen isoliert prüfen. Darüber hinaus implementieren wir Integrationstests, die das Zusammenspiel verschiedener Komponenten, insbesondere unserer API-Endpunkte, verifizieren. System-Tests validieren schliesslich die End-to-End-Funktionalität unserer Workflows.

## Datenbank-Management

### Architektur und Werkzeuge

Unsere Datenbankarchitektur basiert auf [MariaDB](https://mariadb.org/) als primärem Datenbanksystem. Für die Interaktion mit der Datenbank nutzen wir [Prisma](https://www.prisma.io/) als Object-Relational Mapping (ORM) Tool, das uns eine typsichere und effiziente Datenbankanbindung ermöglicht. In der lokalen Entwicklungsumgebung setzen wir auf [Docker](https://www.docker.com/) für die Containerisierung der Datenbank, während wir in der Produktivumgebung [Amazon RDS](https://aws.amazon.com/de/rds/) nutzen.

Mehr Infos über die verwendeten Technologien und Frameworks können [hier](../Dokumentation/D1_Applikation_Technologien.md) in Erfahrung gebracht werden.

### Datenbank-Prozesse

Die Verwaltung unseres Datenbankschemas erfolgt über [Prisma Migrations](https://www.prisma.io/docs/orm/prisma-migrate/understanding-prisma-migrate). Diese Migrations dokumentieren alle Schemaänderungen und ermöglichen es uns, die Datenbankstruktur konsistent und nachvollziehbar weiterzuentwickeln. Nach der Ausführung von Migrationen wird automatisch ein Seeding-Prozess begonnen, der die Datenbank mit initialen Testdaten befüllt.

### Backup-Strategie

In der Produktivumgebung nutzen wir die automatisierten Backup-Funktionen von [Amazon RDS](https://aws.amazon.com/de/rds/), um regelmässige Sicherungen unserer Datenbank zu erstellen. In der lokalen Entwicklungsumgebung werden die Daten über [Docker-Volumes](https://docs.docker.com/engine/storage/volumes/) persistent gespeichert, wodurch sie auch nach einem Neustart des Containers erhalten bleiben.

## API-Standards und Dokumentation

Unsere API folgt den Prinzipien des REST-Architekturstils. Die Routen sind ressourcenbasiert gestaltet und nutzen die Standard-HTTP-Methoden `GET`, `POST`, `PUT` und `DELETE`. Für die Dokumentation der API pflegen wir eine [Postman Collection](../Postman/M324.postman_collection.json), die alle verfügbaren Endpunkte, deren Parameter und erwartete Antwortformate beschreibt. Diese Dokumentation enthält auch Beispiele und Testfälle, die die Verwendung der API demonstrieren.

## Sicherheit und Konfiguration

### Umgebungsvariablen und Secrets

Die Verwaltung sensibler Konfigurationsdaten erfolgt über Umgebungsvariablen, welche nicht im Code oder in der Versionskontrolle gespeichert werden. Für das einfachere Aufsetzen der Umgebungsvariablen steht allerdings eine `example.env.local`-Datei zur Verfügung, die als Vorlage für die Konfiguration dient.

In der lokalen Entwicklung nutzen wir eine `.env.local`-Datei für die Entwicklungs-Konfigurationen und eine `.env.production`-Datei für die Konfiguration auf Produktion, um beispielsweise lokal die Produktions-Datenbank zu verwenden.

Produktive Secrets, die nicht lokal gespeichert sind, werden sicher in den [GitHub Actions Secrets](https://docs.github.com/de/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions) oder [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables) gespeichert und sind ansonsten nur im Rahmen der CI/CD-Pipeline verfügbar.

### Continuous Integration und Delivery

Unsere CI/CD-Pipeline automatisiert den gesamten Prozess von der Entwicklung bis zur Bereitstellung. Die Continuous Integration umfasst automatisierte Tests, Code-Qualitätsprüfungen und Build-Verifikationen. Das Continuous Delivery erfolgt über Vercel, wo unsere Anwendung automatisch deployed wird. Dabei werden umgebungsspezifische Konfigurationen berücksichtigt und Rollback-Möglichkeiten vorgehalten.

Die Pipeline enthält auch ein umfangreiches Monitoring- und Logging-System, das uns hilft, die Performance und Stabilität unserer Anwendung kontinuierlich zu überwachen und bei Bedarf schnell reagieren zu können.
