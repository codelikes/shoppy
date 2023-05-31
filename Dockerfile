# Use an official Node runtime as the parent image
FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Make the application's port available to the outside world
EXPOSE 3000

# Run the application
CMD ["node", "--inspect=0.0.0.0", "-r", "ts-node/register", "-r", "tsconfig-paths/register", "src/main.ts"]
