# Use official Node.js runtime
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and optionally package-lock.json
COPY package*.json ./

# Install dependencies (prefer npm ci if lockfile exists)
RUN if [ -f package-lock.json ]; then npm ci --only=production; else npm install --only=production; fi

# Copy the rest of the source code
COPY . .

# Expose app port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
