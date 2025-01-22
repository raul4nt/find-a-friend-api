import { OrganizersRepository } from '@/repositories/organizers-repository'
import { Organizer } from '@prisma/client'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'
import { compare } from 'bcryptjs'

interface AuthenticateUseCaseRequest {
  email: string
  password: string
}

interface AuthenticateUseCaseResponse {
  organizer: Organizer
}

export class AuthenticateUseCase {
  constructor(private organizersRepository: OrganizersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const organizer = await this.organizersRepository.findByEmail(email)

    if (!organizer) {
      throw new InvalidCredentialsError()
    }

    const doesPasswordMatches = await compare(password, organizer.password_hash)

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return {
      organizer,
    }
  }
}
