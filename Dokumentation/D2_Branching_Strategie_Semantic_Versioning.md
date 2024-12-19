# [Branching Strategie / Semantic Versioning](https://gitlab.com/ch-tbz-it/Stud/m324/-/blob/main/Projekt/D2_Branching_Strategie.md)

## Branching Strategie

### Zielsetzung

Unsere Branching Strategie soll sicherstellen, dass wir strukturiert entwickeln, sauberen Code in den `main` branch integrieren, und eindeutig nachvollziehen können, wann und wie neue Features oder Bugfixes in unsere Applikation eingeflossen sind. Ausserdem soll sie flexibel genug sein, um zukünftige Anforderungen (wie z. B. Code Review, CI/CD) zu erfüllen.

### Überblick der Branches

**Branch-Typen:**

1. **main (Production Branch)**:

   - Enthält jederzeit den stabilen, auslieferbaren Code (Produktionsstand).
   - Neue Versions-Releases werden von hier aus getaggt.
   - Merges auf `main` geschehen nur von `release` oder in Notfällen von `hotfix` Branches.

2. **develop (Integration Branch)**:

   - Hier wird laufend in Richtung nächstes Release entwickelt.
   - Neue Features und Bugfixes werden nach Code-Review von den jeweiligen Feature- oder Bugfix-Branches in `develop` gemerged.
   - Stellt den aktuellen Integrationsstand dar, ist aber nicht unbedingt stabil genug, um in Produktion zu gehen.

3. **feature/\* (Feature Branches)**:

   - Werden von `develop` abgezweigt, um ein bestimmtes Feature umzusetzen.
   - Namenskonvention: `feature/<ID und Titel der User-Story>` z. B. `feature/12-user-auth`.
   - Sobald ein Feature fertig ist, wird eine Pull Request (PR) für den Merge in `develop` eröffnet.
   - Es darf nur nach Code-Review und ggf. bestandenem CI-Test gemerged werden.

4. **bugfix/\* (Bugfix Branches)**:

   - Werden von `develop` abgezweigt, um Fehler zu beheben, die vor dem Release entdeckt werden.
   - Namenskonvention: `bugfix/<ID und Titel der User-Story>` z. B. `bugfix/36-login-timeout`.
   - Es darf nur nach Code-Review und ggf. bestandenem CI-Test gemerged werden.

5. **release/\* (Release Branches)**:

   - Werden von `develop` erstellt, sobald ein bestimmter Funktionsumfang fertiggestellt ist und ein Release vorbereitet werden soll.
   - Namenskonvention: `release/x.y.z` entsprechend dem geplanten Release-Tag (Semantic Versioning)
   - Hier erfolgen letzte Tests, Dokumentation und Feineinstellungen.
   - Ist der Release stabil, wird er in `main` gemerged und mit einem Tag versehen. Ausserdem wird der Release-Branch in `develop` zurückgemerged, um sicherzustellen, dass `develop` auf dem neuesten Stand bleibt.

6. **hotfix/\* (Hotfix Branches)**:
   - Werden von `main` abgezweigt, wenn in der Produktivumgebung dringende Fehler aufgetreten sind, die sofort behoben werden müssen.
   - Namenskonvention: `hotfix/<ID und Titel der User-Story>` z. B. `hotfix/24-password-hash`.
   - Nach Korrektur des Fehlers wird in `main` gemerged und getaggt, sowie ein Rückmerge in `develop` durchgeführt.

### Erlaubte Merge-Wege

- `feature/*` -> `develop`
- `bugfix/*` -> `develop`
- `release/*` -> `main`, danach `release/*` -> `develop`
- `hotfix/*` -> `main`, danach `hotfix/*` -> `develop`

### Visuelle Darstellung

![image](https://wac-cdn.atlassian.com/dam/jcr:cc0b526e-adb7-4d45-874e-9bcea9898b4a/04%20Hotfix%20branches.svg?cdnVersion=2466)

### Branch Naming Conventions

- `main` (statisch)
- `develop` (statisch)
- `feature/<ID und Titel der User-Story>`
- `bugfix/<ID und Titel der User-Story>`
- `release/<Semantic Versioning>`
- `hotfix/<ID und Titel der User-Story>`

## Semantic Versioning

Wir verwenden [Semantic Versioning (SemVer)](https://semver.org/) in der Form `MAJOR.MINOR.PATCH`.

- **MAJOR**: Erhöht sich, wenn inkompatible Änderungen eingeführt werden (z. B. Entfernen von Endpunkten, fundamentale API-Änderungen).
- **MINOR**: Erhöht sich, wenn neue abwärtskompatible Features hinzugefügt werden (z. B. neue Endpunkte, die existierenden Code nicht brechen).
- **PATCH**: Erhöht sich bei abwärtskompatiblen Bugfixes und kleineren Verbesserungen, die keine neuen Features darstellen, aber Fehler beheben.

### Vorgehen im Zusammenhang mit Branching Strategie

1. **Beim Erstellen eines Release Branches**:  
   Wird ein Release Branch erstellt (z. B. `release/1.2.0`), so entspricht die angestrebte Version dem Tag, der beim Merge in `main` vergeben wird.

2. **Nach Merge in main**:  
   Sobald ein Release Branch in `main` gemerged ist, setzen wir einen Git-Tag mit der finalen Version.  
   Beispiel: Merge von `release/1.2.0` in `main` führt zu `v1.2.0`.

3. **Features:**

   Neue Features werden grundsätzlich im Paket mit anderen Änderungen released. Sobald ein Release Branch erstellt wird (z. B. `release/x.y.z`), werden alle fertiggestellten Features aus `develop` integriert und zusammen getestet, bevor der Merge in `main` erfolgt. Einzelreleases von Features sind nur in Ausnahmefällen möglich, wenn ein Feature eine kritische neue Funktionalität bereitstellt, die unabhängig veröffentlicht werden muss.

4. **Bugfixes:**

   Bugfixes, die vor einem Release Branch identifiziert werden, werden wie Features gehandhabt und zusammen im nächsten Release integriert.

5. **Hotfixes**:  
   Ein Hotfix an einer produktiven Version erhöht in der Regel nur die PATCH-Version.  
   Beispiel: Aktuell produktive Version ist `1.2.0`. Ein kritischer Fehler wird per `hotfix/48-server-crash` behoben und nach `main` gemerged, anschliessend wird auf `1.2.1` getaggt.

## Quellen

- <https://danielkummer.github.io/git-flow-cheatsheet/>
- <https://semver.org/>
