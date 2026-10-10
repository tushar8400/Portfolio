# One image that serves both the API and the built React site.
#   docker build -t portfolio .
#   docker run -p 5000:5000 -e MONGO_URI=... -e ADMIN_KEY=... portfolio

# ---- 1. Build the React app ----
FROM node:20-alpine AS client-build
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client ./
RUN npm run build

# ---- 2. Runtime: Express serves the API and client/dist ----
FROM node:20-alpine
ENV NODE_ENV=production
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install --omit=dev
COPY server ./
COPY --from=client-build /app/client/dist /app/client/dist
EXPOSE 5000
USER node
CMD ["node", "server.js"]
