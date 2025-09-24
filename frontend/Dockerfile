# Re-trigger workflow
# test
# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the application for production
RUN npm run build


# Stage 2: Serve the application from Nginx
FROM nginx:stable-alpine
