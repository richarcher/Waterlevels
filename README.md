# Waterlevels [![Build Status](https://travis-ci.org/richarcher/Waterlevels.svg)](https://travis-ci.org/richarcher/Waterlevels)

A website to display dam waterlevels in Cape Town's 6 major dams.

Original data is sourced from the [Cape Town Open Data Portal](https://web1.capetown.gov.za/web1/OpenDataPortal/), and is parsed and converted into an easily digestable JSON API .

A demo site can be viewed at http://178.62.79.103/

## Installation

1. Download the repository
2. `bundle install`
3. `rake db:setup && rake db:migrate`
4. `rake` - will run the test suite

## Usage via Foreman

Start Postgres and Rails with `foreman start -f Procfile.dev`

## Usage alternate

Start Postgres

Start rails server `bundle exec rails s` - this will run an API server at http://localhost:3000

Start NPM development server - a browser window will open at http://localhost:8000

Import the latest data by running `rake waterlevel:import`.

## Roadmap

- [x] Nest API behind `api/v1/` path
- [ ] Investigate automatic data imports

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

Waterlevels is released under the [MIT License](http://www.opensource.org/licenses/MIT).
