
External Libraries
Scratches and Consoles
# use an official image node.js runtime.
FROM node:22-alpine

C:\Users\brunda.s\AppData\Roaming\JetBrains\IdeaIC2024.3\scratches\index.js

# set the working directory inside the container.
WORKDIR /app
# copy all package.json in the working directory.
COPY package*.json ./

# install dependency :
RUN npm install
COPY . .
ENV PORT = 9000
EXPOSE 9000
CMD['npm','start']
CMD['node','index.js']
#  'start'

# docker build -t
