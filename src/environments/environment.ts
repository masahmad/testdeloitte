// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  formData: {
    "items": {
      "pens": 100,
      "sharpeners": 32,
      "pencils": 76,
      "fish": 12,
      "chicken": 13,
      "veg": 43,
      "chocolate": 4
    },
    "groups": {
      "stationery": [
        "pens",
        "sharpeners",
        "pencils"
      ],
      "food": [
        "fish",
        "chicken",
        "veg",
        "chocolate"
      ]
    }
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
