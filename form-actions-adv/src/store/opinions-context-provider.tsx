import { ReactNode, useEffect, useState } from "react";
import { OpinionsContext } from "./opinions-context";
import { OpinionType } from "../types/types";

interface OpinionsContextProviderProps {
  children: ReactNode;
}

export function OpinionsContextProvider({ children }: OpinionsContextProviderProps) {
  const [opinions, setOpinions] = useState<OpinionType[]>([]);

  useEffect(() => {
    async function loadOpinions() {
      const response = await fetch("http://localhost:3000/opinions");
      const opinions = await response.json();
      setOpinions(opinions);
    }

    loadOpinions();
  }, []);

  async function addOpinion(enteredOpinionData: OpinionType) {
    const response = await fetch("http://localhost:3000/opinions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(enteredOpinionData)
    });

    if (!response.ok) {
      return;
    }

    const savedOpinion: OpinionType = await response.json();
    setOpinions((prevOpinions) => [savedOpinion, ...prevOpinions]);
  }

  function upvoteOpinion(id: OpinionType["id"]) {
    setOpinions((prevOpinions) => {
      return prevOpinions.map((opinion) => {
        if (opinion.id === id) {
          return { ...opinion, votes: opinion.votes + 1 };
        }
        return opinion;
      });
    });
  }

  function downvoteOpinion(id: OpinionType["id"]) {
    setOpinions((prevOpinions) => {
      return prevOpinions.map((opinion) => {
        if (opinion.id === id) {
          return { ...opinion, votes: opinion.votes - 1 };
        }
        return opinion;
      });
    });
  }

  const contextValue = {
    opinions: opinions,
    addOpinion,
    upvoteOpinion,
    downvoteOpinion
  };

  return <OpinionsContext value={contextValue}>{children}</OpinionsContext>;
}
