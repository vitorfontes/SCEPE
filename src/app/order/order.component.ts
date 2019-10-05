import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Order } from '../shared/models/order.model';
import { OrderService } from './services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public orderForm: FormGroup
  public orders: Order[]
  private action: string = '---'

  public update_flag: boolean = false
  public modal_title_text: string
  public id: number

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.getOrders()
  }

  private getOrders() {
    this.orderService.getOrders()
      .subscribe(
        orders => this.orders = [...orders],
        err => console.log(err),
        () => this.modalService.hasOpenModals() ? this.modalService.dismissAll() : null
      )
  }

  public openModal = (content) => {
    this.update_flag = false
    this.modal_title_text = 'Cadastro de pedidos'
    this.generateOrderForm()
    this.modalService.open(content, { centered: true, backdrop: 'static' })
  }

  private generateOrderForm = (): void => {
    this.orderForm = this.fb.group({
      nomeCliente: [null, Validators.required],
      valorPedido: [null, Validators.required],
      descPedido: [null, Validators.required],
      dataPedido: [null, Validators.required]
    })
  }

  private generateOrderUpdateForm = (order: Order): void => {
    this.orderForm = this.fb.group({
      idPedido: [order.idPedido, Validators.required],
      nomeCliente: [order.nomeCliente, Validators.required],
      valorPedido: [order.valorPedido, Validators.required],
      descPedido: [order.descPedido, Validators.required],
      dataPedido: [order.dataPedido, Validators.required]
    })
  }

  public postOrder = (): void => {
    let order: Order = this.orderForm.getRawValue()

    this.orderService.postOrder(order).subscribe(
      data => console.log(data),
      err => console.log(err),
      () => this.getOrders()
    )
  }

  public putOrder = (): void => {
    let order_update: Order = this.orderForm.getRawValue()
    this.orderService.putOrder(order_update, order_update.idPedido).subscribe(() => this.getOrders())
  }

  public deleteOrder = (): void => {
    this.orderService.deleteOrder(this.id).subscribe(() => this.getOrders())
  }

  public set_action = (action: string): string => this.action = action

  public execute_action = (order: Order, order_form_modal: any, delete_modal: any): void => {
    switch (this.action) {
      case 'Atualizar':
        this.update_flag = true
        this.modal_title_text = 'Atualizar pedido'
        this.generateOrderUpdateForm(order)
        this.modalService.open(order_form_modal, { centered: true, backdrop: 'static' })
        break;
      case 'Deletar':
        this.id = order.idPedido
        this.modalService.open(delete_modal, { centered: true, backdrop: 'static' })
        break;
      default:
        alert('Favor selecionar uma ação!!!')
        break;
    }
  }
}
