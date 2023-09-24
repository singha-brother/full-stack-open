### Remove all node_modules from the starting directory

```sh
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
```

### Mongodb setup ubuntu

- failed to activate status code 14
```sh
sudo chown -R mongodb:mongodb /var/lib/mongodb 
sudo chown mongodb:mongodb /tmp/mongodb-27017.sock
sudo service mongod restart
```
- remove
```sh
sudo apt purge mongodb-org*
sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongodb
```
