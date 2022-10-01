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

4 ta terminal kere buladi proyectni ishlatish uchun.

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

## JWT ni jenratsiya qilish.

```bash
ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
# Don't add passphrase
openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub
cat jwtRS256.key
cat jwtRS256.key.pub
```

## Env configuration

```
DATABASE_URL=
PORT=3000
AUTH_PORT=4000
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
```
