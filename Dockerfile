FROM ruby:2.3.3
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /waterlevels
WORKDIR /waterlevels
ADD Gemfile /waterlevels/Gemfile
ADD Gemfile.lock /waterlevels/Gemfile.lock
RUN bundle install
ADD . /waterlevels