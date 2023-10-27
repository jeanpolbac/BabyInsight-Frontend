/**
 * Represents a request to create or update child information.
 */
export interface RequestChild {
  id: any;                // The unique identifier of the child (can be any type).
  name: string;           // The name of the child.
  dateOfBirth: Date;     // The date of birth of the child.
}
