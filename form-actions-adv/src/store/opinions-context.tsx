import { createContext } from "react";
import { OpinionType } from "../types/types";

export interface OpinionsContextType {
  opinions: OpinionType[];
  addOpinion: (opinion: OpinionType) => void;
  upvoteOpinion: (id: OpinionType["id"]) => void;
  downvoteOpinion: (id: OpinionType["id"]) => void;
}

export const OpinionsContext = createContext<OpinionsContextType>({
  opinions: [],
  addOpinion: () => {},
  upvoteOpinion: () => {},
  downvoteOpinion: () => {}
});
