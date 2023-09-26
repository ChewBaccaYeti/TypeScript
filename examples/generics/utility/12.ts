// NonNullable<T>

// Утилітний тип, що приймає тип T та виключає з нього null та undefined. Цей тип корисний, коли ви хочете гарантувати, що значення не буде null чи undefined.
// Ось приклад використання NonNullable:
type SomeType = string | null | undefined;
// NonNullableType будет равен 'string'
type NonNullableType = NonNullable<SomeType>;
// У цьому прикладі SomeType — це тип, який може бути або рядком, або null, або undefined. 
// Під час використання NonNullable<SomeType> ми отримуємо тип NonNullableType, який може бути тільки рядком.