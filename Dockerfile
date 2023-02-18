# Use an official Node.js runtime as a parent image
FROM node:18.14.0

# Set the working directory
WORKDIR /app

# Set the environment variables
EXPOSE 3030

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install serve globally
RUN npm install serve -g

# Copy the remaining application files to the working directory
COPY . .

# Build the application
RUN npm run build

# Set the command to dev the application
CMD [ "npm", "run", "serve" ]