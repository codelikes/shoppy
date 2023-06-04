# Use an official Node runtime as the parent image
FROM node:18.16.0-alpine3.18

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install -g @nestjs/cli
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Make the application's port available to the outside world
EXPOSE 3000

# Set the working directory in the container to /app
WORKDIR /app

# Run the application
CMD ["npm", "run", "start:debug"]
