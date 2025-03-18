export interface OpinionType {
  id: string;
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

export type newOpinionType = keyof NewOpinionType;
