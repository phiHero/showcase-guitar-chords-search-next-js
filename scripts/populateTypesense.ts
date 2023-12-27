import Typesense from 'typesense';
import GuitarChordData from './data/guitar.json';

(async () => {
  const typesense = new Typesense.Client({
    apiKey: 'xyz',
    nodes: [
      {
        host: 'localhost',
        port: 8108,
        protocol: 'http',
      },
    ],
  });

  try {
    const collection = await typesense.collections('guitar-chords').retrieve();
    console.log('Found existing collection of guitar-chords');

    if (collection.num_documents !== GuitarChordData.length) {
      console.log('Collection has different number of documents than data');
      console.log('Deleting collection');
      await typesense.collections('guitar-chords').delete();
    }
  } catch (err) {
    console.error(err);
  }

  console.log('Creating schema...');

  await typesense.collections().create({
    name: 'guitar-chords',
    enable_nested_fields: true,
    fields: [
      {
        name: 'key',
        type: 'string',
        facet: true,
      },
      {
        name: 'suffix',
        type: 'string',
      },
      {
        name: 'positions',
        type: 'object[]',
      },
      {
        name: 'positions.capo',
        type: 'bool[]',
        optional: true,
        facet: true,
      },
    ],
  });

  console.log('Populating collection...');

  try {
    const returnData = await typesense
      .collections('guitar-chords')
      .documents()
      .import(GuitarChordData);

    console.log('Return data: ', returnData);
  } catch (err) {
    console.error(err);
  }
})();
