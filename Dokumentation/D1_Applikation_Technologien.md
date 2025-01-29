# Applikation Technologien

## Technologien und Frameworks

- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/)
- [Bun](https://bun.sh/)

### Begründung

Basierend auf JavaScript, verwenden wir TypeScript, damit uns weniger Fehler während dem Programmieren unterlaufen und diese auch nicht erst während der Laufzeit erkannt werden. Für Express.js hingegen haben wir uns entschieden, da es relativ einfach ist und alle im Team damit vertraut sind. Zusätzlich setzen wir auf Bun, eine JavaScript Runtime, die die direkte Ausführung von TypeScript Code möglich macht, ohne zusätzliche Dependencies installieren zu müssen, wie das bei Node.js der Fall wäre.

## Datenbank

- [MariaDB](https://mariadb.org/)
- [Prisma](https://www.prisma.io/)
- [Docker](https://www.docker.com/)
- [Amazon RDS](https://aws.amazon.com/de/rds/)

### Begründung

Als Datenbank haben wir uns für MariaDB entschieden, da es eine Open-Source-Alternative zu MySQL ist und wir bereits Erfahrung damit haben. Als ORM verwenden wir Prisma. Es bietet den Vorteil, keine direkten SQL-Abfragen schreiben zu müssen und generiert automatisch die nötigen Typen für TypeScript, was wiederum die Fehleranfälligkeit reduziert. Damit wir untereinander keine Konflikte bekommen, wenn sich das Datebankschema ändern sollte, setzen wir auf Docker, um die Datenbank lokal in einem Container zu betreiben. Für die Produktion haben wir uns für Amazon RDS entschieden, da es eine einfache Möglichkeit bietet, MariaDB in der Cloud zu betreiben. Zusätzlich haben alle schon einmal mit AWS gearbeitet.

## Deployment

- [Vercel](https://vercel.com/)

### Begründung

Damit unsere Applikation schnell und einfach in der Cloud bereitgestellt werden kann, haben wir uns für Vercel entschieden. Zusätzlich bietet Vercel eine einfache Möglichkeit, die Applikation zu skalieren, falls dies nötig sein sollte.
