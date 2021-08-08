<div align="center">
  <img alt="gobarber-cover" src="https://user-images.githubusercontent.com/11637616/128424764-99d140dc-d27a-462e-977b-8f3079609db9.png" width="auto" heigth="auto"/>
</div>
<div align="center">
  <img alt="GitHub" src="https://img.shields.io/badge/license-MIT-green"> <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/mugasparetto/gobarber-api"> <img alt="Code coverage" src="https://img.shields.io/badge/coverage-100%25-brightgreen" />
</div>

------------

<p align="center">
  <a href="#pencil-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-demo">Demo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer_and_wrench-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#space_invader-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#heavy_check_mark-next-steps">Next steps</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_facing_up-license">License</a>
</p>

------------

## :pencil: About
GoBarber is an application where customers can book appointments with barbers and hairdressers. On the other hand, barbers can check their daily schedule.

[GoBarber Web](https://github.com/mugasparetto/gobarber-web)<br />
[GoBarber Mobile](https://github.com/mugasparetto/gobarber-mobile)

## :computer: Demo

### Customer dashboard
<h1 align="center">
  <img alt="GoBarber Web" src="https://user-images.githubusercontent.com/11637616/128635451-5cb37bca-0bd0-40b9-ad6f-9364cf4d6b3a.gif" />
</h1>

### Barber dashboard
<h1 align="center">
  <img alt="GoBarber Web" src="https://user-images.githubusercontent.com/11637616/128636091-fa2f5a60-65f2-40a0-b23a-b7589c5db581.gif" />
</h1>

### Mobile app
<p align="center">
  <img alt="GoBarber Mobile" src="https://user-images.githubusercontent.com/11637616/128637470-7a9222a1-a7d4-4795-b0dc-10331f2f6919.gif" />
</p>
<br />

## :hammer_and_wrench: Features
* Create a new account
* User authentication (login)
* Forgot password email
* Reset password
* Update profile (info + password + avatar)
* Customer dashboard
  * List of barbers
  * Check barbers availability (either monthly or daily)
  * Book an appointment
  * Success page with appointment reminder
* Barber dashboard
  * See daily schedule
  * Show days that are totally booked

## :space_invader: Technologies
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Amazon S3](https://aws.amazon.com/pt/s3/)
- [Amazon SES](https://aws.amazon.com/pt/ses/)

## :rocket: Getting started

### Requirements
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

### Clone the project
```bash
$ git clone https://github.com/mugasparetto/gobarber-api.git && cd gobarber-api
```

### Run these commands
```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' as '.env' and set your environment variables.
# The AWS variables do not need to be set for dev environment.
$ cp .env.example .env

# Create the PostgreSQL instance using docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Run the migrations
$ yarn typeorm migration:run

# Run the api service
$ yarn dev:server
```

## :heavy_check_mark: Next steps
- [ ] Check if provider_id is type of 'customer' when requesting services like CreateAppointment, ListMonthAvailability, ...
- [ ] Refresh token
- [ ] Cache using Reddis

## :page_facing_up: License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Murilo Gasparetto 👋 &nbsp;[Get in touch](https://www.linkedin.com/in/mugasparetto/)
