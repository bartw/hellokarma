sudo docker build -t hellokarma .
sudo docker run -it --publish 9876:9876 --rm -t hellokarma

results in console
browse to http://localhost:9876/

sudo docker ps
sudo docker stop 'CONTAINER ID'