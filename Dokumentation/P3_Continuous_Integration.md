# [Continuous Integration](https://gitlab.com/ch-tbz-it/Stud/m324/-/blob/main/Projekt/P3_Praxis_CI.md)

## Versioning and Release Pipeline

### Überblick

Diese GitHub Actions Pipeline automatisiert die Versionierung und Veröffentlichung neuer Releases. Sie wird bei einem Push auf `main` ausgelöst, extrahiert die neue Version aus einem Merge-Commit (`release/x.y.z`), erstellt ein neues Tag und veröffentlicht ein GitHub Release mit Release Notes.

### Ablauf

1. **Repository auschecken**
2. **Node.js einrichten**
3. **Letztes Release-Tag abrufen**
4. **Neue Version aus Merge-Commit extrahieren**
5. **Überprüfen, ob das Tag existiert**
6. **Release Notes generieren** (Änderungen aus Commits mit `feat`, `fix`, `BREAKING CHANGE`)
7. **Git-Tag erstellen und pushen**
8. **GitHub Release veröffentlichen**

### Testing mit Vitest

Bevor der eigentliche Versioning- und Release-Prozess stattfindet, werden im CI-Workflow automatisiert Tests mit [Vitest](https://vitest.dev/) ausgeführt. Dabei wird in der Pipeline (siehe `ci.yml`) ein separater Job namens `test` definiert, der sicherstellt, dass alle Tests erfolgreich durchlaufen, bevor das Release erfolgt.

**Test-Job (Ablauf):**

1. **Repository auschecken**
2. **Node.js einrichten**
3. **Abhängigkeiten installieren**
4. **Unit Tests ausführen**
5. **Integration Tests ausführen**
6. **End-to-End (E2E) Tests ausführen**
   **Vorteile von Vitest:**

- Schnelle Ausführung der Tests (hot-reloading, parallele Ausführung).
- Einfache Konfiguration und Integration in bestehende Node.js-Projekte.
- Unterstützt sowohl Unit-, Integrations- als auch E2E-Tests in einer einheitlichen Umgebung.
- Gutes Zusammenspiel mit Test-Utilities wie `supertest` oder `axios` (siehe bereitgestellte Testdateien).

**Konfiguration:**

- In den Beispiel-Testdateien (`*.test.ts`) wird Vitest mit externen Libraries (z. B. `supertest`, `axios`) kombiniert, um HTTP-Anfragen an den lokal gestarteten Server zu stellen und Datenbanken via Prisma anzusprechen.
- Alle Tests liegen in entsprechend benannten Ordnern (`unit`, `int`, `e2e`).

**Wichtig:**

- Der `test`-Job muss erfolgreich abgeschlossen sein, damit der nachfolgende Job `versioning_release` ausgelöst wird.
- Schlägt einer der Testschritte fehl, bricht die Pipeline ab und es wird kein neues Release erstellt.

### Voraussetzungen

- Merge-Commits müssen das Format `release/x.y.z` enthalten.
- Repository benötigt Schreibrechte (`contents: write`).
- `secrets.GITHUB_TOKEN` für die Veröffentlichung erforderlich.

### Vorteile

- **Automatisierte Versionierung:** Der manuelle Aufwand sinkt, da Tags automatisch generiert werden.
- **Strukturierte Release Notes:** Änderungen (Features, Fixes, Breaking Changes) werden automatisch erfasst und in Markdown übersichtlich dargestellt.
- **Direkte Veröffentlichung auf GitHub:** Neues Release und entsprechendes Tag stehen sofort zur Verfügung.
- **Sichere Codebasis durch Tests mit Vitest:** Potenzielle Fehler werden frühzeitig erkannt, was eine höhere Code-Qualität gewährleistet.
