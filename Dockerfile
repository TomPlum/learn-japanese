# Pull Base Imagine
FROM node:20.12.2-alpine

# Set Working Directory
WORKDIR ./

# Add `./node_modules/.bin` to $PATH
ENV PATH ./node_modules/.bin:$PATH

# Install Dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@4.0.3 -g

# Add App
COPY . ./

# Start UI
CMD ["npm", "start"]
