## Sandbox Craft CMS

#### Setup

```sh
composer install
./craft setup/security-key
docker-compose exec app /var/phpapp/craft install/plugin redactor

```

.env にDBの接続情報を設定

```
# The database server name or IP address (usually this is 'localhost' or '127.0.0.1')
DB_SERVER="localhost"

# The database username to connect with
DB_USER="root"

# The database password to connect with
DB_PASSWORD="root"

# The name of the database to select
DB_DATABASE="app"

```

#### 画像周り

* 画像ディレクトリ追加
* このボリュームのアセットにはパブリック URL が含まれますにチェック
    - ベースURLに `@web/image` を設定

#### エディタのボタンの設定

config/redactor/Standard.json or Simple.json にて設定 (フィールド設定時にどっちにするか選べる)

ドキュメント
https://imperavi.com/redactor/docs/settings/button/

#### アクセスカウント

https://github.com/putyourlightson/craft-entry-count

入れてviewに仕込む

#### Contact form

https://github.com/craftcms/contact-form

```sh
composer require craftcms/contact-form

docker-compose exec app ./craft install/plugin contact-form
```