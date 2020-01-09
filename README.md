# PlantBP

## What is it?

This project is a web app for uploading recipes and reviews of restaurants etc. and serves as a place for the client to keep a more personalised collection of these in addition to Instagram accounts etc.

## How does it work

Users are presented with a landing page, and can choose to navigate to the recipes/reviews section, as well as an about section for more details of the project. Only site admin can add, edit and delete items. To log in, users must navigate manually (to avoid confusion for regular users) to /admin route. Admin registration currently has to go through the Firebase console.

#### Firebase

[Firebase](https://console.firebase.google.com/) takes care of:

- Authentication
- Storage of images,
- Database
- Hosting

#### Forms

This app uses Angular's ReactiveFormsModule.
To add new items, an admin user first creates one by entering the basic details of the recipe/review in a form. This document can then be identified by its ID (through params), and the admin user can flesh out the item by adding more details through a series of short forms. There are several dynamic forms in the project, where the user can add more form fields as required (for adding ingredients for example).

#### Styling

This app uses [Bootstrap 4](https://getbootstrap.com/) components. To avoid using jquery in the app, [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/) is used for dynamic components such as the image carousel, nav dropdown etc.

## What's next?

- Angular animations between pages
- Style the landing page
- Consider a stepper system for adding new items as opposed to separate form groups
- Email subscription option

## Other info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.
