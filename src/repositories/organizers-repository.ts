import { Organizer, Prisma } from '@prisma/client'

export interface OrganizersRepository {
  findByEmail(email: string): Promise<Organizer | null>
  create(data: Prisma.OrganizerCreateInput): Promise<Organizer>
}
