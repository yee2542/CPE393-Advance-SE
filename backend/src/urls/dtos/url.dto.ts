import { Field, ObjectType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { Url } from '../schema/url.schema';

@ObjectType()
export class UrlDTO implements Url {
  @Field(() => String)
  owner: Types.ObjectId;

  @Field(() => String)
  original: string;

  @Field(() => String)
  domain: string;

  @Field(() => String)
  subdomain: string;

  @Field(() => String)
  note: string;

  @Field(() => Date, { nullable: true, defaultValue: Date.now })
  createAt: Date;

  @Field(() => Date, { nullable: true, defaultValue: Date.now })
  updateAt: Date;
}
