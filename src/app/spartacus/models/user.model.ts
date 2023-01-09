import {User} from "@spartacus/core";

export interface CustomUser extends User {
  sessionToken?: string;
}

