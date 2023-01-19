FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/collector .
COPY ./prisma ./prisma
COPY ./.env ./.env
RUN npm install prisma --production
RUN npx prisma generate
CMD node ./main.js