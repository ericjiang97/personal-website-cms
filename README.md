# personal-website-cms

To build image for production

```
$ cd cms
$ docker build \
  --build-arg NODE_ENV=production \
  # --build-arg STRAPI_URL=https://api.example.com \
  -t mystrapiapp:latest \
  -f Dockerfile.prod .
 ```