import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListAvailableHoursService from './ListAvailableHoursService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listAvailableHours: ListAvailableHoursService;

describe('ListAvailableHours', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listAvailableHours = new ListAvailableHoursService(
      fakeAppointmentsRepository
    );
  });

  it('should be able to list the available hours of day for a provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'consumer',
      date: new Date(2020, 4, 20, 14, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'consumer',
      date: new Date(2020, 4, 20, 15, 0, 0),
    });

    jest.spyOn(Date, 'now').mockImplementation(() => {
      return new Date(2020, 4, 20, 11).getTime();
    });

    const availableHours = await listAvailableHours.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
      day: 20,
    });

    expect(availableHours).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: false },
        { hour: 10, available: false },
        { hour: 13, available: true },
        { hour: 14, available: false },
        { hour: 15, available: false },
        { hour: 16, available: true },
      ])
    );
  });
});
