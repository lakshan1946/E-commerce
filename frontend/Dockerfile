#use the base image from docker hub
FROM node:20-alpine

#set the working directory
WORKDIR /app

#copy the package.json and package-lock.json files to the working directory
COPY package*.json /app

#install the dependencies
RUN npm install

#copy the rest of the files to the working directory
COPY . .

#expose the port
EXPOSE 3000

#run the application
CMD ["npm", "start"]