import { Card, MonsterCard } from './card.model';
import { Character } from "./character.model";

interface CurrentCard {
  card: Card;
  cardState: string;
}

export interface GameState {
  deck?: (Card | MonsterCard)[];
  character: Character;
  currentCard: CurrentCard | undefined;
}
