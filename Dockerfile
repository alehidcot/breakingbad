FROM node:14.15.5-stretch

ENV NODE_ENV=development
ARG REACT_APP_SKIP_LOGIN

WORKDIR /app

COPY src ./src
COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .
COPY public ./public

ENV REACT_APP_SKIP_LOGIN=${REACT_APP_SKIP_LOGIN}

RUN NODE_ENV=development yarn
RUN yarn build
RUN rm -rf src package.json tsconfig.json public

RUN rm ${HOME}/.npmrc
