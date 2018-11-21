import { Component, OnInit } from "@angular/core";
import { ContactService } from "./contact.service";
import { Contact } from "./model/contact.model";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  today = new Date();
  contact: Contact;
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.getContact();
  }

  getContact(): void {
    this.contactService
      .getContact()
      .subscribe(contact => (this.contact = contact));
  }
}
