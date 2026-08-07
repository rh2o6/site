FROM node:20-alpine AS dep

WORKDIR /app

COPY package.json package-lock.json* ./
run npm ci
########################################

FROM node:20-alpine AS build

WORKDIR /app
COPY --from=dep /app/node_modules ./node_modules
COPY . .
RUN npm run build

###############################

FROM node:20-alpine AS prod

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

COPY --from=build /app/.next ./.next
COPY --from=build  /app/public ./public
COPY --from=build  /app/next.config.* ./

EXPOSE 3000

CMD ["npm", "start"]

