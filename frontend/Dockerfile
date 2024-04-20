FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN  npm install --production

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]

EXPOSE 3000
