import { CruiseUser } from './entities/cruise-user.entity';
import { Module } from '@nestjs/common';
import { CruiseUserService } from './cruise-user.service';
import { CruiseUserResolver } from './cruise-user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';

// @Module({
// 	imports: [TypeOrmModule.forFeature([Item])],
// 	providers: [ItemsResolver, ItemsService],
// })
// export class ItemsModule {}

@Module({
	imports: [TypeOrmModule.forFeature([CruiseUser], 'postgresConnection')],
	providers: [CruiseUserResolver, CruiseUserService],
	exports: [CruiseUserService],
})
export class CruiseUserModule {}
