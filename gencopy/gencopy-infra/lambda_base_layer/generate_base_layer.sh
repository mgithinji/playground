# generate a base image for the lambda functions

# remove the container first (if it exists)
docker rm layer-container

# build the base layer
docker build -t base-layer .

# rename it to layer-container
docker run --name layer-container base-layer

# copy the generated zip artifact so our CDK can use it
docker cp layer-container:layer.zip . && echo "Created layer.zip with updated base layer."