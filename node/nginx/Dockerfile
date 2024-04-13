FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
# RUN ln -s /etc/nginx/sites-available/nginx.config /etc/nginx/sites-enabled/ && \
#   nginx -t && \
#   systemctl restart nginx && \
#   ufw allow 'Nginx Full'

RUN mkdir /var/www/html -p && touch /var/www/html/index.php