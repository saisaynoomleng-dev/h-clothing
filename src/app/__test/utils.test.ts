import { formatTitle } from '@/lib/utils';
import { describe, expect, it } from 'vitest';

describe('Test Utils Functions', () => {
  it('should capitalize every word in the sentence', () => {
    expect(formatTitle('hi hi')).toBe('Hi Hi');
  });
});
