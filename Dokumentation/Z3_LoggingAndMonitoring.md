# Z3

## Auswahl der Lösung

Wir hatten Lust das Logging mit einem eigenen Backend und einem kleinen Dashboard selbst umzusetzen. Doch die Lehrperson wollte, dass wir eine bereits bestehende Lösung verwenden. Sie hat uns die out of the box Lösung von AWS verwiesen. Für dies haben wir uns dann auch entschieden, da unsere Datenbank bereits bei AWS gehostet ist.

## AWS Academy Learner Lab

Wir haben versucht, Aws Cloudwatch auf dem von der Lehrperson eingerichteten Learner Lab umzusetzen. Dazu haben wir uns zusammen getroffen und versucht es in unsere App einzubauen. Dazu haben wir eine Log Group mit dem Namen «M324-LogGroup» erstellt.
![LogGroup](/assets/img/LogGroup.png)

Dazu haben wir ein Log-Stream erstellt, an den die Applikation dann die Logs sendet.

![LogGroup](/assets/img/log-stream.png)

Stand Dienstagabend konnten wir noch keine Logs speichern.

## Problem IAM User

Damit unsere App die Daten an AWS senden kann, braucht sie die Credentials bzw einen Access-Key, um sich bei AWS zu Authentifizieren, von einem IAM-Benutzer. Doch wir haben nicht genug Berechtigungen, um diesen zu erstellen. Zum einen ist das Erstellen einer Permission Group nicht möglich als auch das erstellen des Users selbst.
![LogGroup](/assets/img/error1.png)
![LogGroup](/assets/img/error2.png)

Dies haben wir dann bei der Lehrperson gemeldet, doch sie konnte uns, auch aus Krankheitsgründen, nicht weiterhelfen. Eine Möglichkeit wie nun weitergefahren werden kann ist mit einem eigenen AWS-Account das Logging umzusetzen.

## Lösung mit eigenem AWS Account

Ich habe auf meinem Privaten AWS-Account den ganzen Prozess nochmals wiederholt. Dann habe ich die Umgebungsvariablen ins .env unserer App eingefügt.

```.env
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=eu-central-1
AWS_LOG_GROUP_NAME=M324-Loggroup
AWS_LOG_STREAM_NAME=M324-Logstream
```

Danach habe ich den Code eingerichtet, der es ermöglicht, die logs an AWS zu senden. Danach wurden die Middlewares eingerichtet.

Einmal für die Request
![LogGroup](/assets/img/request-code.png)

Und einmal für die Response:

![LogGroup](/assets/img/response-code.png)
Die Funktion logMessage sendet den String an den log stream. Die Logik kann im awsMiddleware.ts file nachgelsen werden.

Ein Problem war die Anordnung der Middlewares. Da Expressjs die Middlewares in der Reihenfolge aufruft, wie sie hinzugefügt werden ist die Anordnung wichtig. So wie im Bild hat es dann schlussendlich funktioniert. Bei einer Request muss zuerst muss die express.json() funktion aufgerufen werden. Erst dann kann ich mit meiner eigenen Middleware den Body auslesen. Dann kommen meine Middlewares und zum Schluss die Routes bzw die Endpunkte.

![LogGroup](/assets/img/middleware-anordnung.png)

Die fertigen Logs im backend sehen wiefolgt aus:
![LogGroup](/assets/img/aws-logs.png)

# Database Monitoring

Unsere Datenbank ist bei AWS gehostet. So können wir uns bei Cloudwatch diverse Metriken anschauen.
Erstellt man ein Dashboard für RDS fügt aws direkt mehrere Metriken hinzu.
![LogGroup](/assets/img/cloudwatch-rds.png)

Erstellt man das Dashoard, können eigene Metric Widgets hinzugefügt werden. Dies haben wir für die BinLogDiskUsage gemacht. Es gibt sämtliche andere Metriken, die hinzugefügt werden können.

![LogGroup](/assets/img/cloudwatch-dash-new-diagram.png)
