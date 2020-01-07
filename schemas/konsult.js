export default {
    title: "Konsult",
    name: "konsult",
    type: "document",
    fields: [
      {
        title: "Namn",
        name: "namn",
        type: "string",
      },
      {
       title: "Bild",
       name: "bild",
       type: "image"
      },
      {
        name: 'beskrivning',
        type: 'array',
        title: 'Beskrivning',
        of: [
          {
            type: 'block'
          }
        ]
      },
      {
        title: "Uppdrag",
        name: "uppdrag",
        type: "array",
        of: [{type: 'reference',
        to: [
            {type: 'uppdrag'}
        ]}]
      }
    ]
  }
  