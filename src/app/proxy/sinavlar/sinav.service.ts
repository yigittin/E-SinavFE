import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CompleteSinavDto, CreateUpdateSinavDto, OgrenciSinavDto, SinavCrudDto, SinavDto } from '../sinav-dtos/models';

@Injectable({
  providedIn: 'root',
})
export class SinavService {
  apiName = 'Default';
  

  create = (input: CreateUpdateSinavDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SinavCrudDto>({
      method: 'POST',
      url: '/api/app/sinav',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createUpdateSinavByInput = (input: CreateUpdateSinavDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/sinav/update-sinav',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/sinav/${id}`,
    },
    { apiName: this.apiName,...config });
  

  deleteSinavById = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/sinav/${id}/sinav`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SinavCrudDto>({
      method: 'GET',
      url: `/api/app/sinav/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SinavCrudDto>>({
      method: 'GET',
      url: '/api/app/sinav',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getOgrenciSinavSureBySinavId = (sinavId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OgrenciSinavDto>({
      method: 'GET',
      url: `/api/app/sinav/ogrenci-sinav-sure/${sinavId}`,
    },
    { apiName: this.apiName,...config });
  

  getPagedSiniflarByInputAndFilter = (input: PagedAndSortedResultRequestDto, filter?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SinavDto>>({
      method: 'GET',
      url: '/api/app/sinav/paged-siniflar',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount, filter },
    },
    { apiName: this.apiName,...config });
  

  getSinavDetailsById = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CompleteSinavDto>({
      method: 'GET',
      url: `/api/app/sinav/${id}/sinav-details`,
    },
    { apiName: this.apiName,...config });
  

  getSinavInfo = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SinavDto[]>({
      method: 'GET',
      url: '/api/app/sinav/sinav-info',
    },
    { apiName: this.apiName,...config });
  

  getSinavSingleById = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SinavDto>({
      method: 'GET',
      url: `/api/app/sinav/${id}/sinav-single`,
    },
    { apiName: this.apiName,...config });
  

  sinavBaslatBySinavId = (sinavId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/sinav/sinav-baslat/${sinavId}`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateSinavDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SinavCrudDto>({
      method: 'PUT',
      url: `/api/app/sinav/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
