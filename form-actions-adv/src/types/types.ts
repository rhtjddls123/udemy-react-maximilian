export interface OpinionType {
  id: number;
  title: string;
  body: string;
  userName: string;
  votes: number;
}

export interface NewOpinionType {
  userName: string;
  title: string;
  body: string;
}

export type NewOpinionKeyTypes = keyof NewOpinionType;
