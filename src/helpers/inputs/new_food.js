const DEFAULT_VALUE = null;

export const foodInputs = [
  {
    label: 'Name',
    type: 'text',
    placeholder: 'Enter the name of the food',
    value: DEFAULT_VALUE,
    save_as: 'food_name'
  },
  {
    label: 'Brand',
    type: 'text',
    placeholder: 'Enter the brand of the food',
    value: DEFAULT_VALUE,
    save_as: 'brand'
  },
  {
    label: 'Serving size',
    type: 'text',
    placeholder: 'Enter the serving size',
    value: DEFAULT_VALUE,
    save_as: 'serving_size'
  },
  {
    label: 'Serving size unit',
    type: 'text',
    placeholder: 'Enter the serving size unit',
    value: DEFAULT_VALUE,
    save_as: 'serving_size_unit'
  },
  {
    label: 'Total calories',
    type: 'text',
    placeholder: 'Enter the total calories',
    value: DEFAULT_VALUE,
    save_as: 'total_calories'
  },
  {
    label: 'Fat grams',
    type: 'text',
    placeholder: 'Enter the fat (grams)',
    value: DEFAULT_VALUE,
    save_as: 'fat_grams'
  },
  {
    label: 'Carbohydrate grams',
    type: 'text',
    placeholder: 'Enter the carbohydrates (grams)',
    value: DEFAULT_VALUE,
    save_as: 'carbohydrate_grams'
  },
  {
    label: 'Protein grams',
    type: 'text',
    placeholder: 'Enter the protein (grams)',
    value: DEFAULT_VALUE,
    save_as: 'protein_grams'
  },
  {
    label: 'Total grams',
    type: 'text',
    placeholder: 'automatically generated',
    value: 0,
    save_as: 'total_grams'
  }
];
