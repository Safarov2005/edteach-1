## Installation

Client side

```bash
cd client
npm install
```

Server side

```bash
cd server
npm install
```

## Run the app

You need four terminal instances - one for client app and three for backend servers.

```bash
cd client
npm start
```

```bash
cd server
npm run devStart
```

```bash
cd server
npm run devStartAuth
```

```bash
cd server
npm run devStartSocket
```

## Generate JWT tokens

```bash
ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
# Don't add passphrase
openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub
cat jwtRS256.key
cat jwtRS256.key.pub
```

## Env configuration

```
DATABASE_URL=string (required)
PORT=3000 (required number)
AUTH_PORT=4000 (required number)
ACCESS_TOKEN_SECRET=string (required string)
REFRESH_TOKEN_SECRET=string (required string)
```