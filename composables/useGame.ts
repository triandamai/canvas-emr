import { Jari, Result } from "./typeGame";

export const useGame = () => {
  function hitungHasil(yours: Jari, opponent: Jari) {
    if (yours == "✌️") {
      if (opponent == "✌️") return getResult("seri");
      if (opponent == "🖐") return getResult("win");
      if (opponent == "✊") return getResult("lose");
    }

    if (yours == "🖐") {
      if (opponent == "✌️") return getResult("lose");
      if (opponent == "🖐") return getResult("seri");
      if (opponent == "✊") return getResult("win");
    }

    if (yours == "✊") {
      if (opponent == "✌️") return getResult("win");
      if (opponent == "🖐") return getResult("lose");
      if (opponent == "✊") return getResult("seri");
    }
  }
  function getResult(result: "seri" | "lose" | "win"): Result {
    if (result == "seri")
      return {
        text: "😐 Seri, coba lagi!",
        color: "text-blue-500",
        show: true,
      };
    if (result == "lose")
      return { text: "🤣 Yaah, kamu kalah", color: "text-red-500", show: true };
    if (result == "win")
      return {
        text: "🥳 Yeey, kamu menang",
        color: "text-green-500",
        show: true,
      };
  }

  return {
    hitungHasil,
  };
};
