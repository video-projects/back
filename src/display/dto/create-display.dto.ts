import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateDisplayDto {
  @IsString({ message: 'مقدار فیلد مورد نظر باید رشته باشد.' })
  reference: string;

  @IsString({ message: 'مقدار فیلد مورد نظر باید رشته باشد.' })
  slug: string;

  @IsString({ message: 'مقدار فیلد مورد نظر باید رشته باشد.' })
  name: string;

  @IsString({ message: 'مقدار فیلد مورد نظر باید رشته باشد.' })
  title: string;

  @IsString({ message: 'مقدار فیلد مورد نظر باید رشته باشد.' })
  type: string;

  @IsNumber()
  created_by: number;

  @IsNumber()
  updated_by: number;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;

  @IsBoolean()
  activate: boolean;
}
