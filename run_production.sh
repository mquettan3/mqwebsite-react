    
#!/bin/bash
pm2 stop all
cd ~/workspace/mqwebsite-react/
git pull origin master
npm run build
cd server
pm2 start server.js --time
cd -

