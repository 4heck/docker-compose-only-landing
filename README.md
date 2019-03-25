# Docker-compose Starter

Run your development environment with a single command using docker-compose 🚀.
This repository was boarn with aim to share how simple development environment could be with [docker-compose](https://docs.docker.com/compose/). If you ever had to perform 100 steps to run a new project you will like this a lot. You could read more on the problem in [this blog post](https://blog.maqpie.com/2017/02/22/fully-automated-development-environment-with-docker-compose/).

## Features

* 🔥 **Simple project start** run your development evnrionment with a single command
* 🙀 **Environment agnostic** with [docker-compose](https://docs.docker.com/compose/) you can run your project on Mac, Windows or Linux environments without any issues.
* ️⚡️ **Multi-language projects** choose whatever language you need to solve the problem, but keep development environment easy for developers.

## Getting Started

`./bin/start.sh` — starts entire application
`./bin/run-tests.sh` — runs tests using docker-compose

The repository consists 4 demo-purpose independent services: 
1. Landing - a landing site
2. Web - a simple frontend that serves client side assets for React application and do some server side rendering.
3. Api - a restful api.
4. Admin - an admin site

For learning purpose just pay attention to the following files: 
1. [Dockerfile](./api/Dockerfile)
2. [Dockerfile.dev](./api/Dockerfile.dev)
3. [package.json](./api/package.json)
4. [docker-compose.yml](./docker-compose.yml)
5. [docker-compose.local-tests.yml](./docker-compose.local-tests.yml)
6. [.env](./.env)

### Separate Dockerfile for development

Dockerfile.dev used to run every project on local environment. There are two reasons for using separate dockerfile for local environments:

1. To run application using Nodemon, which automatically restart application on code change. (same can be achieved by overriding `command` in docker-compose.yml)
2. Production Docker files has `npm run build && npm prune --production`. That needed to keep your Docker images smaller, by removing devDependencies after `build` step has been completed. In this step you would typically use Webpack, Gulp or any other bundlers / task runners.

If image size is not an issue - I would recommend to keep same Dockerfile for both development and production environments. You might also want to look into [this](https://github.com/paralect/docker-compose-starter/issues/3) discussion