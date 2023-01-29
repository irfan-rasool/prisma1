# This is an demostration of application using Prisma1 with graphql

## Prerequisites:
- GIT
- Node.js 
- Prisma1
- Graphql server
- MySQL

## Steps which I have undertaken to create this demo

- created a docker-compose.yml file. The file is located under prisma/localPrisma/
- run this ==> docker-compose up -d
- Prisma is now connected to a local database and runs on http://localhost:4466
-To bootstrap the configuration files for your Prisma client run the following command:prisma1 init --endpoint http://localhost:4466
- you can now deploy the Prisma API: prisma1 deploy
- Please refer the prisma.yml file 
- prisma1 generate

- Now you need following npm modules:
- @apollo/server
- @graphql-tools/resolvers-composition
- prisma-client-lib


## Incase you need to Redeploy your Prisma API:
- prisma1 deploy
- prisma1 generate


### Resources:
- https://v1.prisma.io/docs/1.34/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/
