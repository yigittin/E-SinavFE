import type { BolumDto, BolumInfoDto, CreateUpdateBolumDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BolumService {
  apiName = 'Default';
  

  create = (input: CreateUpdateBolumDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BolumDto>({
      method: 'POST',
      url: '/api/app/bolum',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/bolum/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BolumDto>({
      method: 'GET',
      url: `/api/app/bolum/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getBolumlerInfoBySkipCountAndMaxResultCountAndSortingAndFilter = (skipCount: number, maxResultCount: number, sorting: string, filter?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BolumInfoDto[]>({
      method: 'GET',
      url: '/api/app/bolum/bolumler-info',
      params: { skipCount, maxResultCount, sorting, filter },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<BolumDto>>({
      method: 'GET',
      url: '/api/app/bolum',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getPagedBolumlerByInputAndFilter = (input: PagedAndSortedResultRequestDto, filter?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<BolumInfoDto>>({
      method: 'GET',
      url: '/api/app/bolum/paged-bolumler',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount, filter },
    },
    { apiName: this.apiName,...config });
  

  newBolumByInput = (input: CreateUpdateBolumDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BolumInfoDto>({
      method: 'POST',
      url: '/api/app/bolum/new-bolum',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateBolumDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BolumDto>({
      method: 'PUT',
      url: `/api/app/bolum/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
