import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import MonthAvailabilityController from '../controllers/MonthAvailabilityController';
import DayAvailabilityController from '../controllers/DayAvailabilityController';

const providerssRoutes = Router();

const providersController = new ProvidersController();
const monthAvailability = new MonthAvailabilityController();
const dayAvailability = new DayAvailabilityController();

providerssRoutes.use(ensureAuthenticated);

providerssRoutes.get('/', providersController.index);
providerssRoutes.get(
  '/:provider_id/month-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  monthAvailability.index
);
providerssRoutes.get(
  '/:provider_id/day-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  dayAvailability.index
);

export default providerssRoutes;
