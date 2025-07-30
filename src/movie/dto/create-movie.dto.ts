import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateMovieDto {
    @ApiProperty({
        description: 'Название фильма',
        example: 'Fight Club',
    })
    title: string;

    @ApiProperty({
        description: 'Дата релиза',
        example: 1999,
        type: Number
    })
    releaseYear: number;
    
    @ApiPropertyOptional({
        description: 'Постер фильма',
        example: 'https://storage.example.com/posters/12345.jpg',
        type: String
    })
    poster?: string;
    
    @ApiProperty({
        description: 'Id актеров фильма',
        example: ['12346', '12356777'],
        type: [String]
    })
    actorIds: string[];
}