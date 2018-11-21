import { Injectable } from "@angular/core";
import { of } from "rxjs";

import { MENU } from "./models/mock-menu";

@Injectable({ providedIn: "root" })
export class MenuService {
  constructor() {}

  getMenuItems() {
    return of(MENU);
  }
}
