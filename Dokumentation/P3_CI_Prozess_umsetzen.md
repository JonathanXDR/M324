# CI-Pipeline
## Versioning and Release Pipeline

## Überblick
Diese GitHub Actions Pipeline automatisiert die Versionierung und Veröffentlichung neuer Releases. Sie wird bei einem Push auf `main` ausgelöst, extrahiert die neue Version aus einem Merge-Commit (`release/x.y.z`), erstellt ein neues Tag und veröffentlicht ein GitHub Release mit Release Notes.

## Ablauf
1. **Repository auschecken**
2. **Node.js einrichten**
3. **Letztes Release-Tag abrufen**
4. **Neue Version aus Merge-Commit extrahieren**
5. **Überprüfen, ob das Tag existiert**
6. **Release Notes generieren** (Änderungen aus Commits: `feat`, `fix`, `BREAKING CHANGE`)
7. **Git-Tag erstellen und pushen**
8. **GitHub Release veröffentlichen**

## Voraussetzungen
- Merge-Commits müssen das Format `release/x.y.z` enthalten.
- Repository benötigt Schreibrechte (`contents: write`).
- `secrets.GITHUB_TOKEN` für die Veröffentlichung erforderlich.

## Vorteile
- **Automatisierte Versionierung**
- **Strukturierte Release Notes**
- **Direkte Veröffentlichung auf GitHub**

## Fehlerbehandlung
Falls der Workflow fehlschlägt:
- **Version nicht extrahierbar** → Stelle sicher, dass der Merge-Commit die Versionsnummer enthält.
- **Tag existiert bereits** → Der Prozess wird übersprungen.
- **Fehlende Berechtigungen** → Prüfe Repository-Einstellungen und Token.

