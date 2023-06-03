import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CevapDto, CreateUpdateCevapDto } from '../sinav-dtos/models';

@Injectable({
  providedIn: 'root',
})
export class CevapService {
  apiName = 'Default';
  

  createUpdateCevapByInput = (input: CreateUpdateCevapDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/cevap/update-cevap',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  dogruCevapSecById = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/cevap/${id}/dogru-cevap-sec`,
    },
    { apiName: this.apiName,...config });
  

  getCevapListBySoruId = (soruId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CevapDto[]>({
      method: 'GET',
      url: `/api/app/cevap/cevap-list/${soruId}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
