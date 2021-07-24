import { EventEmitter } from "@angular/core";

export interface IDynamicContent {
    data: any;
    
    // @Output()
    emitter: EventEmitter<any>;
}
