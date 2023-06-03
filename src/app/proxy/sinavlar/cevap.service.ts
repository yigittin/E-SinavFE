import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CevapCrudDto, CevapDto, CreateUpdateCevapDto } from '../sinav-dtos/models';

@Injectable({
  providedIn: 'root',
})
export class CevapService {
  apiName = 'Default';
  

  create = (input: CreateUpdateCevapDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CevapCrudDto>({
      method: 'POST',
      url: '/api/app/cevap',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createUpdateCevapByInput = (input: CreateUpdateCevapDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/cevap/update-cevap',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/cevap/${id}`,
    },
    { apiName: this.apiName,...config });
  

  dogruCevapSecById = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/cevap/${id}/dogru-cevap-sec`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CevapCrudDto>({
      method: 'GET',
      url: `/api/app/cevap/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getCevapListBySoruId = (soruId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CevapDto[]>({
      method: 'GET',
      url: `/api/app/cevap/cevap-list/${soruId}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CevapCrudDto>>({
      method: 'GET',
      url: '/api/app/cevap',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateCevapDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CevapCrudDto>({
      method: 'PUT',
      url: `/api/app/cevap/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
