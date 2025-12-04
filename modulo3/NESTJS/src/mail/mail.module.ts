import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';

@Module({
  providers: [MailService],
  controllers: [MailController]
})
export class MailModule {}
