import { PartialType } from '@nestjs/swagger';
import { CreateArticlesCommentDto } from './create-articles-comment.dto';

export class UpdateArticlesCommentDto extends PartialType(CreateArticlesCommentDto) {}
