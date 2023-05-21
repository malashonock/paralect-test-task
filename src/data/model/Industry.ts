import { Position, PositionPreview } from '.';

export interface Industry {
  key: number;
  title: string;
  title_rus: string;
  url_rus: string;
  title_trimmed: string;
  positions: Position[];
}

export type IndustryPreview =
  & { 
    id: Industry['key']; 
    positions: PositionPreview[];
  }
  & Pick<Industry, 'key' | 'title'>;