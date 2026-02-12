import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCategoryDto {
  @IsString()
  title: string;
  @IsString()
  @IsOptional()
  name?: string;
  @IsUUID()
  @IsOptional()
  parentId?: string;
}