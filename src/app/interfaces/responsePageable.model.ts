export class ResponsePageable {
  success: boolean;
  message: string;
  data: any[];
  total: number;
  page: number;
  last_page: number;

  constructor() {
    this.success = false;
    this.message = '';
    this.data = [];
    this.total = 0;
    this.page = 0;
    this.last_page = 0;
  }
}