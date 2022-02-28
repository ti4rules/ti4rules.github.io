## Advisor

Advisor is a companion app for the game Twilight Imperium Fourth Edition. It does not allow digital play; instead, it facilitates tabletop play by providing a rules reference, tech trees, and more. My goal is to save time and table space when playing one of my favorite games.

## Setup

Advisor has been built with...
* Node v11.1.0
* Yarn 1.12.1
* Redis 4.0

Once these are installed, you can simply do the following to get Advisor up and running:

```
$ redis-server /usr/local/etc/redis.conf # starts Redis
$ yarn         # installs all dependencies
$ yarn webpack # starts a local webpack dev server
```
