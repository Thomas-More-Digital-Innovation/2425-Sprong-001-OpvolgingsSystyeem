import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { OpleidingService } from 'src/opleiding/opleiding.service';
import { Opleiding } from 'src/opleiding/entities/opleiding.entity';
import { CreateOpleidingDto } from 'src/opleiding/dto/create-opleiding.dto';
import { UpdateOpleidingDto } from 'src/opleiding/dto/update-opleiding.dto';

describe('OpleidingService', () => {
  let service: OpleidingService;
  let repository: Repository<Opleiding>;

  const mockOpleiding: Opleiding = {
    opleidingID: 1,
    naam: 'Software Engineering',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OpleidingService,
        {
          provide: getRepositoryToken(Opleiding),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<OpleidingService>(OpleidingService);
    repository = module.get<Repository<Opleiding>>(getRepositoryToken(Opleiding));
  });

  describe('create', () => {
    it('should create a new opleiding', async () => {
      const createOpleidingDto: CreateOpleidingDto = {
        naam: 'Software Engineering',
      };

      jest.spyOn(repository, 'save').mockResolvedValue(mockOpleiding);

      const result = await service.create(createOpleidingDto);
      expect(result).toEqual(mockOpleiding);
      expect(repository.save).toHaveBeenCalledWith(createOpleidingDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of opleidingen', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue([mockOpleiding]);

      const result = await service.findAll();
      expect(result).toEqual([mockOpleiding]);
      expect(repository.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single opleiding by ID', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(mockOpleiding);

      const result = await service.findOne(1);
      expect(result).toEqual(mockOpleiding);
      expect(repository.findOneBy).toHaveBeenCalledWith({ opleidingID: 1 });
    });

    it('should return null if no opleiding is found', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);

      const result = await service.findOne(999); // Non-existent opleidingID
      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update an opleiding by ID', async () => {
      const updateOpleidingDto: UpdateOpleidingDto = {
        naam: 'Software Engineering Updated',
      };

      jest.spyOn(repository, 'update').mockResolvedValue({
        affected: 1,
        raw: [], 
      });

      const result = await service.update(1, updateOpleidingDto);
      expect(result.affected).toEqual(1);
      expect(repository.update).toHaveBeenCalledWith(1, updateOpleidingDto);
    });

    it('should return affected: 0 if no opleiding is found to update', async () => {
      const updateOpleidingDto: UpdateOpleidingDto = {
        naam: 'Non-existent opleiding',
        beschrijving: 'Does not exist',
      };

      jest.spyOn(repository, 'update').mockResolvedValue({
        affected: 0,
        raw: [],
      });

      const result = await service.update(999, updateOpleidingDto); // Non-existent opleidingID
      expect(result.affected).toEqual(0);
    });
  });

  describe('remove', () => {
    it('should delete an opleiding by ID', async () => {
      jest.spyOn(repository, 'delete').mockResolvedValue({
        affected: 1,
        raw: [],
      });

      const result = await service.remove(1);
      expect(result.affected).toEqual(1);
      expect(repository.delete).toHaveBeenCalledWith({ opleidingID: 1 });
    });

    it('should return affected: 0 if no opleiding is found to delete', async () => {
      jest.spyOn(repository, 'delete').mockResolvedValue({
        affected: 0,
        raw: [],
      });

      const result = await service.remove(999); // Non-existent opleidingID
      expect(result.affected).toEqual(0);
    });
  });
});
