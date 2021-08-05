import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListAvailableHoursService from '@modules/appointments/services/ListAvailableHoursService';

export default class DayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year, day } = request.query;

    const listHours = container.resolve(ListAvailableHoursService);

    const availability = await listHours.execute({
      provider_id,
      day: Number(day),
      month: Number(month),
      year: Number(year),
    });

    return response.json(availability);
  }
}
