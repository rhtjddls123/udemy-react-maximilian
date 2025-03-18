import { ReactNode, useEffect, useState } from "react";
import { OpinionsContext } from "./opinions-context";
import { NewOpinionType, OpinionType } from "../types/types";

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

  async function addOpinion(enteredOpinionData: NewOpinionType) {
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

  async function upvoteOpinion(id: OpinionType["id"]) {
    const response = await fetch(`http://localhost:3000/opinions/${id}/upvote`, {
      method: "POST"
    });

    if (!response.ok) {
      return;
    }

    setOpinions((prevOpinions) => {
      return prevOpinions.map((opinion) => {
        if (opinion.id === id) {
          return { ...opinion, votes: opinion.votes + 1 };
        }
        return opinion;
      });
    });
  }

  async function downvoteOpinion(id: OpinionType["id"]) {
    const response = await fetch(`http://localhost:3000/opinions/${id}/downvote`, {
      method: "POST"
    });

    if (!response.ok) {
      return;
    }

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
