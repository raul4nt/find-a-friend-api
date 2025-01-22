import { Prisma, Pet } from '@prisma/client'
import { PetsRepository } from '../pets-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryPetsRepository implements PetsRepository {
  public items: User[] = []

  async create(data: Prisma.PetCreateInput) {
    const pet = {
      id: randomUUID(),
      name: data.name,
      description: data.description,
      adoptionReqs: data.adoptionReqs,
      size: data.size,
      age: data.age,
      energy: data.energy,
      environment: data.environment,
      independency: data.independency,
    }

    this.items.push(pet)

    return pet
  }

  async findById(id: string) {
    const pet = this.items.find((item) => item.id === id)

    if (!pet) {
      return null
    }

    return pet
  }
}

// model Pet {
//     id           String                  @id @default(uuid())
//     name         String
//     description  String
//     adoptionReqs String[]                @default([])
//     org          Organizer               @relation(fields: [organizerId], references: [id])
//     size         AnimalSize
//     age          AnimalAge
//     energy       AnimalEnergyLevel
//     environment  AnimalEnvironment
//     independency AnimalIndependencyLevel
//     organizerId  String

//     @@map("pets")
// }
