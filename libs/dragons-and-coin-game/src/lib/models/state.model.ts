import { Card, MonsterCard } from './card.model';
import { Character } from "./character.model";
import * as Actions from '../store/actions';

interface CurrentCard {
  card: Card;
  cardState: string;
}

export interface GameState {
  deck?: (Card | MonsterCard)[];
  character: Character;
  currentCard: CurrentCard | undefined;
  commitAction: (actionName: string, payload?: any) => void;
}
