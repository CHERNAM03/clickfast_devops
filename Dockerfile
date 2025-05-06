# Étape 1 : Utiliser l'image officielle de Nginx
FROM nginx:alpine

# Étape 2 : Copier les fichiers du projet dans le dossier par défaut de Nginx
COPY . /usr/share/nginx/html

# Étape 3 : Exposer le port 80 pour le serveur Nginx
EXPOSE 80