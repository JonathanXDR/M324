*Band*:
- ID (Automatically Generated)
- Name (String)
- Genre (Genre ID)
- Gründungsdatum (Date)
- Bandmitglieder (Integer)
- Auflösungsdatum (Date) NULLABLE (Not greater - than Gründungsdatum)

*Genre*:
- ID (Automatically Generated)
- Name (String)

*Album*:
- ID (Automatically Generated)
- Titel (String)
- Band (Band ID)
- Label (Label ID)
- Verkaufspreis (Integer)

*Label*:
- ID (Automatically Generated)
- Name (String)