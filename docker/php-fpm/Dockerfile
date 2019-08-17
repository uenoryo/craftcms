FROM laradock/php-fpm:2.2-7.2

# Install Php Redis Extension
RUN printf "\n" | pecl install -o -f redis \
    &&  rm -rf /tmp/pear \
    &&  docker-php-ext-enable redis

RUN docker-php-ext-install zip

# bcmath:
RUN docker-php-ext-install bcmath

# Opcache:
RUN docker-php-ext-install opcache

RUN docker-php-ext-install mysqli

# Tokenizer Modifications:
RUN docker-php-ext-install tokenizer

# Human Language and Character Encoding Support:
RUN apt-get update -yqq && \
    apt-get install -y zlib1g-dev libicu-dev g++ && \
    docker-php-ext-configure intl && \
    docker-php-ext-install intl

# Image optimizers:
USER root

RUN apt-get install -y --force-yes jpegoptim optipng pngquant gifsicle

# ImageMagick:
RUN apt-get install -y libmagickwand-dev imagemagick && \
    pecl install imagick && \
    docker-php-ext-enable imagick


# Clean up
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    rm /var/log/lastlog /var/log/faillog

RUN usermod -u 1000 www-data

WORKDIR /var/www

CMD ["php-fpm"]

EXPOSE 9000
