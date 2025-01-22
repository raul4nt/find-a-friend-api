import { PetsRepository } from '@/repositories/pets-repository'
import {
  AnimalAge,
  AnimalEnergyLevel,
  AnimalEnvironment,
  AnimalIndependencyLevel,
  AnimalSize,
  Pet,
} from '@prisma/client'

interface CreatePetUseCaseRequest {
  name: string
  description: string
  age: AnimalAge
  size: AnimalSize
  energy: AnimalEnergyLevel
  independency: AnimalIndependencyLevel
  environment: AnimalEnvironment
  adoptionReqs?: string[]
}

interface CreatePetUseCaseResponse {
  pet: Pet
}

export class CreatePetUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    name,
    description,
    age,
    size,
    energy,
    independency,
    environment,
    adoptionReqs,
  }: CreatePetUseCaseRequest): Promise<CreatePetUseCaseResponse> {
    const pet = await this.petsRepository.create({
      name,
      description,
      age,
      size,
      energy,
      independency,
      environment,
      adoptionReqs,
    })

    return {
      pet,
    }
  }
}

// export class CreatePetUseCase {
//     constructor(private )
// }

// model Pet {
//     id           String                  @id @default(uuid())
//     name         String
//     description  String
//     address      String
//     city         String
//     state        String
//     adoptionReqs String[]
//     size         AnimalSize
//     age          AnimalAge
//     energy       AnimalEnergyLevel
//     environment  AnimalEnvironment
//     independency AnimalIndependencyLevel

//     @@map("pets")
// }
