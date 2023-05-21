import { UnixTimestamp } from 'data/utils';
import { 
  KeywordMatchMethod, 
  KeywordSearchScope, 
  City, 
  WorkSchedule, 
  WorkLocation, 
  Education, 
  JobPosterType,
  Experience,
  MaritalStatus,
  ChildrenStatus,
  Language,
  LanguageProficiency,
  IndustryPreview,
  DriverLicenceCategory,
  SubwayStation,
  Currency,
  Gender,
  ModerationType,
  CovidVaccinationStatus,
  Employer,
  PhoneNumber,
  Address,
} from '.';

export interface Job {
  address: string | null; // Employer address
  age_from?: number;
  age_to?: number;
  agency: JobPosterType;
  agreement?: boolean; // Salary negotiable?
  already_sent_on_vacancy?: boolean; // Has current user already applied to this vacancy?
  anonymous?: boolean;
  candidat?: string; // Job requirements
  canEdit: boolean;
  catalogues: IndustryPreview[];
  children?: ChildrenStatus;
  client_logo: string | null; // Employers' logo URL
  client: Employer;
  code?: string;
  compensation: string | null; // Benefits
  contact?: string; // Employer's contact person name
  covid_vaccination_requirement: CovidVaccinationStatus;
  currency: Currency;
  date_archived?: UnixTimestamp;
  date_pub_to: UnixTimestamp; // Vacancy expiry date
  date_published: UnixTimestamp;
  driving_licence?: DriverLicenceCategory[];
  education: Education;
  email?: string; // Employer's email
  experience?: Experience;
  extend_vac?: boolean; // Extend vacancy?
  extended_search_parameters?: any[];
  external_url: string | null; // URL for redirection
  favorite?: boolean;
  fax: string | null; // Employer's fax number, 10 digits
  faxes: PhoneNumber[];
  firm_activity: string; // Employer's business description
  firm_name: string; // Employer name
  gender: Gender;
  highlight?: boolean;
  id_client?: number; // Employer ID
  id_user?: number; // ID of the user who created the job
  id: number;
  is_archive: boolean;
  is_closed?: boolean;
  is_storage: boolean; // Vacancy deleted?
  isBlacklisted?: boolean;
  languages?: Array<[Language, LanguageProficiency]>;
  latitude?: number;
  link: string; // Direct link to the vacancy
  longitude?: number;
  maritalstatus?: MaritalStatus;
  metro?: SubwayStation[];
  moderation_order?: ModerationType;
  moveable?: boolean; // Applicants from other cities considered?
  payment_from?: number; // Min salary
  payment_to?: number; // Max salary
  phone: string | null; // Employer's phone number, 10 digits
  phones: PhoneNumber[];
  place_of_work: WorkLocation;
  profession: string; // Job title
  refresh_vac?: boolean; // Refresh vacancy?
  rejected?: boolean;
  response_info?: any[];
  resumes_all?: number; // Total applied CVs count
  resumes_new?: number; // New applied CVs count
  resumesubscription_keywords?: string; // CV subscription keywords
  resumesubscription_kwc?: KeywordMatchMethod;
  resumesubscription_rws?: KeywordSearchScope;
  resumesubscription_status?: boolean; // Subscribe to CVs?
  town: City;
  type_of_work: WorkSchedule;
  url?: string; // Employer's website address
  vacancy_rich_text: string;
  views_count?: number;
  work: string | null; // Job description
}