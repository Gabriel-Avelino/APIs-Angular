# APIs-Angular
Repositório destinado aos estudos da utilização de APIs com Angular

## Requisitos
Para esse projeto funcionar, é necessário baixar o ambiente Xampp v7.3.3 e realizar a configuração de um ambiente vHost.

## Configurações
1º Na pasta do Xampp, procure o seguinte caminho: "./xampp/apache/conf/".

2º Abra o arquivo "httpd.conf".

3º Descomente a linha: "Include conf/extra/httpd-vhosts.conf", se estiver descomentada, mantenha.

4º Salve e feche o arquivo

5º Abra a pasta "extra".

6º Abra o arquivo "httpd-vhosts.conf".

7º Adicione o seguinte código no final do arquivo:
<VirtualHost *:80>
    ServerName meu-projeto.local
    DocumentRoot "<- Caminho completo do repositório ->"

    <Directory "<- Caminho completo do repositório ->">
        AllowOverride All
        Require all granted
    </Directory>

    <Directory "<- Caminho completo do repositório ->">
        AllowOverride All
        Require all granted
        Options Indexes FollowSymLinks
    </Directory>


    Alias /phpmyadmin "C:/xampp/phpMyAdmin"
    <Directory "C:/xampp/phpMyAdmin">
        AllowOverride AuthConfig
        Require all granted
    </Directory>
</VirtualHost>

8º Salve e feche o arquivo.

9º Agora vá no caminho "C:/Windows/System32/drivers/etc".

10º Abra o arquivo "hosts" no Bloco de Notas em modo Administrador.

11º Na seção "localhost", adicione a seguinte linha de código "127.0.0.1   meu-projeto.local".

12° Salve o arquivo e feche.

13º Abra o Xampp Control Panel em modo Adminsitrador e inicie tanto o Apache como o MySQL.

14º Agora o servidor local está configurado e pronto para executar o projeto.