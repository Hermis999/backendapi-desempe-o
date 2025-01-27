import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { MangasService } from './mangas.service';
import { createMangaDto } from 'src/dto/create-manga.dto';
import { updateMangaDto } from 'src/dto/update-manga.dto';

@Controller('mangas')
export class MangasController {
    constructor(private MangasService: MangasService){}

    @Post('/')
    create(@Body() body: createMangaDto){
        return this.MangasService.create(body);
    }

    @Get()
    findAll(){
        return this.MangasService.findAll();
    }

    @Get(':id')
    finOne(@Param('id') id: string){
        return this.MangasService.finOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: updateMangaDto){
        return this.MangasService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.MangasService.delete(id);
    }

}

