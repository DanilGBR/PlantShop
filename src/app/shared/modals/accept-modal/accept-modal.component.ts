import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-accept-modal',
  templateUrl: './accept-modal.component.html',
})
export class AcceptModalComponent {
  public modalHeader: string = '';
  public modalMessage: string = '';

  constructor(public modalRef: MdbModalRef<AcceptModalComponent>) {
    console.log(MdbModalRef);
  }
}
