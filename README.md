# HTTP-Challenge

Minimum server to respond to the http-challenge of Let's Encrypt.

Used together with Traefik (https://traefik.io/) using the following label config:

```
labels:
    - traefik.enable=true
    - traefik.port={your_port || 3000}
    - traefik.docker.network={your_public_network}
    - traefik.frontend.passHostHeader=true
    - traefik.frontend.rule=HostRegexp:{domain:(.*)};PathPrefixStrip:/.well-known
    - traefik.backend.loadbalancer.swarm=true
    - traefik.backend.loadbalancer.stickiness=false
```
