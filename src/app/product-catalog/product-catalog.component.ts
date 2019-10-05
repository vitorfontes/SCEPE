import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductCatalog } from '../shared/models/product-catalog.model';
import { ProductCatalogService } from './services/product-catalog.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {

  public productCatalogForm: FormGroup
  public product_catalog: ProductCatalog[]
  private action: string = '---'

  public update_flag: boolean = false
  public modal_title_text: string
  public id: number

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private productCatalogService: ProductCatalogService
  ) { }

  ngOnInit() {
    this.getProductsCatalog()
  }

  private getProductsCatalog() {
    this.productCatalogService.getProductsCatalog()
      .subscribe(
        product_catalog => this.product_catalog = [...product_catalog],
        err => console.log(err),
        () => this.modalService.hasOpenModals() ? this.modalService.dismissAll() : null
      )
  }

  public openModal = (content) => {
    this.update_flag = false
    this.modal_title_text = 'Adiconar produto no catálogo'
    this.generateProductCatalogForm()
    this.modalService.open(content, { centered: true, backdrop: 'static' })
  }

  private generateProductCatalogForm = (): void => {
    this.productCatalogForm = this.fb.group({
      nome: [null, Validators.required],
      descricao: [null, Validators.required],
      valor: [null, Validators.required],
      estoque: [null, Validators.required],
      status: [null, Validators.required],
      parcela: [null, Validators.required],
    })
  }

  private generateProductCatalogUpdateForm = (product_catalog: ProductCatalog): void => {
    this.productCatalogForm = this.fb.group({
      id: [product_catalog.id, Validators.required],
      nome: [product_catalog.nome, Validators.required],
      descricao: [product_catalog.descricao, Validators.required],
      valor: [product_catalog.valor, Validators.required],
      estoque: [product_catalog.estoque, Validators.required],
      status: [product_catalog.status, Validators.required],
      parcela: [product_catalog.parcela, Validators.required],
    })
  }

  public postProductCatalog = (): void => {
    let product_catalog: ProductCatalog = this.productCatalogForm.getRawValue()

    this.productCatalogService.postProductCatalog(product_catalog).subscribe(
      data => console.log(data),
      err => console.log(err),
      () => this.getProductsCatalog()
    )
  }

  public putProductCatalog = (): void => {
    let product_catalog: ProductCatalog = this.productCatalogForm.getRawValue()
    this.productCatalogService.putProductCatalog(product_catalog, product_catalog.id).subscribe(() => this.getProductsCatalog())
  }

  public deleteProductCatalog = (): void => {
    this.productCatalogService.deleteProductCatalog(this.id).subscribe(() => this.getProductsCatalog())
  }

  public set_action = (action: string): string => this.action = action

  public execute_action = (product_catalog: ProductCatalog, product_catalog_form_modal: any, delete_modal: any): void => {
    switch (this.action) {
      case 'Atualizar':
        this.update_flag = true
        this.modal_title_text = 'Atualizar estoque do produto'
        this.generateProductCatalogUpdateForm(product_catalog)
        this.modalService.open(product_catalog_form_modal, { centered: true, backdrop: 'static' })
        break;
      case 'Deletar':
        this.id = product_catalog.id
        this.modalService.open(delete_modal, { centered: true, backdrop: 'static' })
        break;
      default:
        alert('Favor selecionar uma ação!!!')
        break;
    }
  }
}
