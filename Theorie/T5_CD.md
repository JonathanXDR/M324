# Continuous Deployment

## 1. Was ist Continuous Deployment und wie wird es umgesetzt?

Das Continuous Deployment ist eine Strategie für die Entwicklung und Freigabe von Software. Es baut auf CI auf und sein Job ist es die Änderungen nach dem CI automatisch für die Produktionsumgebung freizugeben. CD sollte völlig automatisch geschehen und wird desshalb vorallem mit Pipelines ermöglicht welche automatisch starten nachdem eine neue Code-Änderung durch die CI-Pipeline hindurchgekommen ist.

source: <https://www.ibm.com/de-de/topics/continuous-deployment>

## 2. Was ist der Unterschied zwischen Continuous Deployment und Continuous Delivery?

Continuous Deployment ist eine Erweiterung des Continuous-Delivery Konzepts. Releases welche vom Continuous Delivery vorangetrieben werden, werden schlussendlich vom Continuous Deployment bereitgestellt. Man kann das Continuous Deployment also auch als einen vollständig automatisierten Release-Prozess betrachten.

source: <https://www-puppet-com.translate.goog/blog/continuous-delivery-vs-deployment?_x_tr_sl=en&_x_tr_tl=de&_x_tr_hl=de&_x_tr_pto=rq>

## 3. Was sind die Vor- und Nachteile von Continuous Delivery und Continuous Deployment?

### Continuous Delivery

#### Vorteile

- **Kontrollierte Freigabe**: Manuelle Freigabe ermöglicht Qualitätsprüfung vor Produktion.
- **Reduzierte Risiken**: Häufiges Testen minimiert Produktionsprobleme.
- **Flexibilität**: Freigabe kann an strategische Anforderungen angepasst werden.

#### Nachteile

- **Manueller Aufwand**: Verlangsamt den Prozess.
- **Freigabeabhängigkeit**: Schlechte Prozesse können Engpässe schaffen.
- **Unvollständige Automatisierung**: Nutzt Automatisierung nicht vollständig aus.
- **Tests**: Da kein automatischer Prozess für das Deployment verantwortlich ist, müssen zahlreiche Tests durchgeführt werden, die für die Nachhaltigkeit und Kompatibilität der Abhängigkeiten sorgen.

**Beispiel**: Ein Team testet automatisch, entscheidet aber manuell, ob ein neues Feature freigegeben wird.

---

### Continuous Deployment

#### Vorteile

- **Maximale Automatisierung**: Änderungen werden automatisch ausgerollt.
- **Schnelle Fehlerbehebung**: Kleinere Deployments erleichtern Debugging.
- **Kundennutzen**: Features stehen sofort zur Verfügung.

#### Nachteile

- **Höheres Risiko**: Fehler können direkt in die Produktion gelangen.
- **Strengere Tests**: Automatisierung muss robust sein.
- **Komplexere Infrastruktur**: Erfordert fortschrittliche Tools.

**Beispiel**: Ein neues Feature wird automatisch in die Produktion gebracht, sobald alle Tests erfolgreich sind.

---

### Vergleich

| **Aspekt**           | **Continuous Delivery**            | **Continuous Deployment**          |
| -------------------- | ---------------------------------- | ---------------------------------- |
| **Freigabe**         | Manuell                            | Automatisch                        |
| **Geschwindigkeit**  | Moderat                            | Hoch                               |
| **Risikomanagement** | Höhere Kontrolle                   | Höhere Testanforderungen           |
| **Einsatzbereich**   | Konservativ, stabilitätsorientiert | Innovations- und feedbackgetrieben |

source: <https://www-puppet-com.translate.goog/blog/continuous-delivery-vs-deployment?_x_tr_sl=en&_x_tr_tl=de&_x_tr_hl=de&_x_tr_pto=rq>

## 4. Was ist Blue-Green Deployment und wie wird es implementiert?

