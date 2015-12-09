# minimalismu.cz

## Deployment

Whole deployment process is done via Heroku buildpacks. Please note that with the example below, you will deploy `master` branch from your local copy.

```sh
git push heroku master # Deploy source code & let Heroku create build
heroku run rake db:reset donations:reset # Reset database & download donations data
```

## Local development environment

### Clone source

```sh
git clone [your-repo-URL]
```

### Installation

Clone this repository and run following commands from the root directory:

```sh
# Install ruby via rvm
rvm install ruby-2.1.7
# Go to source code directory
cd minimalismu.cz
# Install bundler
gem install bundler
# Install RoR gems
bundle install
# Go to EmberJS sources directory
cd frontend
# Install npm modules
npm install
# Install bower modules
bower install
# Go back up (to run the app)
cd ..
```

### Setup db
```sh
# Initialize database structure & seed initial data
rake db:reset
# Download doantion list from FIO
rake donations:reset
```

### Running

```sh
rails s
```

Then go to: [http://localhost:3000/](http://localhost:3000/)

## Docker development environment

### Clone source

```sh
git clone [your-repo-URL]
```

### Run docker build

```sh
cd minimalismu.cz
docker build -t my-rails-app .
docker run --name some-rails-app -p 8080:3000 -d my-rails-app
# Get IP of default machine, this will give you $IP
docker-machine ip default
```

Then go to: http://$IP:8080
