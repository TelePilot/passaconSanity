export default {
    title: "Om Oss",
    name: "omOss",
    type: "document",
    fields: [
      {
        title: "Titel",
        name: "titel",
        type: "string",
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
      {title: "Bild",
      name: "bild",
      type: "image"
    }
    ]
  }
  