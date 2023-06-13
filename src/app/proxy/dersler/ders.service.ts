import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CreateUpdateDersDto, DersDropDownDto, DersDto, DersInfoDto, UpdateDersDto } from '../ders-dtos/models';
import type { OgrenciSelectionDto } from '../ogrenci-dtos/models';
import type { SinifInfoDto } from '../sinif-dtos/models';

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
  

  createDersByInput = (input: CreateUpdateDersDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/ders/ders',
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
  

  getDersAnasayfa = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DersInfoDto[]>({
      method: 'GET',
      url: '/api/app/ders/ders-anasayfa',
    },
    { apiName: this.apiName,...config });
  

  getDersDropdown = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DersDropDownDto[]>({
      method: 'GET',
      url: '/api/app/ders/ders-dropdown',
    },
    { apiName: this.apiName,...config });
  

  getDersInfoBySkipCountAndMaxResultCountAndSortingAndFilter = (skipCount: number, maxResultCount: number, sorting: string = "DersAdi", filter?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DersInfoDto[]>({
      method: 'GET',
      url: '/api/app/ders/ders-info',
      params: { skipCount, maxResultCount, sorting, filter },
    },
    { apiName: this.apiName,...config });
  

  getDersOgrenciListByDersId = (dersId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OgrenciSelectionDto[]>({
      method: 'GET',
      url: `/api/app/ders/ders-ogrenci-list/${dersId}`,
    },
    { apiName: this.apiName,...config });
  

  getDersSingleByIdById = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DersInfoDto>({
      method: 'GET',
      url: `/api/app/ders/${id}/ders-single-by-id`,
    },
    { apiName: this.apiName,...config });
  

  getDersSiniflarByDersId = (dersId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SinifInfoDto[]>({
      method: 'GET',
      url: `/api/app/ders/ders-siniflar/${dersId}`,
    },
    { apiName: this.apiName,...config });
  

  getIsOgrenci = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'GET',
      url: '/api/app/ders/is-ogrenci',
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<DersDto>>({
      method: 'GET',
      url: '/api/app/ders',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getOgrenciListByDersId = (dersId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OgrenciSelectionDto[]>({
      method: 'GET',
      url: `/api/app/ders/ogrenci-list/${dersId}`,
    },
    { apiName: this.apiName,...config });
  

  getPagedDerslerByInputAndFilter = (input: PagedAndSortedResultRequestDto, filter?: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<DersInfoDto>>({
      method: 'GET',
      url: '/api/app/ders/paged-dersler',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount, filter },
    },
    { apiName: this.apiName,...config });
  

  ogrenciEkleMultiByListAndGuidDers = (list: string[], guidDers: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/ders/ogrenci-ekle-multi',
      params: { guidDers },
      body: list,
    },
    { apiName: this.apiName,...config });
  

  ogrenciEkleSingleByGuidDersAndOgrenciId = (guidDers: string, ogrenciId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/ders/ogrenci-ekle-single/${ogrenciId}`,
      params: { guidDers },
    },
    { apiName: this.apiName,...config });
  

  ogrenciRepoGuncelle = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/ders/ogrenci-repo-guncelle',
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateDersDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DersDto>({
      method: 'PUT',
      url: `/api/app/ders/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateDersByInput = (input: UpdateDersDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/ders/ders',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateDersInfoByInput = (input: UpdateDersDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/ders/ders-info',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  yetkiliEkleByDersIdAndYetkiliId = (dersId: string, yetkiliId: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/ders/yetkili-ekle',
      params: { dersId },
      body: yetkiliId,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
