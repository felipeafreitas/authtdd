const request = require('supertest');

const app = require('../../src/app');
const { User } = require('../../src/app/models');

describe('Authentication', () => {
	it('should authenticate with valid credential', async () => {
		try {
			const user = await User.create({
				name: 'Felipe',
				email: 'afelipe.freitas@gmail.com',
				password_hash: '123123',
			});

			const response = await request(app).post('./sessions').send({
				email: user.email,
				password: '123456',
			});

			expect(response.status).toBe(200);
		} catch (err) {
			console.log(err);
		}
	});
});
