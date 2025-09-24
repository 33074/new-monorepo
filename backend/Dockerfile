# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy the rest of the application source code
COPY . .

# Your app binds to port 3001, so you need to expose it
EXPOSE 3001

# Command to run the application
CMD ["node", "server.js"]
