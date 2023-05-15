import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CreateUpdateDersDto, DersDto, DersInfoDto } from '../ders-dtos/models';

@Injectable({
  providedIn: 'root',
})
export class DersService {
  apiName = 'Default';
  

  create = (input: CreateUpdateDersDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DersDto>({
      method: 'POST',
      url: '/api/app/ders',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/ders/${id}`,
    },
    { apiName: this.apiName,...config });
  

  dersOnaylaByGuidDers = (guidDers: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/ders/ders-onayla',
      params: { guidDers },
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DersDto>({
      method: 'GET',
      url: `/api/app/ders/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getDersInfo = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DersInfoDto[]>({
      method: 'GET',
      url: '/api/app/ders/ders-info',
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<DersDto>>({
      method: 'GET',
      url: '/api/app/ders',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  ogrenciEkleMultiByListAndGuidSinif = (list: number[], guidSinif: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/ders/ogrenci-ekle-multi',
      params: { guidSinif },
      body: list,
    },
    { apiName: this.apiName,...config });
  

  ogrenciEkleSingleByGuidSinifAndOgrenciId = (guidSinif: string, ogrenciId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/ders/ogrenci-ekle-single/${ogrenciId}`,
      params: { guidSinif },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateDersDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DersDto>({
      method: 'PUT',
      url: `/api/app/ders/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
