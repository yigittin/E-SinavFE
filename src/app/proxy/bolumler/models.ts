import type { AuditedEntityDto } from '@abp/ng.core';
import type { DersDto } from '../ders-dtos/models';

export interface BolumDto extends AuditedEntityDto<string> {
  name?: string;
  isOnaylandi: boolean;
  dersList: DersDto[];
}

export interface BolumInfoDto {
  id?: string;
  name?: string;
  isOnaylandi: boolean;
  creatorId?: string;
  creatorUserName?: string;
}

export interface CreateUpdateBolumDto {
  name: string;
  isOnaylandi: boolean;
  dersList: DersDto[];
}
