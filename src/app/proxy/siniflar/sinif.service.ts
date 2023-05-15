import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CreateUpdateSinifDto, SinifDto, SinifInfoDto } from '../sinif-dtos/models';

@Injectable({
  providedIn: 'root',
})
export class SinifService {
  apiName = 'Default';
  

  create = (input: CreateUpdateSinifDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SinifDto>({
      method: 'POST',
      url: '/api/app/sinif',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/sinif/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SinifDto>({
      method: 'GET',
      url: `/api/app/sinif/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SinifDto>>({
      method: 'GET',
      url: '/api/app/sinif',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getSinifInfo = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SinifInfoDto[]>({
      method: 'GET',
      url: '/api/app/sinif/sinif-info',
    },
    { apiName: this.apiName,...config });
  

  ogrenciEkleMultiByListAndGuidSinif = (list: number[], guidSinif: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/sinif/ogrenci-ekle-multi',
      params: { guidSinif },
      body: list,
    },
    { apiName: this.apiName,...config });
  

  ogrenciEkleSingleByGuidSinifAndOgrenciId = (guidSinif: string, ogrenciId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/sinif/ogrenci-ekle-single/${ogrenciId}`,
      params: { guidSinif },
    },
    { apiName: this.apiName,...config });
  

  sinifOnaylaByGuidSinif = (guidSinif: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/sinif/sinif-onayla',
      params: { guidSinif },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateSinifDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SinifDto>({
      method: 'PUT',
      url: `/api/app/sinif/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
