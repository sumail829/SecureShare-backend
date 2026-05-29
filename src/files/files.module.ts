import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Share } from 'src/shares/entities/share.entity';

@Module({
    imports: [TypeOrmModule.forFeature([File,Share])]
})


export class FilesModule {}
