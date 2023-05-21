import type { IdentityUserDto } from '../volo/abp/identity/models';
import type { AuditedEntityDto } from '@abp/ng.core';

export interface DersInfoDto {
  id?: string;
  dersAdi?: string;
  bolumId?: string;
  bolumName?: string;
  isOnaylandi: boolean;
  creatorId?: string;
  creatorUserName?: string;
  dersOnayciAdi?: string;
  dersOnayciId?: string;
  yetkiliId: string[];
  yetkililer: IdentityUserDto[];
}

export interface CreateUpdateDersDto {
  dersAdi: string;
  bolumId: string;
}

export interface DersDto extends AuditedEntityDto<string> {
  dersAdi?: string;
  bolumId?: string;
  bolumName?: string;
  creatorUserName?: string;
}

export interface UpdateDersDto {
  id: string;
  dersAdi: string;
  bolumId: string;
  yetkiliId: string[];
  isOnaylandi: boolean;
}
