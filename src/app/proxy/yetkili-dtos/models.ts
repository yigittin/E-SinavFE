import type { AuditedEntityDto } from '@abp/ng.core';
import type { IdentityUserDto } from '../volo/abp/identity/models';
import type { SinifDto } from '../sinif-dtos/models';

export interface SinifYetkiliDto extends AuditedEntityDto<number> {
  ogretmenNo?: string;
  userId?: string;
  user: IdentityUserDto;
  siniflar: SinifDto[];
}
