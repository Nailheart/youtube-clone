type Constructor = {
  message?: string;
  status?: number;
};

class HttpError extends Error {
  public status: number | undefined;

  public constructor({ message, status }: Constructor) {
    super(message);
    this.status = status;
  }
}

export { HttpError };
