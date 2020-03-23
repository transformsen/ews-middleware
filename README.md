# EWS (Exchange Web Services) API middleware
### Content
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Libraries](#libraries)
- [Design](#design)
- [Verification](#verification)


### Prerequisites
- Node: 10.16.3+
- [Loopback](https://loopback.io/getting-started.html) - npm install -g @loopback/cli

### Installation
#### Mock Express Server Installation
- cd thridparty-server
- npm i
- npm start
#### Running EWS Middleware application
- cd ../ews-middleware
- npm i
- npm run start

### Libraries
- [Loopback](https://loopback.io/)
- [StrongLoop](https://strongloop.com/)

### Design
| Design Key | Details |
| --- | --- |
| Servers | This application contains SOAP and REST server running at different port (REST for EWS rest point middleware. Example - set-user-photo) |
| SOAP Route | As per the loopback implementation every request should go via controller. soap-route.ts file will do the routes to controller |
| Data source | Third part APIs are called via loopback provided datasource |

### Verification
- npm start
- ews-middleware/doc - folder contains the postman collection for verifying all 10 services implemented as part of this challenge.