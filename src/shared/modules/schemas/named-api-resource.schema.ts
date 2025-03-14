import { object, string } from 'valibot';

export const NamedAPIResourceSchema = object({
  name: string(
    "El campo 'name' es obligatorio y debe ser una cadena de texto.",
  ),
  url: string("El campo 'url' es obligatorio y debe ser una cadena de texto"),
});
