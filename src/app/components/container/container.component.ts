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
import { DynamicContentDirective } from '../directives/dynamic-content.directive';
import { IDynamicContent } from '../dynamic-content';

@Component({
  selector: 'table-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  @ViewChild(DynamicContentDirective, { static: true })
  dynamicContent!: DynamicContentDirective;

  @Input()
  component!: Type<any>;

  @Input()
  componentData: any;

  @Output()
  emitter = new EventEmitter<any>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(this.component);

    const viewContainerRef = this.dynamicContent.viewContainerRef;
    viewContainerRef.clear();

    const componentRef =
      viewContainerRef.createComponent<IDynamicContent>(componentFactory);
    componentRef.instance.data = this.componentData;
    componentRef.instance.emitter.subscribe((event) => {
      this.emitter.emit(event);
    });
  }
}
