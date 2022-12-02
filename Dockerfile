FROM debian:bullseye-slim

## Define build arguments.
ARG ROOTHOME='/root/home'

## Install dependencies.
CMD apt-get update && apt-get install openjdk-11-jdk-headless npm net-tools lsof procps -y && npm --prefix /root/home/bitcoin_client/ install && npm --prefix /root/home/bitcoin_client/ start

## Copy over runtime.
COPY image /
COPY config /config/
COPY home /root/home/
COPY frontend /root/home/frontend/

## Add custom profile to bashrc.
RUN PROFILE="$ROOTHOME/.profile" \
  && printf "\n[ -f $PROFILE ] && . $PROFILE\n\n" >> /root/.bashrc

## Uncomment this if you want to wipe all repository lists.
#RUN rm -rf /var/lib/apt/lists/*

## Setup Environment.
ENV PATH="$ROOTHOME/bin:/root/.local/bin:$PATH"

WORKDIR /root/home

ENTRYPOINT [ "entrypoint" ]
