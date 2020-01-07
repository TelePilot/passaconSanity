export default {
    title: "Artikel",
    name: "artikel",
    type: "document",
    fields: [
    {
        title: "Titel",
        name: "titel",
        type: "string",
        },
      {
        title: "thumbnail",
        name: "thumnail",
        type: "image",
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
        title: "Datum",
        name: "datum",
        type: "date"
      },
      {
        title: "Huvudsida?",
        name: "huvudsida",
        type: "boolean"
      }
    ]
  }
  