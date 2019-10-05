import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { InventoryControl } from '../shared/models/inventory-control.model';
import { InventoryControlService } from './services/inventory-control.service';

@Component({
  selector: 'app-inventory-control',
  templateUrl: './inventory-control.component.html',
  styleUrls: ['./inventory-control.component.css']
})
export class InventoryControlComponent implements OnInit {

  public inventoryControlForm: FormGroup
  public invetory_control: InventoryControl[]
  private action: string = '---'

  public update_flag: boolean = false
  public modal_title_text: string
  public id: number

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private inventoryControlService: InventoryControlService
  ) { }

  ngOnInit() {
    this.getInvetoryControl()
  }

  private getInvetoryControl() {
    this.inventoryControlService.getInvetoryControl()
      .subscribe(
        invetory_control => this.invetory_control = [...invetory_control],
        err => console.log(err),
        () => this.modalService.hasOpenModals() ? this.modalService.dismissAll() : null
      )
  }

  public openModal = (content) => {
    this.update_flag = false
    this.modal_title_text = 'Adiconar produto'
    this.generateInventoryControlForm()
    this.modalService.open(content, { centered: true, backdrop: 'static' })
  }

  private generateInventoryControlForm = (): void => {
    this.inventoryControlForm = this.fb.group({
      nomeProduto: [null, Validators.required],
      quantidaProduto: [null, Validators.required],
      entradaProduto: [null, Validators.required],
      saidaProduto: [null]
    })
  }

  private generateInventoryUpdateForm = (inventory_control: InventoryControl): void => {
    this.inventoryControlForm = this.fb.group({
      idProduto: [inventory_control.idProduto, Validators.required],
      nomeProduto: [inventory_control.nomeProduto, Validators.required],
      quantidaProduto: [inventory_control.quantidaProduto, Validators.required],
      entradaProduto: [inventory_control.entradaProduto, Validators.required],
      saidaProduto: [inventory_control.saidaProduto]
    })
  }

  public postInventoryControl = (): void => {
    let inventory: InventoryControl = this.inventoryControlForm.getRawValue()

    this.inventoryControlService.postInventoryControl(inventory).subscribe(
      data => console.log(data),
      err => console.log(err),
      () => this.getInvetoryControl()
    )
  }

  public putInventoryControl = (): void => {
    let inventory_update: InventoryControl = this.inventoryControlForm.getRawValue()
    this.inventoryControlService.putInventoryControl(inventory_update, inventory_update.idProduto).subscribe(() => this.getInvetoryControl())
  }

  public deleteInventoryControl = (): void => {
    this.inventoryControlService.deleteInventoryControl(this.id).subscribe(() => this.getInvetoryControl())
  }

  public set_action = (action: string): string => this.action = action

  public execute_action = (inventory: InventoryControl, inventory_form_modal: any, delete_modal: any): void => {
    switch (this.action) {
      case 'Atualizar':
        this.update_flag = true
        this.modal_title_text = 'Atualizar estoque do produto'
        this.generateInventoryUpdateForm(inventory)
        this.modalService.open(inventory_form_modal, { centered: true, backdrop: 'static' })
        break;
      case 'Deletar':
        this.id = inventory.idProduto
        this.modalService.open(delete_modal, { centered: true, backdrop: 'static' })
        break;
      default:
        alert('Favor selecionar uma ação!!!')
        break;
    }
  }
}
