# BarrettCoats.com

A static site for declassifying information.

## Initial Setup

To set up a work station to begin developing this application you will need to do the following.

### Install NVM

Install NVM from the github repository [here](https://github.com/nvm-sh/nvm). Typically, this will look something like this:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

Install the latest node:

```bash
nvm install latest
```

### Install Gatsby CLI

Install gastsby-cli and disable telementy:

```bash
npm install -g gatsby-cli
gatsby telemetry --disable
```

## Local Development

Use the latest node version:

```bash
nvm use latest
```

Build and run the site locally:

```bash
npm install
npm run start
```