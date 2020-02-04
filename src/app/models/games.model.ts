import { console } from "./console.model";
import { publishers } from "./publishers.model";
import { developer } from './developer.model';

export interface game{
    id:Number;
    gameName: String;
    game_desc:String;
    releaseDate:String;
    consoleModel:console;
    publisherModel:publishers;
    developer:developer;
}