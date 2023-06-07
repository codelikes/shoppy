import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';
import { StatusEnum } from '@app/common/exception/exception-status';
import { NotFoundException } from '@app/common/exception/exceptions/not-found.exception';

@Catch(Error)
export class AppExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // shop not found
    if (exception instanceof NotFoundException) {
      return response.status(404).render('errors/shop404', {
        exception: exception.message,
      });
    }

    // shop panel unauthorized
    if (exception instanceof UnauthorizedException) {
      return response.redirect(process.env.APP_SITE_URL);
    }

    const jsonResponse = {
      status: StatusEnum.FAILED,
      errors: [{ message: exception.message }],
    };

    console.error(
      `Response with error status and body: ${JSON.stringify(jsonResponse)}.`,
    );

    response.json(jsonResponse);
  }
}
