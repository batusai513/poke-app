import { describe, it, expect } from 'vitest';
import { hectogramsToGrams, decimetresToCentimetres } from './meassureUnits';

describe('Unit Conversion Functions', () => {
  describe('hectogramsToGrams', () => {
    it('should correctly convert hectograms to grams', () => {
      expect(hectogramsToGrams(1)).toBe(100);
      expect(hectogramsToGrams(0.5)).toBe(50);
      expect(hectogramsToGrams(0)).toBe(0);
    });
  });

  describe('decimetresToCentimetres', () => {
    it('should correctly convert decimetres to centimetres', () => {
      expect(decimetresToCentimetres(1)).toBe(10);
      expect(decimetresToCentimetres(0.5)).toBe(5);
      expect(decimetresToCentimetres(0)).toBe(0);
    });
  });
});
