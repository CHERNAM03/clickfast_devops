# Utiliser l'image officielle de Nginx comme base
FROM nginx:alpine

# Copier les fichiers du site statique dans le répertoire par défaut de Nginx
COPY ./build /usr/share/nginx/html
# Exposer le port 80 pour le serveur Nginx
EXPOSE 80

