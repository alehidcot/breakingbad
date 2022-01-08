export interface Quote {
  quote_id: number;
  quote: string;
  author: string;
  series: string;
}

export interface QuoteByAuthorResponse {
  data: Quote[] | unknown;
  loading?: boolean;
  error?: any;
  refetch: any;
}
