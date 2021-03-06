import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Term from './Term'

export default class Service extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: null })
  public businessId: number

  @column()
  public name: string

  @hasOne(() => Term)
  public term: HasOne<typeof Term>

  @column.dateTime({ autoCreate: true, serializeAs: 'createdAt' })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serializeAs: 'updatedAt',
  })
  public updatedAt: DateTime
}
