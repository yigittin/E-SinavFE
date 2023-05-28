import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/bolumler',
        name: '::Proffesion',
        iconClass: 'fas fa-home',
        order: 2,
        layout: eLayoutType.application,
      },
      {
        path: '/dersler',
        name: '::Lecture',
        iconClass: 'fas fa-home',
        order: 3,
        layout: eLayoutType.application,
      },
      {
        path: '/siniflar',
        name: '::Class',
        iconClass: 'fas fa-home',
        order: 4,
        layout: eLayoutType.application,
      }
    ]);
  };
}
