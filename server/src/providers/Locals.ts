class Locals {
  public static config(): any {
    const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
    const port = process.env.PORT || 3000;

    const dsn = process.env.DSN || '';

    const appSecret = process.env.APP_SECRET || '';

    return {
      url,
      port,
      dsn,
      appSecret
    };
  }
}

export default Locals;
