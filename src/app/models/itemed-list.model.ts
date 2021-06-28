import { Item } from './item.model';

export interface ItemedList {
    id: string;
    title: string;
    totalItems: number;
    userId: string;
    items: Item[];
}