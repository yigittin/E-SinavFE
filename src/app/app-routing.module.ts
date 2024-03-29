import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DersDetayModule } from './ders-detay/ders-detay.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  },
  { path: 'bolumler', loadChildren: () => import('./bolum/bolum.module').then(m => m.BolumModule) },
  { path: 'dersler', loadChildren: () => import('./ders/ders.module').then(m => m.DersModule) },
  { path: 'ogrenciler', loadChildren: () => import('./ogrenci/ogrenci.module').then(m => m.OgrenciModule) },
  { path: 'ders-detay/:id', loadChildren: () => import('./ders-detay/ders-detay.module').then(m => m.DersDetayModule)},
  { path: 'siniflar', loadChildren: () => import('./siniflar/siniflar.module').then(m => m.SiniflarModule) },
  { path: 'sinif-detaylar/:id', loadChildren: () => import('./sinif-detay/sinif-detay.module').then(m => m.SinifDetayModule) },
  { path: 'sinavlar', loadChildren: () => import('./sinav/sinav.module').then(m => m.SinavModule) },
  { path: 'sinav-detaylar/:id', loadChildren: () => import('./sinav-detay/sinav-detay.module').then(m => m.SinavDetayModule) },
  { path: 'sinav-ogrenci/:id', loadChildren: () => import('./sinav-ogrenci/sinav-ogrenci.module').then(m => m.SinavOgrenciModule) },
  { path: 'home-ogrenci', loadChildren: () => import('./home-ogrenci/home-ogrenci.module').then(m => m.HomeOgrenciModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
