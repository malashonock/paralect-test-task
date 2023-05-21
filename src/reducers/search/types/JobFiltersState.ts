import { SalaryRange } from '.';

export interface JobFiltersState {
  industryId: string | undefined;
  salaryRange: SalaryRange;
}