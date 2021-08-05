import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListAvailableDaysService from '@modules/appointments/services/ListAvailableDaysService';

export default class MonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.query;

    const listDays = container.resolve(ListAvailableDaysService);

    const availability = await listDays.execute({
      provider_id,
      month: Number(month),
      year: Number(year),
    });

    return response.json(availability);
  }
}
