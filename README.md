# Debug
Share your coding environment with your team through real-time coding collaboration with shared workspace settings.


## Features
### MVP (Minimum Viable Product)
- Multiple users can connect to and edit the text from a web browser
- Syntax highlighting is supported for at least 3 different languages
- Built-in text formatting options

### Stretch Goals
- Download and save documents directly from the web
- Upload and share documents directly to the web
- Change the editor theme (i.e dark mode)
- Create and save projects that contain multiple documents
- Enable user highlighting
- Built-in to-do list
- In-line comments/highlighting
- Support keyboard shortcuts

## Sprint Outline
| Sprint 1 | Sprint 2 | Sprint 3 | Sprint 4 | Sprint 5 |
| --- | --- | --- | --- | --- |
| Design Day | Transformation operations (inserts & deletes) | Peer-to-peer connection | Make optimizations | Get started on presentations |
| Brainstorm key features | Cursor synchronization | Collaboration features (remote inserts & deletes) | Address stretch goals | Practice presenting |
| Research & choose a protocol | Editing features (local inserts & deletes) | | Finalize design | ***Present!*** |
| Start designing layout | | | Develop presentation ideas | Update project ReadME |

## Dependencies
### Protocols
- **Operational Transformation (OT)**: represents the document state as a sequence of operations, where every operation is created on top of a local snapshot
- **Conflict-free replicated data type (CRDT)**: uses more memory and bandwidth compared to OT, but guarantees eventual consistency without the need of a central server

### Software & Frameworks
- [**Draft.js**](https://draftjs.org/) - a framework for building rich text editors in React
- [**Highlight.js**](https://highlightjs.org/) - provides syntax highlighting for web editors
- [**ShareJS**](https://github.com/josephg/ShareJS) - a server & client library for concurrent text editing
- [**ShareDB**](https://github.com/share/sharedb) - a realtime database backend based on Operational Transformation (OT) of JSON documents
- [**Ruby on Rails**](https://rubyonrails.org/) - a web-application framework that uses the MVC (model-viewer-controller) pattern
- [**WebRTC**](https://webrtc.org/) - allows you to add realtime communication capabilities to your app
- [**Heroku**](https://devcenter.heroku.com/articles/how-heroku-works) - application deployment platform

### Sample Implementations
- [**Rails**](https://www.aha.io/blog/text-editor)
- [**React**](https://pierrehedkvist.com/posts/1-creating-a-collaborative-editor)
- [**Conclave**](https://conclave-team.github.io/conclave-site/)

## Authors
* **Christina Abraham** - *Project Manager* - [christinaabraham](https://github.com/christinaabraham)
* **Daikie Moncion** - *Role* - [Ishinuki-Moncion](http://github.com/Ishinuki-Moncion)
* **Danny Vu**       - *Front-End* - [dannyvu](https://dannykvu.github.io/)
