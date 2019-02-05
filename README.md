## EMP MANAGEMENT
-----------------

This project contains two separate projects:
1. **server**: nodejs server
2. **client**: angular client

#### Deploy using npm
```
# build client
cd client
npm install
npm run-script build

# build server
cd ../server
npm install

# start server
node server.js
```

-OR-

#### Deploy using Dockerfile
```
# build docker image
docker build . -t <some_image_name>

# run docker container
docker run -p 3000:3000 --name <some_container_name> -d <some_image_name> -e DB_HOST=<your_mongo_host>
```

-OR-

#### Deploy using docker-compose.yaml
```
docker-compose up
```

The app will be running at http://localhost:3000

#### Contact
* [rajpaswan.in@gmail.com](mailto:rajpaswan.in@gmail.com)