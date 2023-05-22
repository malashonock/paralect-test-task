import { City, WorkSchedule, Currency } from '.';

export interface Job {
  id: number;
  profession: string; // Job title
  town: City;
  type_of_work: WorkSchedule;
  payment_from?: number; // Min salary
  payment_to?: number; // Max salary
  currency: Currency;
  vacancy_rich_text: string;
}