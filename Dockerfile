FROM alpine:latest
LABEL maintainer="mohammad.anwar@yahoo.com"

RUN apk add --no-cache libc6-compat
RUN apk add --no-cache libstdc++ libgcc

WORKDIR /theweeklychallenge
COPY . /theweeklychallenge

EXPOSE 1414
CMD ["bin/hugo", "server", "-p", "1414", "-D", "--bind", "0.0.0.0"]
