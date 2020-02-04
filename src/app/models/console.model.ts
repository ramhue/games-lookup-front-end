import { publishers } from './publishers.model';

export interface console{
    id: Number;
    console_desc: String;
    release_date: String;
    publisher:publishers;
    consolename: String;
}