# DevOps Prozesse

## 1. Was ist SDLC (Software Development Life Cycle) und welche Phasen gibt es?

Der system development life cycle oder kurz SDLC ist der Prozess für das Planen, Erstellen, Testen und Deployen von qualitiven Applikationen. Es hilft Projekt-Risikos zu vermindern und hilft auch zukünftiges Feedback von Kunden schnell umzusetzen und ihre Erwartungen zu erreichen.
Die verschiedenen Phasen sind:

- **Planning und Analyse**
  Anforderungen sammeln, Ziele definieren und eine Risikoanalyse durchführen.

- **Design**
  Entwerfen der Architektur, Benutzeroberflächen und Systemkomponenten.

- **Implementation**
  Entwickeln des Codes und Umsetzen der Designspezifikationen.

- **Testing**
  Überprüfen der Funktionalität und Qualität des Systems durch Tests.

- **Deploying**
  Bereitstellen der fertigen Anwendung in der Produktionsumgebung.

- **Maintenance**
  Überwachung und Behebung von Fehlern sowie regelmäßige Updates zur Verbesserung.

source: <https://aws.amazon.com/what-is/sdlc/>

## 2. Was ist DevOps Lifecycle und welche Phasen gibt es?

DevOps ermöglicht es das ein Team den ganzen Applikations Lifecycle zu übernehmen. Dazu gehört das Development, Testen, Releasen, Deployen und Planen. Der DevOps Lifecycle sind die Phasen welche im DevOps gebraucht werden um all dies zu ermöglichen.
Die Phasen werden auch die 7Cs genannt:

- **Continuous Development**  
  Planung und Entwicklung von Code in kleinen, iterativen Schritten.

- **Continuous Integration**  
  Regelmäßiges Zusammenführen von Codeänderungen in ein gemeinsames Repository mit automatisierten Builds und Tests.

- **Continuous Testing**  
  Automatisiertes Testen des Codes, um Fehler frühzeitig zu finden und Qualität sicherzustellen.

- **Continuous Deployment/Delivery**  
  Automatisiertes Bereitstellen von getesteten Änderungen in Produktions- oder Staging-Umgebungen.

- **Continuous Monitoring**  
  Überwachen von Anwendungen und Infrastruktur, um Probleme und Performance-Engpässe zu identifizieren.

- **Continuous Feedback**  
  Sammeln und Auswerten von Nutzer- und Betriebsdaten, um den Entwicklungsprozess zu verbessern.

- **Continuous Operations**  
  Sicherstellen eines stabilen Betriebs und einer hohen Verfügbarkeit der Anwendung durch Automatisierung und robuste Prozesse.

source: <https://www.geeksforgeeks.org/devops-lifecycle/>

## 3. Welche Unterschiede gibt es zwischen SDLC und DevOps Lifecycle

Der Hauptunterschied zwischen dem **DevOps Lifecycle** und dem **System Development Life Cycle (SDLC)** liegt in ihrem Fokus und ihrem Ansatz:

#### 1. **Zweck und Fokus**

- **SDLC:**

  - Fokus auf die schrittweise Entwicklung einer qualitativ hochwertigen Anwendung.
  - Orientiert sich an einem strukturierten, linearen Prozess von der Planung bis zur Wartung.
  - Ziel ist es, Risiken zu minimieren und Kundenanforderungen genau zu erfüllen.

- **DevOps Lifecycle:**
  - Fokus auf die Zusammenarbeit zwischen Entwicklung und Betrieb während des gesamten Lebenszyklus.
  - Betont Automatisierung, schnelle Bereitstellung und kontinuierliche Verbesserung.
  - Ziel ist es, schnelle, häufige und stabile Releases zu ermöglichen.

#### 2. **Ansatz**

- **SDLC:**

  - Traditionell, oft linear oder iterativ (z. B. Wasserfall oder Agile).
  - Jede Phase hat eine klar definierte Start- und Endzeit.
  - Eher projektorientiert.

- **DevOps Lifecycle:**
  - Iterativ und kontinuierlich, ohne klar abgegrenzte Phasen.
  - Integrative Prozesse wie Continuous Integration/Continuous Delivery (CI/CD).
  - Eher prozessorientiert.

#### 3. **Automatisierung**

- **SDLC:**

  - Automatisierung ist nicht zwingend erforderlich, kann aber unterstützend eingesetzt werden (z. B. Tests).
  - Fokus liegt auf dem Planen und Erstellen.

- **DevOps Lifecycle:**
  - Stark auf Automatisierung angewiesen (z. B. CI/CD-Pipelines, Monitoring).
  - Fokus liegt auf der gesamten Automatisierung von Entwicklung bis Betrieb.

#### 4. **Zusammenarbeit**

- **SDLC:**

  - Entwicklung und Betrieb arbeiten oft getrennt, Übergaben zwischen Teams sind üblich.
  - Zusammenarbeit ist nicht immer ein zentraler Aspekt.

- **DevOps Lifecycle:**
  - Förderung der Zusammenarbeit zwischen Entwicklern und Betriebsmitarbeitern ("Dev" und "Ops").
  - Teams arbeiten gemeinsam an Planung, Entwicklung, Bereitstellung und Wartung.

## 4. Was ist ein MVP und warum ist es wichtig für den DevOps Lifecycle?

Ein MVP (Minimum Viable Product) ist die einfachste Version eines Produkts mit grundlegenden Funktionen. Es wird verwendet, um schnell Feedback von Nutzern zu erhalten und Verbesserungen vorzunehmen. Im DevOps-Lifecycle ist das MVP wichtig, weil DevOps durch schnelle Entwicklung, Tests und Anpassungen hilft, es effizienter und schneller bereitzustellen

source: <https://www.scalablesolutions.co/blogs/using-devops-for-faster-mvp-development/>
