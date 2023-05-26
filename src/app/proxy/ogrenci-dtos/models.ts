import type { FullAuditedEntityDto } from '@abp/ng.core';
import type { DersInfoDto } from '../ders-dtos/models';
import type { SinifInfoDto } from '../sinif-dtos/models';

export interface OgrenciDto extends FullAuditedEntityDto<string> {
  ogrenciNo?: string;
  userId?: string;
  ogrenciAdi?: string;
  dersler: DersInfoDto[];
  siniflar: SinifInfoDto[];
}

export interface OgrenciSelectionDto {
  ogrenciNo?: string;
  userId?: string;
  ogrenciAdi?: string;
}
