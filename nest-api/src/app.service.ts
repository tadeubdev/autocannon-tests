import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class AppService {
  constructor(@Inject('PG_POOL') private readonly pool: Pool) {}

  async getUser(id: number) {
    const { rows } = await this.pool.query(
      'SELECT * FROM users WHERE id = $1',
      [id],
    );
    return rows[0] ?? null;
  }

  async getFeed() {
    const res = await fetch('http://localhost:3001/external');
    return res.json();
  }
}
