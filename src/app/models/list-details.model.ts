import { Item } from './item-details.model';

export interface ListUI {
    id: string;
    title: string;
    totalItems: number;
    userId: string;
    list: Item[];
}