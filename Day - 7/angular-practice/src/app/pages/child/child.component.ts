import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() current!: string;
  @Output() onDelete = new EventEmitter();

  ngOnInit() {
    console.log(this.current);
  }

  buttonClicked() {
    this.onDelete.emit(this.current);
  }



}
