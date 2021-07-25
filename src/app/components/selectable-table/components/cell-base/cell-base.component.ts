import {
  Component,
  Input,
  OnInit,
  ViewChild,
  Type,
  ComponentFactoryResolver,
  EventEmitter,
  Output,
} from '@angular/core';
import { DynamicContentDirective } from '../../directives/dynamic-content.directive';
import { IDynamicContent } from '../../interfaces/dynamic-content';


@Component({
  selector: 'table-cell-base',
  templateUrl: './cell-base.component.html',
  styleUrls: ['./cell-base.component.css'],
})
export class CellBaseComponent implements OnInit {
  @ViewChild(DynamicContentDirective, { static: true })
  dynamicContent!: DynamicContentDirective;

  @Input()
  component?: Type<any>;

  @Input()
  componentData: any;

  @Output()
  emitter = new EventEmitter<any>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    if (!this.component) return;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);

    const viewContainerRef = this.dynamicContent.viewContainerRef;
    viewContainerRef.clear();

    const componentRef =
      viewContainerRef.createComponent<IDynamicContent>(componentFactory);
    componentRef.instance.data = this.componentData;
    componentRef.instance.emitter.subscribe((event: any) => {
      this.emitter.emit(event);
    });
  }
}
