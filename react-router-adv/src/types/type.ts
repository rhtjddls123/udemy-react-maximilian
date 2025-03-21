import { PARAMS_IDS, ROUTER_IDS } from "../constants/constants";

export interface EventType {
  id: string;
  title: string;
  image: string;
  date: string;
  description: string;
}

export type parameterIds = (typeof PARAMS_IDS)[keyof typeof PARAMS_IDS];

export type RouteKey = (typeof ROUTER_IDS)[keyof typeof ROUTER_IDS];

export interface ActionResponseType {
  message: string;
  errors?: {
    title: string;
    description: string;
    date: string;
    image: string;
  };
}

export interface NewsletterSignupResponseType {
  message: string;
}
