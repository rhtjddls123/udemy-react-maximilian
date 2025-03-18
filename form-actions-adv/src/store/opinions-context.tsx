import { createContext } from "react";

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
