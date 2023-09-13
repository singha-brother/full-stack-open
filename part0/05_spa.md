#### the user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document (200)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: text/css
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    Note right of browser: called by the spa.js file with `xhttp.send()` function
    server-->>browser: JSON file like [{"content":"olala","date":"2023-09-12T21:05:05.278Z"},...]
    deactivate server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/favicon.icon
    activate server
    server-->>browser: HTML document (404) no favicon found
```