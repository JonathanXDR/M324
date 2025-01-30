# [Ticketsystem / Continuous Improvement](https://gitlab.com/ch-tbz-it/Stud/m324/-/blob/main/Projekt/Z2_Ticketsystem.md?ref_type=heads)

## Ticketsystem und kontinuierliche Verbesserung

Parallel zum Kanban-Board nutzen wir ein Ticketsystem, in dem eingehende Support-Anfragen von Kunden oder internen Fachabteilungen erfasst werden. Der First-Level-Support bearbeitet die Tickets zunächst eigenständig. Falls notwendig, wird das Ticket ohne erneute Neuerfassung an das Entwicklungsteam (Second-Level-Support) eskaliert. Dadurch bleibt der Prozess für alle Beteiligten übersichtlich und vermeidet redundante Einträge.

Der enge Austausch zwischen Ticketsystem und Entwicklungsteam fördert unsere DevOps-Philosophie einer kontinuierlichen Verbesserung: Sobald ein Ticket eskaliert wird, prüfen wir, ob ein Bugfix oder ein neues Feature erforderlich ist und legen bei Bedarf ein entsprechendes Issue in GitHub an.

### Integration mit GitHub Repository und GitHub Projects

Um das Ticketsystem reibungslos in unseren Gesamtprozess einzubinden, haben wir mehrere Abläufe miteinander verknüpft. Die erste Verbindung entsteht durch das automatische oder halbautomatische Anlegen eines Issues in GitHub, sobald ein Ticket vom First-Level- an den Second-Level-Support übergeben wird. Dort sind alle wichtigen Informationen vermerkt, damit das Entwicklerteam zügig agieren kann. Der weitere Fortschritt lässt sich im Kanban-Board verfolgen, weil das neu erstellte Issue direkt einem oder mehreren Sprints und Workflows zugeordnet wird.

Bei der konkreten Bearbeitung halten wir uns an unsere Branching-Strategie: Für jeden Bugfix oder jedes Feature, das aus einem Ticket resultiert, erstellen wir einen Branch (beispielsweise `fix/ticket-123-api-fehler`). Auf diese Weise ist der Kontext zum zugehörigen Ticket klar erkennbar. Die Commits selbst referenzieren das Issue jedoch nur indirekt über den Branch-Namen. Wir haben uns bewusst dagegen entschieden, die jeweilige Issue-Nummer in jeder Commit-Nachricht zu nennen, da es uns ausreicht, die Beziehung über den Branch herzustellen.

Nach der erfolgreichen Umsetzung wird ein Pull Request erstellt und einem Code-Review unterzogen. Sobald ein Merge erfolgt, wird das zugehörige Issue automatisch geschlossen oder in den “Done”-Status verschoben. Das Ticketsystem kann dann auf den aktualisierten Zustand reagieren und das Ticket ebenfalls als erledigt markieren, was wiederum den Kreislauf zur kontinuierlichen Verbesserung schliesst.

### Kennzahlen und Continuous Improvement

Das Ticketsystem bietet zahlreiche Kennzahlen, die wir für die Prozessoptimierung heranziehen. Die Durchlaufzeiten (Lead Time) zeigen beispielsweise, wie schnell wir ein eingehendes Ticket lösen können. Auch die Verteilung zwischen Bugfixes und neuen Features lässt Rückschlüsse auf unsere Prioritätensetzung zu. Schliesslich liefert uns die Einordnung von Fehlerquellen (etwa Datenbank, UI oder Schnittstellen) wertvolle Hinweise, in welchen Bereichen wir uns technisch und organisatorisch verbessern sollten. Diese Erkenntnisse fliessen in die wöchentlichen Sprints, Retrospektiven und das Product Backlog ein, was eine kontinuierliche Weiterentwicklung unseres Produkts sicherstellt.

### Strukturierung der Issues und Aufwandsschätzung

In GitHub unterscheiden wir Epics, User Stories und Tasks. Epics decken grössere Themenblöcke wie ganze Projektphasen ab. User Stories beschreiben Anforderungen aus Anwendersicht. Tasks sind schliesslich die feingliedrigste Ebene der Umsetzung. Für die Aufwandsschätzung nutzen wir T-Shirt-Sizes von XS bis 3XL. Kleinere Einheiten erlauben eine präzisere Schätzung und lassen sich leichter in einem einzelnen Sprint realisieren. Grösste Aufgaben (3XL) unterteilen wir, um eine bessere Planbarkeit zu erreichen.
