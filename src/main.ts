import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const config = app.get(ConfigService)
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  const options = new DocumentBuilder()
  .setTitle('Pendaftaran API')
  .setDescription('')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  app.enableCors();
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'uploads'),
  });
  // app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
  const port = process.env.PORT || 3006;
  const server = await app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`===== Server listening on port ${port} =====`);
  });
  server.keepAliveTimeout = 1000 * 60 * 5; // 5 minutes
  server.timeout = 1000 * 60 * 10; //
}
  
bootstrap();
