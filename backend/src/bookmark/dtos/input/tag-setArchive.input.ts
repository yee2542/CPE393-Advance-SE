import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { TagType } from '../../@types/tag-type.type';

registerEnumType(TagType, {
  name: String(TagType),
});

@InputType()
export class TagSetArchiveInputDTO {
  @Field()
  _id: string;
}
