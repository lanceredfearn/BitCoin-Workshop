FROM --platform=linux/amd64 debian:bullseye-slim

## Define build arguments.
ARG ROOTHOME='/root/home'

## Install dependencies.
RUN apt-get update && apt-get install openjdk-17-jdk-headless npm net-tools lsof procps iputils-ping -y

## Copy over runtime.
COPY image /
COPY config /config/
COPY home /root/home/

## Add custom profile to bashrc.
RUN PROFILE="$ROOTHOME/.profile" \
  && printf "\n[ -f $PROFILE ] && . $PROFILE\n\n" >> /root/.bashrc

## Uncomment this if you want to wipe all repository lists.
#RUN rm -rf /var/lib/apt/lists/*

## Setup Environment.
ENV PATH="$ROOTHOME/bin:/root/.local/bin:$PATH"

WORKDIR /root/home/


ENTRYPOINT [ "entrypoint" ]
