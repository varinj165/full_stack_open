```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Acknowledgement
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that creates the new note and then sends the new note to the server
```