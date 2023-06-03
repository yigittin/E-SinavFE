import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CreateUpdateSoruDto, SoruCrudDto, SoruDto } from '../sinav-dtos/models';

@Injectable({
  providedIn: 'root',
})
export class SoruService {
  apiName = 'Default';
  

  create = (input: CreateUpdateSoruDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SoruCrudDto>({
      method: 'POST',
      url: '/api/app/soru',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createUpdateSoruByInput = (input: CreateUpdateSoruDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/soru/update-soru',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/soru/${id}`,
    },
    { apiName: this.apiName,...config });
  

  deleteSoruById = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/soru/${id}/soru`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SoruCrudDto>({
      method: 'GET',
      url: `/api/app/soru/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SoruCrudDto>>({
      method: 'GET',
      url: '/api/app/soru',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getSoruListBySinavIdById = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SoruDto[]>({
      method: 'GET',
      url: `/api/app/soru/${id}/soru-list-by-sinav-id`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateSoruDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SoruCrudDto>({
      method: 'PUT',
      url: `/api/app/soru/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
