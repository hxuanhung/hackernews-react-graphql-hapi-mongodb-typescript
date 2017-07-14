#!/bin/bash

export NIC=`netstat -rn | awk '/^0.0.0.0/ {thif=substr($0,74,10); print thif;} /^default.*UG/ {thif=substr($0,65,10); print thif;}'`
export NIC_IP=`ifconfig ${NIC} | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1'`
export DOCKER_GATEWAY=`netstat -nr | grep '^0\.0\.0\.0' | awk '{print $2}'`
echo "NIC_IP: $NIC_IP"
echo "DOCKER_GATEWAY: $DOCKER_GATEWAY"
export KARMA_HOSTNAME=${NIC_IP}
export DOCKER_HOST_IP=${DOCKER_GATEWAY}


