import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { StatusEnum } from '@app/common/exception/exception-status';

@Catch(Error)
export class AppExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const jsonResponse = {
      status: StatusEnum.FAILED,
      errors: [{ message: exception.message }],
    };

    console.error(`Response with error status and body: ${JSON.stringify(jsonResponse)}.`);
    response.json(jsonResponse);
  }
}