Beim Blue-Green Deployment laufen die alte (blaue) und neue (grüne) Version der Software gleichzeitig in verschiedenen Umgebungen. Wenn die neue Version gründlich getestet wurde und alle Anforderungen erfüllt, wird der Load Balancer so konfiguriert, dass der gesamte Verkehr auf die neue Version umgeleitet wird. Der Vorteil liegt in der schnellen Bereitstellung und der Möglichkeit, problemlos zwischen den Versionen zu wechseln. Allerdings können die Kosten steigen, da beide Versionen gleichzeitig betrieben werden müssen.

<img src="https://www.apwide.com/wp-content/uploads/2024/07/Copy-of-Blue-Green-Deployment-Strategy-2.gif"/>

source: <https://launchdarkly.com/blog/deployment-strategies/>, <https://www.apwide.com/8-deployment-strategies-explained-and-compared>

## 5. Was ist Canary Deployment und wie wird es implementiert?

Beim Canary Deployment wird die neue Version schrittweise eingeführt, indem der Produktionsverkehr langsam von der alten Version auf die neue umgeleitet wird. Zum Beispiel könnte die alte Version zunächst 75 % des Verkehrs übernehmen, während die neue Version nur 25 % bearbeitet.

**Phase 1**: In dieser Phase wird die neue Version nur einer kleinen Gruppe von Benutzern, den sogenannten „Canary“-Benutzern, zur Verfügung gestellt. Diese Gruppe wird entweder zufällig oder anhand bestimmter Merkmale ausgewählt.

**Phase 2**: Wenn Phase 1 erfolgreich verläuft, wird die neue Version schrittweise allen Nutzern zugänglich gemacht. Falls jedoch Probleme auftreten, kann die neue Version einfach zurückgesetzt werden, indem der Verkehr wieder auf die ältere Version umgeleitet wird.
Canary Deployment ermöglicht eine gründliche Leistungsüberwachung und erleichtert das Zurücksetzen auf die alte Version, falls etwas schiefgeht. Allerdings erfordert diese Methode eine gut strukturierte Testumgebung und kann langsamer und zeitintensiver sein als andere Deployment-Strategien.

<img src="https://www.apwide.com/wp-content/uploads/2024/07/Copy-of-Canary-Deployment-Strategy-1.gif"/>

source: <https://launchdarkly.com/blog/deployment-strategies/>, <https://www.apwide.com/8-deployment-strategies-explained-and-compared>

## 6. Was ist A/B Testing?

Beim A/B Testing wird die neue Version der Software parallel zur alten Version bereitgestellt, jedoch nur für eine ausgewählten Benutzergruppe. Diese Gruppe wird anhand von Faktoren wie Standort, Gerätetyp oder Betriebssystem ausgewählt, um die Leistung der neuen Funktionen zu testen. Nachdem genug Daten gesammelt wurden, wird die Version mit den besten Ergebnissen für alle Nutzer freigegeben. Diese Methode ermöglicht auf Daten basierten Entscheidungen, erfordert jedoch komplexe Technik wie Load Balancer und ist aufwändiger in der Implementierung. Der wesentliche Unterschied zum Canary-Deployment ist der Fokus auf Performance der neuen Version und Nutzerfeedback, um Features anzupassen. Wobei Canary sich nur um die schrittweise Bereitstellung kümmert.
<img src="https://www.apwide.com/wp-content/uploads/2024/07/AB-Testing-Deployment-Strategy-2.gif"/>

**Beispiel**: Spotify führt ständig A/B Tests durch, bevor neue Features allgemein zu veröffentlichen. Wenn sich eine Feature vollständig implementiert und getested wurde, wird sie schrittweise mit einer Art Canary Deployment bereitgestellt

source: <https://launchdarkly.com/blog/deployment-strategies/>
source: <https://www.apwide.com/8-deployment-strategies-explained-and-compared>
source: <https://community.spotify.com/t5/Android/How-our-app-release-process-works/td-p/1237092>

## 7. Feature Toggles

