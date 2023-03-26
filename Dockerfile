FROM node:14.20.1
WORKDIR /usr/src/portfolio-manager-backend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "npm", "start" ]


