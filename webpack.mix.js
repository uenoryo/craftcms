const mix = require('laravel-mix');

mix.js('src/js/app.js', 'web/asset/js')
  .sass('src/scss/app.scss', 'web/asset/css')
  .sourceMaps(false);
