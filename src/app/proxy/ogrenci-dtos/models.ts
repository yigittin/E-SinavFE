import type { FullAuditedEntityDto } from '@abp/ng.core';
import type { DersInfoDto } from '../ders-dtos/models';
import type { SinifInfoDto } from '../sinif-dtos/models';
import type { CevapDto } from '../sinav-dtos/models';

export interface OgrenciSelectionDto {
  ogrenciNo?: string;
  userId?: string;
  ogrenciAdi?: string;
}

export interface OgrenciDto extends FullAuditedEntityDto<string> {
  ogrenciNo?: string;
  userId?: string;
  ogrenciAdi?: string;
  dersler: DersInfoDto[];
  siniflar: SinifInfoDto[];
}

export interface OgrenciCevapDto {
  soruId?: string;
  cevapList: CevapDto[];
  ogrenciCevapId?: string;
}
