import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Contacts } from '../shared/models/contacts.model';
import { ContactService } from './services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  private contactForm: FormGroup
  public contacts: Contacts[]
  private action: string = '---'
  public update_flag: boolean = false
  public id: number

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.getcontacts()
  }

  private getcontacts() {
    this.contactService.getContacts()
      .subscribe(
        contacts => this.contacts = [...contacts],
        err => console.log(err),
        () => this.modalService.hasOpenModals() ? this.modalService.dismissAll() : null
      )
  }

  public openModal = (content) => {
    this.update_flag = false
    this.generateContactForm()
    this.modalService.open(content, { centered: true, backdrop: 'static' })
  }

  private generateContactForm = () => {
    this.contactForm = this.fb.group({
      tipo: [null, Validators.required],
      nome: [null, Validators.required],
      numero_doc: [null, Validators.required],
      endereco: [null, Validators.required],
      tel: [null, Validators.required],
      status: [null, Validators.required]
    })
  }

  private generateContactUpdateForm = (contact: Contacts): void => {
    this.contactForm = this.fb.group({
      tipo: [contact.tipo, Validators.required],
      nome: [contact.nome, Validators.required],
      numero_doc: [contact.numero_doc, Validators.required],
      endereco: [contact.endereco, Validators.required],
      tel: [contact.tel, Validators.required],
      status: [contact.status, Validators.required]
    })
  }

  public postcontact = (): void => {
    let contact: Contacts = this.contactForm.getRawValue()

    this.contactService.postContact(contact).subscribe(
      data => console.log(data),
      err => console.log(err),
      () => this.getcontacts()
    )
  }

  public putcontact = (): void => {
    let contact_update: Contacts = this.contactForm.getRawValue()
    this.contactService.putContact(contact_update, contact_update.idContato).subscribe(() => this.getcontacts())
  }

  public deletecontact = (): void => {
    this.contactService.deleteContact(this.id).subscribe(() => this.getcontacts())
  }

  public set_action = (action: string): string => this.action = action

  public execute_action = (contact: Contacts, contact_form_modal: any, delete_modal: any): void => {
    switch (this.action) {
      case 'Atualizar':
        this.update_flag = true
        this.generateContactUpdateForm(contact)
        this.modalService.open(contact_form_modal, { centered: true, backdrop: 'static' })
        break;
      case 'Deletar':
        this.id = contact.idContato
        this.modalService.open(delete_modal, { centered: true, backdrop: 'static' })
        break;
      default:
        alert('Favor selecionar uma ação!!!')
        break;
    }
  }

}
