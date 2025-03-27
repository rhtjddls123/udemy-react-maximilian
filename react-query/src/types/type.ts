export interface EventType {
  id: string;
  image: string;
  title: string;
  location: string;
  date: string;
  time: string;
  description: string;
}

export interface InputDataType {
  title?: string;
  description?: string;
  date?: string;
  time?: string;
  location?: string;
  image?: string;
}

export interface ImageType {
  path: string;
  caption: string;
}

export interface FetchErrorType extends Error {
  code?: number;
  info?: { message: string };
}
