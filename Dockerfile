# Utilisez une image Node.js officielle comme base
FROM node:14

# Créez un répertoire de travail dans le container
WORKDIR /usr/src/app

# Copiez les fichiers package.json et package-lock.json
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste du code de l'application
COPY . .

# Exposez le port 8080 pour accéder à l'application
EXPOSE 8080

# Commande pour démarrer l'application
CMD [ "npm", "start" ]
