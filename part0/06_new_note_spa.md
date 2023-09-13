#### the user creates a new note using the single-page version of the app

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    note right of browser: body: { "content": "your post", "date": "current date" }
    activate server
    server-->>browser: application/json (201)
    note left of server: {"message": "note created"}
```