Feature-Flag-Toggles oder nur Feature-Toggles werden bereits in Zusammenhang mit einer entsprechenden Feature-Branching-, oder GitFlow-Strategie definiert und können im CD-Prozess verwendet werden. Features können anhand diesen Toggles aktiviert oder deaktiviert werden, was es ermöglicht, den Code bereits vor der Aktivierung der Funktion zu integrieren. Die häufige Verwendung diesen Toggles kann allerdings zur Unübersichtlichkeit der Code-Basis beitragen.

## 8. Was ist eine Rollback Strategy

Rollback bezeichnet den Vorgang, bei dem Änderungen an einem System oder einer Datenbank rückgängig gemacht werden, um den Zustand vor einer bestimmten Operation wiederherzustellen. Dies kann notwendig sein, wenn Fehler auftreten oder eine Änderung nicht wie gewünscht funktioniert hat. Eine Rollback Strategie beschreibt die Art und Weise des Rückgangs zu einer ursprünglichen Version. Bedingungen einer effektiven Rollback Strategie sind vorallem:

1. **Frühzeitige Planung**: Eine Rollback-Strategie sollte bereits vor der Durchführung von Änderungen definiert werden, um sicherzustellen, dass bei einem Problem alle notwendigen Schritte zur Wiederherstellung eines stabilen Systems bekannt sind.
2. **Backups**: Eine der wichtigsten Massnahmen für eine Rollback-Strategie ist das regelmässige Erstellen von Backups, bevor Änderungen vorgenommen werden. So können alle Daten oder Systemzustände auf einen sicheren Punkt vor der Änderung zurückgesetzt werden.
3. **Automatisierte Rollbacks**: In vielen modernen Systemen werden Rollbacks automatisiert. Beispielsweise kann ein automatisches Rollback durchgeführt werden, wenn ein Fehler nach einer Datenbankmigration erkannt wird.
4. **Testen der Rollback-Strategie**: Es ist wichtig, dass die Rollback-Strategie regelmässig getestet wird, um sicherzustellen, dass sie im Notfall auch tatsächlich funktioniert und alle erforderlichen Daten und Zustände wiederhergestellt werden.
5. **Kommunikationsplan**: Bei grösseren Systemen oder in Unternehmen sollte ein klarer Plan für die Kommunikation während eines Rollbacks bestehen. Es sollte klar sein, wer was tun muss, wenn ein Rollback notwendig wird, um den reibungslosen Ablauf zu gewährleisten

source: <https://www.harness.io/blog/understanding-software-rollbacks#:~:text=It's%20a%20planned%20part%20of,the%20developer%20can%20continue%20work.>, <https://www.linkedin.com/pulse/importance-rollback-strategies-system-changes-joshua-caldwell-48nbe>, <https://www.atlassian.com/agile/software-development/branching>

## 9. Was ist Continuous Monitoring und wie wird es umgesetzt?

Continuous Monitoring ist ein systematischer Ansatz, um Anwendungen, Systeme und Infrastruktur kontinuierlich zu überwachen. Es ist ein zentraler Bestandteil von DevOps und zielt darauf ab, Performance, Sicherheit und Compliance sicherzustellen. Dabei werden Echtzeit-Daten aus verschiedenen Quellen gesammelt, analysiert und zur Identifizierung von Problemen genutzt. Continuous Monitoring hilft Unternehmen, Probleme proaktiv zu erkennen und schneller auf Systemänderungen oder Angriffe zu reagieren.
Umsetzungsschritte:

1. Datenquellen definieren: Identifikation der zu überwachenden Systeme und Metriken wie Server-Performance, Datenbankaktivitäten oder Netzwerkverkehr.
2. Überwachungs-Tools einsetzen: Tools wie Nagios, Prometheus, Zabbix oder Cloud-native Lösungen wie AWS CloudWatch implementieren.
3. Automatische Alarme konfigurieren: Regeln und Schwellenwerte festlegen, bei deren Überschreitung Alarme ausgelöst werden.
4. Datenvisualisierung: Dashboards mit Tools wie Grafana erstellen, um Echtzeit-Informationen darzustellen.
   Integration in CI/CD-Pipelines: Monitoring-Tools in DevOps-Prozesse einbinden, um kontinuierliche Überwachung mit Entwicklungszyklen zu verknüpfen.

