export type CovidVaccinationStatus = 
  | { id: 1; title: 'Не важно'; }
  | { id: 2; title: 'Требуется сертификат'; }
  | { id: 3; title: 'Готовность к вакцинации'; }
  | { id: number; title: string; };