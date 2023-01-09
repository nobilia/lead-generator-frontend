export interface LeadPaginationModel {
  count?: number,
  hasNext?: boolean;
  hasPrevious?: boolean;
  page?: number,
  totalCount?: number,
  totalPages?: number
}

export interface LeadSortModel {
  code?: string;
  asc?: string;
}
