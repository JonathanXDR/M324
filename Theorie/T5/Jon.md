# 1. Was ist Continuous Deployment und wie wird es umgesetzt?
Das Continuous Deployment ist eine Strategie für die Entwicklung und Freigabe von Software. Es baut auf CI auf und sein Job ist es die Änderungen nach dem CI automatisch für die Produktionsumgebung freizugeben. CD sollte völlig automatisch geschehen und wird desshalb vorallem mit Pipelines ermöglicht welche automatisch starten nachdem eine neue Code-Änderung durch die CI-Pipeline hindurchgekommen ist.

source: https://www.ibm.com/de-de/topics/continuous-deployment

# 2. Was ist der Unterschied zwischen Continuous Deployment und Continuous Delivery?
Continuous Deployment ist eine Erweiterung des Continuous-Delivery Konzepts. Releases welche vom Continuous Delivery vorangetrieben werden, werden schlussendlich vom Continuous Deployment bereitgestellt. Man kann das Continuous Deployment also auch als einen vollständig automatisierten Release-Prozess betrachten.

source: https://www-puppet-com.translate.goog/blog/continuous-delivery-vs-deployment?_x_tr_sl=en&_x_tr_tl=de&_x_tr_hl=de&_x_tr_pto=rq

# 3. Was sind die Vor- und Nachteile von Continuous Delivery und Continuous Deployment?

## Continuous Delivery
### Vorteile
- **Kontrollierte Freigabe**: Manuelle Freigabe ermöglicht Qualitätsprüfung vor Produktion.
- **Reduzierte Risiken**: Häufiges Testen minimiert Produktionsprobleme.
- **Flexibilität**: Freigabe kann an strategische Anforderungen angepasst werden.

### Nachteile
- **Manueller Aufwand**: Verlangsamt den Prozess.
- **Freigabeabhängigkeit**: Schlechte Prozesse können Engpässe schaffen.
- **Unvollständige Automatisierung**: Nutzt Automatisierung nicht vollständig aus.

**Beispiel**: Ein Team testet automatisch, entscheidet aber manuell, ob ein neues Feature freigegeben wird.

---

## Continuous Deployment
### Vorteile
- **Maximale Automatisierung**: Änderungen werden automatisch ausgerollt.
- **Schnelle Fehlerbehebung**: Kleinere Deployments erleichtern Debugging.
- **Kundennutzen**: Features stehen sofort zur Verfügung.

### Nachteile
- **Höheres Risiko**: Fehler können direkt in die Produktion gelangen.
- **Strengere Tests**: Automatisierung muss robust sein.
- **Komplexere Infrastruktur**: Erfordert fortschrittliche Tools.

**Beispiel**: Ein neues Feature wird automatisch in die Produktion gebracht, sobald alle Tests erfolgreich sind.

---

## Vergleich

| **Aspekt**             | **Continuous Delivery**          | **Continuous Deployment**         |
|-------------------------|-----------------------------------|------------------------------------|
| **Freigabe**            | Manuell                         | Automatisch                       |
| **Geschwindigkeit**     | Moderat                         | Hoch                              |
| **Risikomanagement**    | Höhere Kontrolle                | Höhere Testanforderungen          |
| **Einsatzbereich**      | Konservativ, stabilitätsorientiert | Innovations- und feedbackgetrieben |

source: https://www-puppet-com.translate.goog/blog/continuous-delivery-vs-deployment?_x_tr_sl=en&_x_tr_tl=de&_x_tr_hl=de&_x_tr_pto=rq
