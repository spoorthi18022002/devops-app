# 1. Use official Node.js base image
FROM node:16

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy dependency files first
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the app code
COPY . .

# 6. Tell Docker how to run the app
CMD ["npm", "start"]

# 7. Open port 3000
EXPOSE 3000
