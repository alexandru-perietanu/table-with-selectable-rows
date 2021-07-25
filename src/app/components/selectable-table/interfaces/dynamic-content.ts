import { EventEmitter } from "@angular/core";

export interface IDynamicContent {
    data: any;
    emitter: EventEmitter<any>;
}
