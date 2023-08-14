FROM php:8.1 as php
# jaki php chcemy pobrać

RUN apt-get update -y
# update serwera
RUN apt-get install -y unzip libpq-dev libcurl4-gnutls-dev
#rozszerzenia serwera
RUN docker-php-ext-install pdo pdo_mysql bcmath
#rozszerzenia php


# gdzie jest na serwerze
WORKDIR /var/www

#chcemy skopiowac pliki z local na docker serwer
COPY . .

#kopiujemy composer
COPY --from=composer:2.3.5 /usr/bin/composer /usr/bin/composer

ENV PORT=8000

ENTRYPOINT [ "docker/entrypoint.sh" ]

