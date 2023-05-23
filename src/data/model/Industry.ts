import { Position } from '.';

export interface Industry {
  key: number;
  title: string;
  title_rus: string;
  url_rus: string;
  title_trimmed: string;
  positions: Position[];
}