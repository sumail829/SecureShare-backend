import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { SharesModule } from './shares/shares.module';
import { PermissionsModule } from './permissions/permissions.module';



@Module({
  imports: [
    ConfigModule.forRoot({
  isGlobal: true,
}),

TypeOrmModule.forRoot({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  autoLoadEntities: true,
  synchronize: true, // use false in production
}),

UsersModule,

FilesModule,

SharesModule,

PermissionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
