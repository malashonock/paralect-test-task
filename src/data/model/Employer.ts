import { UnixTimestamp } from 'data/utils';
import { Address, City, Industry } from '.';

export interface Employer {
  id: number;
  title: string; // Employer name
  link: string; // Employer's vacancies page
  industry: Industry[]; // IndustryPreview[]?
  description: string;
  vacancy_count: number;
  staff_count: string; // enum?
  client_logo?: string | null; // Employers' logo URL
  address?: string | null; // Employer address
  addresses?: Address[];
  url?: string; // Employer's website address
  short_reg: boolean;
  is_blocked: boolean;
  registered_date: UnixTimestamp;
  town: City;
}