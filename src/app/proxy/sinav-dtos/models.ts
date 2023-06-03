import type { AuditedEntityDto } from '@abp/ng.core';

export interface CevapDto {
  id?: string;
  cevapMetni?: string;
  soruId?: string;
  isDogru: boolean;
}

export interface CompleteSinavDto {
  sinav: SinavDto;
  soruList: SoruDto[];
}

export interface CreateUpdateCevapDto {
  id?: string;
  cevapMetni: string;
  isDogru: boolean;
  soruId: string;
}

export interface CreateUpdateSinavDto {
  id?: string;
  sinavAdi: string;
  dersId: string;
  baslangicTarih: string;
  sinavSure: number;
  agirlik: number;
}

export interface CreateUpdateSoruDto {
  id?: string;
  soruMetni: string;
  sinavId: string;
  puan: number;
}

export interface SinavCrudDto extends AuditedEntityDto<string> {
}

export interface SinavDto {
  id?: string;
  sinavAdi?: string;
  soruList: SoruDto[];
  dersId?: string;
  baslangicTarih?: string;
  sinavSure: number;
  agirlik: number;
  dersAdi?: string;
}

export interface SoruDto {
  id?: string;
  soruMetni?: string;
  sinavId?: string;
  cevapList: CevapDto[];
}
