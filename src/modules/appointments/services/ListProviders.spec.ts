import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    listProviders = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: '123456',
      role: 'barber',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'John Tre',
      email: 'johntre@test.com',
      password: '123456',
      role: 'customer',
    });

    const user3 = await fakeUsersRepository.create({
      name: 'John Qua',
      email: 'johnqua@test.com',
      password: '123456',
      role: 'barber',
    });

    const providers = await listProviders.execute();

    expect(providers).toEqual([user1, user3]);
    expect(providers).not.toEqual(expect.arrayContaining([user2]));
  });
});
