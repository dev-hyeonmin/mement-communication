import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('uploads')
export class UploadsController {
    constructor(
        private readonly uploadsService: UploadsService
    ) {}

    @Post('')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file) {
        return await this.uploadsService.upload(file);
    }

    @Post('/delete')
    async deleteFile(@Body('fileName') fileName) {
        return await this.uploadsService.delete(fileName);
    }
}
