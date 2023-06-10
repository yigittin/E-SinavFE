import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { OgrenciSelectionDto } from '../ogrenci-dtos/models';
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
  

  createSinifByInput = (input: CreateUpdateSinifDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/sinif/sinif',
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
  

  getOgrenciListBySinifIdAndDersId = (sinifId: string, dersId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OgrenciSelectionDto[]>({
      method: 'GET',
      url: '/api/app/sinif/ogrenci-list',
      params: { sinifId, dersId },
    },
    { apiName: this.apiName,...config });
  

  getPagedSiniflarByInputAndFilter = (input: PagedAndSortedResultRequestDto, filter?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SinifInfoDto>>({
      method: 'GET',
      url: '/api/app/sinif/paged-siniflar',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount, filter },
    },
    { apiName: this.apiName,...config });
  

  getSinifInfo = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SinifInfoDto[]>({
      method: 'GET',
      url: '/api/app/sinif/sinif-info',
    },
    { apiName: this.apiName,...config });
  

  getSinifSingleById = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SinifInfoDto>({
      method: 'GET',
      url: `/api/app/sinif/${id}/sinif-single`,
    },
    { apiName: this.apiName,...config });
  

  sinifAnasayfa = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SinifInfoDto[]>({
      method: 'POST',
      url: '/api/app/sinif/sinif-anasayfa',
    },
    { apiName: this.apiName,...config });
  

  sinifOgrenciCikarMultiByGuidSinifAndList = (guidSinif: string, list: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/sinif/sinif-ogrenci-cikar-multi',
      params: { guidSinif },
      body: list,
    },
    { apiName: this.apiName,...config });
  

  sinifOgrenciCikarSingleByGuidSinifAndOgrenciId = (guidSinif: string, ogrenciId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/sinif/sinif-ogrenci-cikar-single/${ogrenciId}`,
      params: { guidSinif },
    },
    { apiName: this.apiName,...config });
  

  sinifOgrenciEkleMultiByListAndGuidSinif = (list: string[], guidSinif: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/sinif/sinif-ogrenci-ekle-multi',
      params: { guidSinif },
      body: list,
    },
    { apiName: this.apiName,...config });
  

  sinifOgrenciEkleSingleByGuidSinifAndOgrenciId = (guidSinif: string, ogrenciId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/sinif/sinif-ogrenci-ekle-single/${ogrenciId}`,
      params: { guidSinif },
    },
    { apiName: this.apiName,...config });
  

  sinifOgrenciListByGuidSinif = (guidSinif: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OgrenciSelectionDto[]>({
      method: 'POST',
      url: '/api/app/sinif/sinif-ogrenci-list',
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
  

  sinifYetkiliCikarSingleBySinifIdAndYetkiliId = (sinifId: string, yetkiliId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/sinif/sinif-yetkili-cikar-single',
      params: { sinifId, yetkiliId },
    },
    { apiName: this.apiName,...config });
  

  sinifYetkiliEkleMultiBySinifIdAndList = (sinifId: string, list: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/sinif/sinif-yetkili-ekle-multi/${sinifId}`,
      body: list,
    },
    { apiName: this.apiName,...config });
  

  sinifYetkiliEkleSingleBySinifIdAndYetkiliId = (sinifId: string, yetkiliId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/sinif/sinif-yetkili-ekle-single',
      params: { sinifId, yetkiliId },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateSinifDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SinifDto>({
      method: 'PUT',
      url: `/api/app/sinif/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateSinifCustomByInput = (input: CreateUpdateSinifDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/sinif/sinif-custom',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
