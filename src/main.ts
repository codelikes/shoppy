import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';
import * as fs from 'fs';
import { json, urlencoded } from 'express';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // https
    httpsOptions: {
      key: fs.readFileSync('./config/local-ssl/localhost.key.pem'),
      cert: fs.readFileSync('./config/local-ssl/localhost.crt.pem'),
    },
  });

  // static & templates
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, '..', '/views/partials'));

  //
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  app.getHttpAdapter().getInstance().disable('x-powered-by');
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  // cors
  // app.use((req: Request, res: Response, next: NextFunction) => {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, DELETE, PATCH');
  //   res.setHeader('Access-Control-Allow-Headers', 'Authorization, Cache-Control, Content-Type, Customer-Number, Preloader, Language, *');
  //   next();
  // });

  // logger
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  // start app
  await app.listen(parseInt(process.env.DOCKER_APP_PORT, 10) || 3000);
}

bootstrap();
