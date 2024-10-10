import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import ormConfig from './typeorm/orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolModule } from './rol/rol.module';
import { CompetentieModule } from './competentie/competentie.module';
import { MateriaalModule } from './materiaal/materiaal.module';
import { OpleidingModule } from './opleiding/opleiding.module';
import { GroepModule } from './groep/groep.module';
import { ScoreModule } from './score/score.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...ormConfig,
        url: configService.get('DATABASE_URL'),
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    RolModule,
    CompetentieModule,
    MateriaalModule,
    OpleidingModule,
    GroepModule,
    ScoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
