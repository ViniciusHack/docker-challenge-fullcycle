# Full Cycle - Docker Module

## Challenges:
### Custom Go Image
- Upload a custom Golang docker image that shows "Full Cycle Rocks!!" in the terminal when using "docker run myuser/mygolangimage".
  - This image must be optimized to be **less than 2mb**

### Node with MySQL and Nginx:
- Create a basic Node APP that has integration with MYSQL and NGINX.
  - Nginx must be the reverse proxy of our Node APP
  - Every service, must have its own container
  - Everything should run fine when typing "docker-compose up -d"

## Key learnings:
- How docker and containers work in the background
- Docker commands
- Dockerfile, images and its optimizations
- Multi-stage building
- Volumes
- Networks
- Docker Compose
- Dependencies between different services/containers

## Extra learnings:
- Nginx as reverse proxy
- Basics of MySQL
