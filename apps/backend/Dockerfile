FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/backend .
COPY ./prisma ./prisma
COPY ./.env ./.env
RUN npm install prisma --production
RUN npx prisma generate
CMD node ./main.js