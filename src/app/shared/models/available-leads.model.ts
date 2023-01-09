import {LeadPaginationModel, LeadSortModel} from "./misc.model";
import {ImageGroup} from "@spartacus/core/src/model/image.model";

export interface LeadsPrice {
  currencyIso: string;
  formattedValue: string;
  priceType: string;
  value: number;
}

export interface AvailableLeads {
  type: string;
  budget: string;
  code: string;
  detailsMediaLink: string;
  endTime: string;
  name: string;
  postcode: string;
  price: LeadsPrice;
  images: ImageGroup[];
}

export interface AvailableLeadsList {
  results?: AvailableLeads[];
  pagination?: LeadPaginationModel;
  sorts?: LeadSortModel[];
}
