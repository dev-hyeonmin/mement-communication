import { PickType } from "@nestjs/swagger";
import { Board } from "../entities/board.entity";
import { GetListOutput } from "src/pagination/dtos/pagination.dto";
import { IsNotEmpty, IsString } from "class-validator";

export class GetBoardsOutput<T> {
    notices?: Board[];
    boards: GetListOutput<T>;
}

export class GetBoardOutput {
    board: Board;
}

export class CreateBoardInput extends PickType(Board, ['title', 'content']) {
    @IsNotEmpty()
    subCategoryId: number;
}

export class EditBoardInput extends PickType(Board, ['id', 'title', 'content', 'notice']) {
    subCategoryId: number;
}

export class DeleteBoardInput extends PickType(Board, ['id']) { }