export class ResponseReturnal {
  success: boolean;
  message: string;
  data: object;

  constructor() {
    this.success = false;
    this.message = '';
    this.data = {};
  }
}