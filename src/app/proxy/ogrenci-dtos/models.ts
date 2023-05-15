import type { FullAuditedEntityDto } from '@abp/ng.core';
import type { DersInfoDto } from '../ders-dtos/models';
import type { SinifInfoDto } from '../sinif-dtos/models';

export interface OgrenciDto extends FullAuditedEntityDto<number> {
  ogrenciNo?: string;
  userId?: string;
  dersler: DersInfoDto[];
  siniflar: SinifInfoDto[];
}
