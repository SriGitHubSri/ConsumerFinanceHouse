FROM node:13.12.0-alpine as build

# Create app directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN CI=true npm ci --silent
# If you are building your code for production
# RUN npm install
# Bundle app source
COPY . ./

EXPOSE 3000
CMD [ "npm", "start" ]