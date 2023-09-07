# Pake node versi 18.17
FROM node:18

# Buat folder app
WORKDIR /usr/src/app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install nodemon -g




COPY . .

# expose port 3000
EXPOSE 3000

CMD ["npm", "start"]
