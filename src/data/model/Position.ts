export interface Position {
  key: number;
  id_parent: number;
  title: string;
  title_rus: string;
  url_rus: string;
}

export type PositionPreview = 
  & { id: Position['key']; }
  & Pick<Position, 'key' | 'title'>;