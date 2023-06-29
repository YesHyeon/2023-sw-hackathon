FROM node:18.15.0 as builder	


RUN mkdir /app
WORKDIR /app
RUN apt-get -y update
RUN apt install wget
RUN apt install unzip
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt -y install ./google-chrome-stable_current_amd64.deb
# RUN wget -O /tmp/chromedriver.zip http://chromedriver.storage.googleapis.com/` curl -sS chromedriver.storage.googleapis.com/LATEST_RELEASE`/chromedriver_linux64.zip
# RUN mkdir chrome
# RUN unzip /tmp/chromedriver.zip chromedriver -d /usr/src/chrome
ENV PATH /app/node_modules/.bin:$PATH	
COPY package.json /app/package.json

RUN npm install

COPY . /app
CMD ["npm", "run", "start"]

