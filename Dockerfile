# Base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ./client/package*.json ./client/
COPY ./server/package*.json ./server/

# Install dependencies for the client
RUN cd client && npm install

# Install dependencies for the server
RUN cd ../server && npm install

# Copy the client and server code to the working directory
COPY ./client ./client
COPY ./server ./server

# Set environment variables
ENV PORT=3000
ENV NODE_ENV=production

# Expose the client and server ports
EXPOSE 3000
EXPOSE 8800

# Start the app
CMD ["npm", "run", "start:docker"]
