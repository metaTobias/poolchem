# Poolchem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Cordova

### Cordova Setup

https://www.youtube.com/watch?v=2PAeSUGevY8

## Cordova Commands

### Setup Cordova

#### Android
If no `platforms` folder exists or no `android` folder in platforms exist, we need to add android platform

```
npm run setup-android
```
or 
```
cordova platform add android
```
#### IOS
If no `platforms` folder exists or no `ios` folder in platforms exist, we need to add ios platform
```
npm run setup-ios
```
or
```
cordova platform add ios
```


### Deploy

#### Android

Builds Angular and runs the app
```
npm run deploy-android
```

Run Android
```
npm run run-android
```

#### IOS

Builds Angular and runs the app
```
npm run deploy-ios
```

Run ios
```
npm run run-ios
```
