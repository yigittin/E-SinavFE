import type { OgrenciDto, OgrenciSelectionDto } from '../ogrenci-dtos/models';
import type { SinifYetkiliDto } from '../yetkili-dtos/models';
import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateSinifDto {
  sinifAdi: string;
  sinifLimit: number;
  dersId: string;
  dersAdi: string;
  ogrenciList: OgrenciDto[];
  yetkiliList: SinifYetkiliDto[];
}

export interface SinifDto extends AuditedEntityDto<string> {
  sinifAdi?: string;
  sinifLimit: number;
  dersId?: string;
  dersAdi?: string;
  isOnaylandi: boolean;
  onaylayanKullaniciAdi?: string;
  ogrenciList: OgrenciDto[];
  yetkiliList: SinifYetkiliDto[];
}

export interface SinifInfoDto {
  sinifAdi?: string;
  sinifLimit: number;
  dersId?: string;
  dersAdi?: string;
  isOnaylandi: boolean;
  onaylayanKullaniciAdi?: string;
  ogrenciList: OgrenciSelectionDto[];
  yetkiliList: SinifYetkiliDto[];
  creatorUserName?: string;
  creatorId?: string;
}
