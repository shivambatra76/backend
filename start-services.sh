echo "creating a shared network"
docker network create portfolio-network
echo "network created or already exists!"


echo "starting database service"
cd binaries/mongodb
docker-compose up -d 

cd ../../
echo "starting backend service"
docker-compose up -d
echo "All services are up"