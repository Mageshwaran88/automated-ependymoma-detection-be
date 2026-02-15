/**
 * Must run before any other code. Node 18 CJS context doesn't expose global `crypto`;
 * @nestjs/typeorm uses crypto.randomUUID(), so we polyfill it here.
 */
import { webcrypto } from 'crypto';
(globalThis as any).crypto = webcrypto;
