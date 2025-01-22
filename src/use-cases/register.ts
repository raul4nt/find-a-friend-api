import { OrganizersRepository } from '@/repositories/organizers-repository'
import { Organizer } from '@prisma/client'
import { hash } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

interface RegisterUseCaseRequest {
  name: string
  email: string
  address: string
  city: string
  state: string
  phone: string
  password: string
}

interface RegisterUseCaseResponse {
  organizer: Organizer
}

export class RegisterUseCase {
  constructor(private organizersRepository: OrganizersRepository) {}

  async execute({
    name,
    email,
    address,
    city,
    state,
    phone,
    password,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await this.organizersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    const organizer = await this.organizersRepository.create({
      name,
      email,
      address,
      city,
      state,
      phone,
      password_hash,
    })

    return {
      organizer,
    }
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
