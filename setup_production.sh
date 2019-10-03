# Disable Appache
#sudo /opt/bitnami/ctlscript.sh stop apache
#sudo mv /opt/bitnami/apache2/scripts/ctl.sh /opt/bitnami/apache2/scripts/ctl.sh.disabled

# Install npm/node
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get update
sudo apt-get install -y nodejs

# Install pm2
npm install pm2 -g

# Install nginx
sudo apt-get install nginx
# Be sure to update /etc/nginx/sites-available/default to be whatever site domain servername
# Verify nginx syntax with the following
# sudo nginx -t
# Reload nginx with the following
# sudo systemctl reload nginx

# Install certbot
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx

# Setup certbot with our domain name after nginx is configured:
#sudo certbot --nginx -d example.com -d www.example.com

# Attempt to auto-renew certbot with the following:
# sudo certbot renew --dry-run

