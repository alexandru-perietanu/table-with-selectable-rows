import { Type } from "@angular/core"

export type TableSettings = {
    width: string, 
    selectable: boolean
}

export type TableColumnDefinition = {
    data: string,
    field: string,
    headerComponent: Type<any>,
    rowComponent: Type<any>,
};