import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CreateUpdateSoruDto } from '../sinav-dtos/models';

@Injectable({
  providedIn: 'root',
})
export class SoruService {
  apiName = 'Default';
  

  createUpdateSoruByInput = (input: CreateUpdateSoruDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/soru/update-soru',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  deleteSoruById = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/soru/${id}/soru`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
