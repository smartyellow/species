'use strict';

const { makeId } = require('core/makeid');

const states = {
  concept: 'concept',
  online: 'online',
};

const capitalise = string => string.charAt(0).toUpperCase() + string.slice(1);

module.exports = {
  format: 5,
  author: 'Romein van Buren',
  vendor: 'Smart Yellow',
  purpose: 'Definition of an animal species.',
  store: 'species',

  forms: () => ({
    default: {
      pages: [],
      sections: {
        id: {
          label: 'id',
          fields: [
            { key: 'id',
              editor: 'string',
              readonly: true,
            },
          ],
        },

        name: {
          label: 'name',
          fields: [
            { key: 'name',
              editor: 'string',
              localized: true,
              placeholder: 'Enter the name of this species',
            },
          ],
        },

        status: {
          label: 'status',
          fields: [
            { key: 'status',
              editor: 'select',
              required: true,
              options: states,
            },
          ],
        },

        tags: {
          label: 'tags',
          fields: [
            { key: 'tags',
              filter: '^[a-z0-9]*',
              editor: 'multiselect',
              options: async ({ storage }) => {
                const entries = await storage.store('smartyellow/species').find().toArray();
                const tags = entries.reduce((arr, entry) => {
                  if (Array.isArray(entry.tags)) {
                    arr.push(...entry.tags);
                  }
                  return arr;
                }, []);
                return tags;
              },
              custom: true,
              placeholder: 'tags',
            },
          ],
        },

        colors: {
          label: 'colors',
          fields: [
            { key: 'colors',
              editor: 'smartyellow/multicolor',
              multiple: true,
            },
          ],
        },

        taxonomy: {
          label: 'taxonomy',
          fields: [
            { key: 'taxon.kingdom',
              editor: 'select',
              options: {
                animalia: 'Animalia',
                plantae: 'Plantae',
              },
              default: 'animalia',
            },
            { key: 'taxon.phylum',
              editor: 'string',
              label: 'phylum',
            },
            { key: 'taxon.class',
              editor: 'string',
              label: 'class',
            },
            { key: 'taxon.order',
              editor: 'string',
              label: 'order',
            },
            { key: 'taxon.family',
              editor: 'string',
              label: 'family',
            },
            { key: 'taxon.genus',
              editor: 'string',
              label: 'genus',
            },
            { key: 'taxon.species',
              editor: 'string',
              label: 'species',
            },
            { key: 'taxon.subspecies',
              editor: 'string',
              label: 'subspecies',
            },
          ],
        },

        //binominal: {
        //  label: 'binominal name',
        //  fields: [
        //    { key: 'binominal',
        //      editor: 'string',
        //      readonly: true,
        //      visible: ({ newEntity }) => !newEntity,
        //    },
        //    //{ key: 'binominal.short',
        //    //  editor: 'string',
        //    //  //readonly: true,
        //    //  visible: ({ newEntity }) => !newEntity,
        //    //},
        //  ],
        //},

        description: {
          label: 'description',
          fields: [
            { key: 'description',
              editor: 'text',
              localized: true,
              markup: true,
              placeholder: 'Enter a description of this fish',
            },
          ],
        },

        visual: {
          label: 'visual',
          fields: [
            { key: 'visual',
              editor: 'file',
              min: 0,
              max: 1,
              accept: [ 'image/*' ],
            },
          ],
        },

        video: {
          label: 'video',
          fields: [
            { key: 'video',
              editor: 'video',
            },
          ],
        },
      },
    },
  }),

  schema: () => ({
    id: {
      type: 'string',
      required: ({ newEntity }) => newEntity,
      lowercase: true,
      trim: true,
      filter: {
        title: 'id',
        match: '^[a-zA-Z0-9]{6}',
        order: 999,
      },
      validate: async ({ newValues, oldValues, newEntity, storage }) => {
        if (newEntity) {
          // For new records, any value is ok
          const r = storage ? await storage.store('webdesq/case').get(newValues.id) : null;
          return (r == null ? true : 'id already exists');
        }
        else {
          // ID cannot be changed if record was already created
          return (newValues.id == oldValues.id ? true : 'id cannot be changed');
        }
      },
      default: () => makeId(6),
    },

    name: {
      type: 'stringset',
      default: '',
      trim: true,
      filter: {
        title: 'name',
        match: '^[a-z]',
        localized: true,
      },
      format: {
        label: 'name',
        type: 'text',
        sortable: 'text',
        sticky: true,
        sorted: 'up',
        align: 'left',
        minWidth: 300,
        enabled: true,
        priority: 1,
      },
    },

    status: {
      type: 'string',
      default: 'online',
      validate: ({ newValues }) => Object.keys(states).includes(newValues.status),
      format: {
        label: 'status',
        type: 'text',
        minWidth: 150,
        enabled: true,
        priority: 20,
      },
    },

    description: {
      type: 'stringset',
      skip: true,
      default: '',
    },

    binominal: {
      type: 'computed',
      generator: ({ values }) => {
        if (!values.taxon || !values.taxon.species || !values.taxon.genus) {
          return { long: '', short: '' };
        }

        const genus = capitalise(values.taxon.genus);
        const species = values.taxon.species.toLowerCase();
        const long = `${genus} ${species}`;
        const short = `${genus.charAt(0)}. ${species}`;
        return { long, short };
      },
      format: {
        label: 'Latin',
        type: 'text',
        sortable: 'text',
        align: 'left',
        minWidth: 150,
        enabled: true,
      },
    },

    video: {
      type: 'array',
      of: {
        id: {
          type: 'string',
        },
        host: {
          type: 'string',
        },
        thumb: {
          type: 'string',
        },
      },
      default: [],
    },

    visual: {
      type: 'array',
      of: [ 'string' ],
      default: [],
      skip: true,
      onDataValid: async ({ newValues, storage, user }) => {
        newValues.visual = newValues.visual || [];
        if (!Array.isArray(newValues.visual)) {
          newValues.visual = [ newValues.visual ];
        }
        for (let i = 0; i < newValues.visual.length; i++) {
          if (newValues.visual[i].data) {
            if (storage) {
              // If storage is available, insert the new file into storage and collect id
              const result = await storage({ user }).bucket('webdesq/media').insert({
                id: makeId(6),
                filename: newValues.visual[i].name,
                metadata: {
                  contentType: newValues.visual[i].type,
                },
              }, newValues.visual[i].data)
                .catch(error => {
                  if (error.code !== 'DUPLICATE_FILE') {
                    throw error;
                  }
                  newValues.visual[i] = error.file.id;
                });
              if (result) {
                newValues.visual[i] = result.id;
              }
            }
            else {
              // If no storage is available, remove slot by setting it to null
              newValues.visual[i] = null;
            }
          }
          // remove empty slots in pictures array
          newValues.visual = newValues.visual.filter(i => i != null);
          newValues.visual = [ ...new Set(newValues.visual) ];
        }
      },
    },
  }),
};
