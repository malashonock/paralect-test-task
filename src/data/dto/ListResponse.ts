export type ListResponse<T> = {
  objects: T[];
  total: number; // Total objects count
  more: boolean; // Any more objects left?
}