import type { AuditedEntityDto } from '@abp/ng.core';

export interface BolumDropDownDto {
  id?: string;
  bolumAdi?: string;
}

export interface BolumDto extends AuditedEntityDto<string> {
  name?: string;
  isOnaylandi: boolean;
}

export interface BolumInfoDto {
  id?: string;
  bolumAdi?: string;
  isOnaylandi: boolean;
  creatorId?: string;
  creatorUserName?: string;
  bolumOnayciAdi?: string;
}

export interface CreateUpdateBolumDto {
  bolumAdi: string;
  isOnaylandi: boolean;
}

export interface UpdateBolumDto {
  id?: string;
  bolumAdi?: string;
}
