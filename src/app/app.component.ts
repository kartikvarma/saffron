import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { ContactService } from "../app/contact/contact.service";
import { Contact } from "../app/contact/model/contact.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Saffron Palace";
  contact: Contact;
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.getContact();

    $(document).ready(function() {
      $(".mdl-navigation__link, .mdl-layout-title").click(function() {
        $(".mdl-layout__drawer, .mdl-layout__obfuscator").removeClass(
          "is-visible"
        );
      });
    });
  }

  getContact(): void {
    this.contactService
      .getContact()
      .subscribe(contact => (this.contact = contact));
  }
}
