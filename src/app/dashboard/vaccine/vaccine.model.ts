/**
 * Represents a vaccine record.
 */
export interface Vaccine {
  vaccineId: any;                // The unique identifier of the vaccine.
  name: string;                 // The name of the vaccine.
  recommendedAge: number;       // The recommended age for administering the vaccine.
  dateAdministered: string;     // The date when the vaccine was administered (in string format).
}