source: <https://www.headspin.io/blog/what-is-continuous-monitoring-in-devops>

## 10. Wie werden Passwörter sicher gespeichert?

Die sicherste Methode zur Speicherung von Passwörtern ist die Verwendung von Einweg-Hash-Algorithmen. Hashing ist ein Verfahren, bei dem Passwörter in kryptografisch verschlüsselte Zeichenfolgen umgewandelt werden, die nicht ohne Weiteres in das ursprüngliche Passwort zurückübersetzt werden können.
Empfohlene Techniken:

1. Bcrypt: Ein adaptiver Hash-Algorithmus, der den Arbeitsaufwand zur Entschlüsselung anpassen kann.
2. Argon2: Gewinner des Password Hashing Competition (PHC), optimiert für hohe Sicherheit gegen Angriffe auf Rechenleistung.
3. PBKDF2: Standardisierte Methode zur Passwortableitung mit Salt und mehreren Iterationen.

Best Practices:

- Salting: Füge jedem Passwort einen eindeutigen Salt hinzu, bevor es gehasht wird, um Rainbow-Table-Angriffe zu verhindern. (In einer Rainbow-Tabelle werden Hash-Werte für alle möglichen Passwort-Kombinationen berechnet und gespeichert.)
- Kein Speichern von Klartext-Passwörtern: Passwörter nie im Klartext speichern.

source: <https://beebuzz.media/wie-speichere-ich-passwoerter-sicher-in-der-datenbank>

## 11. Welche Arten von Deployment gibt es?

Direktes Deployment auf den Server:

- Beschreibung: Der Quellcode wird direkt auf dem Server kompiliert und bereitgestellt.
- Notwendige Software/Umgebung:
  - Zugriff auf den Zielserver
  - Entwicklungswerkzeuge wie Compiler und Abhängigkeiten
  - Versionsverwaltungssysteme (z. B. Git)

Deployment mittels Containerisierung (z. B. Docker):

- Beschreibung: Anwendungen werden in Containern verpackt, die alle notwendigen Abhängigkeiten enthalten, und auf dem Zielsystem ausgeführt.
- Notwendige Software/Umgebung:
  - Docker
  - Container-Orchestrierungstools (z. B. Kubernetes) für grössere Umgebungen

Deployment über Container-Orchestrierung (z. B. Docker Swarm, Kubernetes):

- Beschreibung: Containerisierte Anwendungen werden über ein Orchestrierungstool verwaltet und skaliert.
- Notwendige Software/Umgebung:

  - Docker Swarm oder Kubernetes
  - Netzwerkinfrastruktur für die Orchestrierung

- Deployment über Platform-as-a-Service (PaaS):
- Beschreibung: Anwendungen werden auf einer PaaS-Plattform bereitgestellt, die die Infrastruktur verwaltet.
- Notwendige Software/Umgebung:
  - PaaS-Anbieter wie Heroku, Google App Engine oder Microsoft Azure App Service

Deployment mittels Continuous Integration/Continuous Deployment (CI/CD):

- Beschreibung: Automatisierte Pipelines bauen, testen und deployen den Code kontinuierlich.
- Notwendige Software/Umgebung:
  - CI/CD-Tools wie Jenkins, GitLab CI, Travis CI
    Versionsverwaltungssysteme

Deployment über Serverless Computing:

- Beschreibung: Funktionalitäten werden als einzelne Funktionen bereitgestellt, ohne dass Server verwaltet werden müssen.
- Notwendige Software/Umgebung:
  - Serverless-Plattformen wie AWS Lambda, Azure Functions oder Google Cloud Functions

Deployment mittels Virtualisierung:

- Beschreibung: Anwendungen werden in virtuellen Maschinen (VMs) bereitgestellt.
- Notwendige Software/Umgebung:
  - Hypervisoren wie VMware, Hyper-V oder VirtualBox
  - Verwaltungstools für VMs

source: <https://www.studysmarter.de/ausbildung/ausbildung-in-it/fachberater-softwaretechniken/deployment/>
