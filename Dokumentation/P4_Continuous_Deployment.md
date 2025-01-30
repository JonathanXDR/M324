# [Continuous Deployment](https://gitlab.com/ch-tbz-it/Stud/m324/-/blob/main/Projekt/P4_Praxis_CD.md)

## Continuous Delivery

Für unsere Continuous Delivery nutzen wir Vercel als Cloud-Plattform. Diese serverlose Architektur bietet automatische Skalierung, einfache Rollbacks und minimalen Wartungsaufwand. Vercel übernimmt dabei den kompletten Build-Prozess, das Deployment und das Hosting der Serverless-Funktionen. Die folgenden Abschnitte erläutern diese Aspekte im Detail.

### Serverless

`Serverless` bedeutet, dass Anwendungen ohne festen Server betrieben werden. Statt eines dauerhaft laufenden Servers kommen Serverless Functions zum Einsatz, die nur bei Bedarf ausgeführt werden. Vercel skaliert diese Funktionen automatisch und führt sie in isolierten Umgebungen aus (Edge- oder Cloud-Funktionen). Dadurch zahlt man nur für tatsächlich genutzte Ressourcen, und die Bereitstellung erfolgt besonders schnell und unkompliziert.

Als Entwickler muss man sich daher nur auf den Anwendungscode konzentrieren, während Vercel die gesamte Infrastruktur verwaltet. Anstatt sich also um Container-Management oder Virtualisierung zu kümmern, überträgt man diese Aufgaben, wodurch viele administrative Tätigkeiten entfallen.

![Vercel Functions Overview](./assets/img/Vercel%20Functions%20Overview.png)

### Deployment

Unsere Anwendung wird automatisch bei jedem Commit gebaut und deployed. Vercel erkennt dabei das Framework über die `vercel.json` Datei und führt den Build-Prozess in einer isolierten Umgebung aus. Sobald der Build erfolgreich ist, stellt Vercel die Anwendung in zwei unterschiedlichen Modi bereit. Zum einen gibt es eine sogenannte `Preview`-Umgebung, in der Branches oder Pull Requests getestet werden. Zum anderen gibt es das `Production`-Deployment, das nach dem Merge in den Haupt-Branch ausgelöst wird und für Endnutzer sichtbar ist.

Ein wesentlicher Vorteil dieses Setups ist, dass Vercel dank seiner Serverless-Funktionen die Skalierung selbst übernimmt. Bei hoher Last werden automatisch weitere Instanzen unserer Anwendung bereitgestellt, ohne dass wir manuell eingreifen müssen. Gleichzeitig verlagert Vercel das Routing der Anfragen auf die bereitgestellten Funktionen, was sicherstellt, dass eine Unterbrechung bei Rollouts in der Regel nur minimal ist.

![Vercel Dashboard Preview](./assets/img/Vercel%20Dashboard%20Preview.png)

### Skalierung

Da das System serverlos läuft, wird horizontal skaliert, wenn mehr Rechenkapazität benötigt wird. Das bedeutet, dass nicht ein einzelner Server leistungsmässig aufgerüstet wird, sondern mehrere Instanzen unserer Applikation gleichzeitig laufen und die Last verteilen. Dieses Prinzip ist ideal, um auch kurzfristig höhere Zugriffszahlen zu bewältigen, etwa nach Produktveröffentlichungen oder in Stosszeiten. Durch Vercels integrierten Mechanismus geschieht diese Skalierung weitgehend automatisch. Eine klassische manuelle Konfiguration oder die Pflege eigener Load Balancer entfällt somit.

Für unsere Anwendung, die auf schnellen Funktionsaufrufen basiert, bietet Vercel daher einen ausreichenden Umfang an Skalierungsmöglichkeiten.

<https://github.com/user-attachments/assets/b9995528-3793-471c-840b-f88031ca9c91>

### Rollback

Falls es zu einem fehlerhaften Deployment kommt, muss schnell reagiert werden können. Vercel bietet dafür integrierte Rollback-Funktionen an, mit denen man ein früheres Deployment wiederherstellen kann. Dieser Prozess erfolgt direkt über das Vercel-Dashboard oder die CLI. Dadurch lässt sich eine frühere, als stabil bekannte Version unmittelbar reaktivieren, ohne dass wir selbst Deployment-Skripte rückwärts ausführen müssten.

Wer noch komplexere Rollout-Szenarien benötigt, kann zum Beispiel Blue-Green- oder Canary-Deployments implementieren. Mehr Infos dazu [hier](../Theorie/T5_CD.md). In einem lokalen Kubernetes-Cluster oder einer AWS-Infrastruktur lässt sich das sehr granular steuern.

In unserer aktuellen Umgebung ist jedoch das eingebaute Rollback ausreichend, um Produktivbetriebsprobleme schnell zu beheben.

![Vercel Instant Rollback](./assets/img/Vercel%20Instant%20Rollback.png)

### Monitoring

Die Pipeline enthält auch ein umfangreiches Monitoring- und Logging-System, das uns hilft, die Performance und Stabilität unserer Anwendung kontinuierlich zu überwachen und bei Bedarf schnell reagieren zu können.

