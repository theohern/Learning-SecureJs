# Utiliser une image Node.js officielle comme image de base
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier le fichier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application dans le conteneur
COPY . .

# Exposer le port que l'application va utiliser
EXPOSE 8080

# Démarrer l'application
CMD ["npm", "start"]
