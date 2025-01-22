import { Organizer, Prisma } from '@prisma/client'
import { OrganizersRepository } from '../organizers-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryOrganizersRepository implements OrganizersRepository {
  public items: Organizer[] = []

  async findByEmail(email: string) {
    const organizer = this.items.find((item) => item.email === email)

    if (!organizer) {
      return null
    }

    return organizer
  }

  async create(data: Prisma.OrganizerCreateInput) {
    const organizer = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      address: data.address,
      city: data.city,
      state: data.state,
      phone: data.phone,
      created_at: new Date(),
      password_hash: data.password_hash,
    }

    this.items.push(organizer)

    return organizer
  }
}

// model Organizer {
//     id            String   @id @default(uuid())
//     name          String
//     email         String   @unique
//     password_hash String
//     address       String
//     city          String
//     state         String
//     phone         String
//     created_at    DateTime @default(now())
//     Pet           Pet[]

//     @@map("organizers")
// }
