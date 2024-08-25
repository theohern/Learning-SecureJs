# Utiliser une image Node.js officielle comme image de base
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier le fichier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances (si vous avez des packages Node à installer)
RUN npm install

# Copier le dossier public contenant les fichiers statiques
COPY public/ .

# Installer le serveur 'serve' pour servir les fichiers statiques
RUN npm install -g serve

# Exposer le port que le serveur web va utiliser
EXPOSE 3000

# Utiliser 'serve' pour servir les fichiers statiques
CMD ["serve", "-s", "."]
