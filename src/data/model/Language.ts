export type Language = 
  | { id: 0; title: 'Не имеет значения'; }
  | { id: 1; title: 'Английский'; }
  | { id: 2; title: 'Немецкий'; }
  | { id: 3; title: 'Французский'; }
  | { id: number; title: string; };