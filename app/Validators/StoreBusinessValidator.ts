import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class StoreBusinessValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    planId: schema.number.optional(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
