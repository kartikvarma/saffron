import { Injectable } from "@angular/core";
import { of } from "rxjs";

import { CONTACT } from "./model/mock-contact";

@Injectable({ providedIn: "root" })
export class ContactService {
  constructor() {}

  getContact() {
    return of(CONTACT);
  }
}
