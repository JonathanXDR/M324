# [Meetings / Arbeitsprozesse](https://gitlab.com/ch-tbz-it/Stud/m324/-/blob/main/Projekt/D3_Meetings_Prozesse.md)

## Meetings

### Rollen

| Rolle             | Beschreibung                                                                                                                                                                                                          | Name                                                |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **Scrum Master**  | Verantwortlich für die Implementierung und Einhaltung des Scrum-Prozesses. Unterstützt das Team dabei, effektiv zu arbeiten, beseitigt Hindernisse und stellt sicher, dass Scrum-Praktiken korrekt angewendet werden. | Zakria Samma                                        |
| **Product Owner** | Vertritt die Interessen der Stakeholder und Endbenutzer. Verantwortlich für die Definition und Priorisierung der Produktanforderungen im Product Backlog, um wertvolle Ergebnisse sicherzustellen.                    | Zakria Samma                                        |
| **Stakeholder**   | Person oder Gruppe mit Interesse am Projekt, die Anforderungen, Feedback und wichtige Entscheidungen liefert.                                                                                                         | Thanam Pangri                                       |
| **Developer**     | Teammitglieder, die Anforderungen umsetzen, testen und funktionierende Produktinkremente gemäss den Vorgaben des Product Owners liefern.                                                                              | Jonathan Russ, Pascal Rieder, Jon Landa, Kalel Jong |

### Meeting-Typen

#### Daily Meetings

- Finden wöchentlich mitten im Sprint statt.
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

#### 21.11.2024

**Daily Meeting:**

- User Stories für alle Aufgaben erstellen.
- Subtasks zu User Stories erfassen und zuordnen.
- Planung/Meeting-Struktur definieren.
- KVP für den Unterrichtstag planen.

---

#### 02.12.2024

---

#### 12.12.2024

**Retrospective:**

- **Positives:**
  - Konstruktive Kritik am Stakeholder führte zu einer Notenverbesserung um 0.2.
  - D2 wurde schneller als geplant abgeschlossen; Aufgaben-Grösse wurde falsch eingeschätzt.
- **Verbesserungen:**
  - Conventional Commits einführen, um die zugehörigen User Stories besser zu identifizieren.
  - Neue User Story IDs (z. B. `T5-1`).

---

#### 19.12.2024

**Daily Meeting:**

- Definition von Conventional Commits.
- T5 fertigstellen.
- D2 anpassen.
- Lernjournal (D5) regelmässig erfassen und pushen.
- User Stories erstellen.
- Anpassung der User Story IDs (z. B. `User Story: Band erfassen`).

**Retrospective:**

- **Positives:**
  - Erstes Review erfolgreich durchgeführt.
  - Viele User Stories und Tasks auf dem Kanban erstellt.
  - Fokus auf Programmieren bei T5.
- **Verbesserungen:**
  - Mehr Zeit für Conventional Commits.
  - Neue User Story IDs definieren.
  - Tasks für Rollenberechtigungen erstellen.
  - User Stories und Tasks für P3, P4, Z3 erstellen.
  - Ablenkungen im Team reduzieren.

---

#### 09.01.2025

**Daily Meeting:**

- Alle verbleibenden Tasks von P2 schätzen.
- Beginn mit P2.

**Retrospective:**

- **Positives:**
  - _Noch offen._
- **Verbesserungen:**
  - _Noch offen._

---

#### 16.01.2025

**Daily Meeting:**

- Weiterarbeit an P2 (kontinuierliches Arbeiten).

**Retrospective:**

- **Positives:**
  - Branching-Strategie eingehalten.
  - Commit-Strategie eingehalten.
  - T5-Review verlief gut.
  - Produktives Arbeiten.
- **Verbesserungen:**
  - Scrum Master war abwesend; Diskussion über Wechsel des Scrum Masters.

## Arbeitsprozesse

### Commit Messages

Damit die Commit Messages einheitlich und aussagekräftig sind, verwenden wir [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Die Commit Messages folgen dem Schema:

```
<type>[optional scope]: <description>
```

Beispiel:

```
feat: add new feature
fix: correct minor typo
docs: update README.md
```

Damit dieses Konventionen auch eingehalten werden, wird vor jedem Git Commit ein Git Hook ausgeführt, der die Commit Message überprüft.

### Code Qualität
