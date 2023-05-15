import type { SinifDto } from '../sinif-dtos/models';
import type { AuditedEntityDto } from '@abp/ng.core';

export interface DersInfoDto {
  name?: string;
  bolumId?: string;
  bolumName?: string;
  sinifList: SinifDto[];
  isOnaylandi: boolean;
  creatorUserName?: string;
  creatorId?: string;
  yetkiliId?: string;
  yetkiliName?: string;
}

export interface CreateUpdateDersDto {
  name: string;
  bolumId: string;
  sinifList: SinifDto[];
}

export interface DersDto extends AuditedEntityDto<string> {
  name?: string;
  bolumId?: string;
  bolumName?: string;
  sinifList: SinifDto[];
  creatorUserName?: string;
}
