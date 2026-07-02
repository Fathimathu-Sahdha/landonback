# syntax=docker/dockerfile:1.7

FROM node:20-bookworm-slim
WORKDIR /app

# Install dependencies for build/preview
COPY package.json package-lock.json ./
RUN npm ci --include=optional

# Copy source and build
COPY . .
RUN npm run build

EXPOSE 5000
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5000"]
