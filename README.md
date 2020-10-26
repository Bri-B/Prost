# Prost
## Table of Contents
[About](#about)
[Details](#details)
[System Requirements](#details)
[Installation](#installation)
[Database](#database)
[Tech Stack](#tech-stack)

## About
**Prost:** Creating social environments for the consumption of alcohol while promoting both safety and local businesses.
### Details
Prost aims to create safe drinking environments to promote both relaxing with friends and those who are yet to be called friends all while having a delicious drink. Users can go solo or create parties and place themselves on our map to be seen by the public or only their friends.  Privacy is a big concern here and users have complete control over who they share their location with.  Users can create a friends list, plan events through private messages, check their area for new spots to frequent or curate a list of their favorite watering holes, view the varying status of any of the participating bars and restaurants including population, indoor / outdoor, masks or no masks, etc.

On the other hand, if you are a business owner, register with us and experience a new, fluid method of communcation with your customers. Alert them to promotions, popup events, crowd numbers, and keep them up to date about the going-ons in your business.

Prost wants to help you find your next favorite watering hole while keeping you safe.

## The Team: 
Jon Tenholder
Lawerence Schwall
Brianna Skinner
Christopher Booth
## System Requirements:

 - Node version >= 8
 - npm >= 6

## Installation:
    -ToDo
## Database
First, install PostgreSQL 12 on your machine:
https://www.postgresql.org/download/

Then, use `node -v` to check your current version of Node. Upgrade to 12, if not currently on version 12.

Starting Database:
``` sh
sudo service postgresql start
```
Logging In:
```sh
sudo -u postgres psql
```
Create PostgreSQL Database
```sh 
CREATE DATABASE prost;
```
Switch Connection to a New Database
```sh
\c prost;
```
Start Server to Connect to Prost Database
```sh
npm run start
```
Test Database Commands and Populates w/ Sample Data
``` sh
npm run test-db
```

### Environment Variables for DB
Place in a .env file in outermost directory

env_variables:
DB_USERNAME=
DB_HOST=
DB_DBNAME=
DB_PASSWORD=
DB_PORT=
## Tech-Stack
    --ToDo

