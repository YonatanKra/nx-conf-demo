import { Card } from "./card.model";
import { Character } from "./character.model";

export interface GameState {
  character: Character
  currentCard: Card
}
