export default interface eCinema {
  id: string;
  name: string;
  code: string;
  mapEmbeb: string;
  description: string;
  phone: string;
  address: string;
  ticket: Array<{
    name: string;
    url: string;
  }>;
  imageUrls: Array<string>;
}
