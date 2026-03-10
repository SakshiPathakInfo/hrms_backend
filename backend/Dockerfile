FROM node:20-alpine AS builder
WORKDIR /app

# Install deps (including devDeps for build)
COPY package.json package-lock.json* ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy only the built output and production deps
COPY --from=builder /app/dist ./dist
COPY package.json package-lock.json* ./
RUN npm prune --production || true

EXPOSE 3001
CMD ["node", "dist/server.js"]
