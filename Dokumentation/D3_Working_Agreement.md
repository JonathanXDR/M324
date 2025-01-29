# Working Agreement

## Definition of Ready

1. **Unabhängigkeit und Nutzen**

   - Die User Story ist unabhängig von anderen Stories und erbringt einen klaren Mehrwert.

2. **Ausreichende Detailtiefe**

   - Die User Story ist so formuliert, dass der Entwickler genau weiss, was erledigt werden soll.
   - Die Absicht (Intention) der User Story ist nachvollziehbar und klar beschrieben.
   - Die nötigen Features sind eindeutig und verständlich definiert.

3. **Sinnvolle Akzeptanzkriterien**

   - Die User Story enthält klare und überprüfbare Akzeptanzkriterien, die ihren Nutzen und Umfang definieren.

4. **Freigabe durch den Product Owner (PO)**

   - Die User Story wurde vom PO sorgfältig gelesen und akzeptiert.
   - Der PO hat Rückfragen, Kommentare oder Klarstellungen im Backlog dokumentiert.

5. **Akzeptierte Aufwandsschätzung**
   - Die Story ist ausreichend detailliert verfeinert (Refinement), sodass das Team den Umfang abschätzen konnte.
   - Alle bekannten Abhängigkeiten sind identifiziert und kommuniziert.

## Definition of Done

1. **Vollständiger Code**

   - Der Code erfüllt **sämtliche** vom PO definierten Akzeptanzkriterien.
   - Mindestens zwei andere Entwickler haben den Code im Rahmen eines Reviews geprüft.
     - Idealerweise wechselt die Zusammensetzung der Reviewer regelmässig, damit nicht immer dieselben Personen die Reviews durchführen.

2. **Durchgeführte Tests**

   - Der Code wurde sowohl manuell oder automatisch (z.B. Unit-Tests) getestet.
   - Für die Tests existieren mindestens zwei positive (gute) und zwei negative (schlechte) Testfälle.
   - Es gibt keine fehlgeschlagenen Tests.

3. **Deployment**

   - Der fertige Code wurde auf dem entsprechenden Server oder in der jeweiligen Zielumgebung erfolgreich bereitgestellt.

4. **Einhaltung von Best Practices & Standards**

   - Wenn der Task Coding beinhaltet, ist der Code gemäss den [Clean-Code-Best-Practices & Standards](https://github.com/ryanmcdermott/clean-code-javascript) implementiert.
   - Sämtliche Code-Qualitätskriterien (z.B. Lesbarkeit, Wartbarkeit, keine offensichtlichen Code-Smells) sind eingehalten.

5. **Dokumentation**
   - Falls erforderlich, wurde eine kurze technische und/oder fachliche Dokumentation erstellt oder aktualisiert.
   - Wichtige Informationen sind für das Team transparent (z.B. im Code-Repository) hinterlegt.
