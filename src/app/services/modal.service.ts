import { Injectable } from '@angular/core';

interface IModal {
  id: string,
  visible: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modal: IModal[] = [];


  constructor() { }

  register(id: string) {
    this.modal.push({
      id: id,
      visible: false
    })
  }


  isModalOpen(id: string): boolean {
    return Boolean(this.modal.find(element => element.id === id)?.visible)
    console.log("IsModal called");
  }

  toggleModal(id: string) {
    const modal = this.modal.find(element => element.id === id)
    // return this.visible = !this.visible
    if (modal) {
      console.log(modal)
      modal.visible = !modal.visible
      console.log("toggleModal called", modal);
    }
  }
}

