export type WorkSchedule = 
  | { id: 0; title: 'не имеет значения' }
  | { id: 6; title: 'полный рабочий день' }
  | { id: 7; title: 'временная работа / freelance' }
  | { id: 9; title: 'работа вахтовым методом' }
  | { id: 10; title: 'неполный рабочий день' }
  | { id: 12; title: 'сменный график работы' }
  | { id: 13; title: 'частичная занятость' };