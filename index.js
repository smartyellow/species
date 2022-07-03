'use strict';

const icons = {
  sloth: '<path d="M685.47 494.72c-9.37 0-17 7.63-17 17a17.01 17.01 0 1 0 17-17Zm0 0"/><path d="M589.33 328.96c3.44-17.9 17.7-93.35 22.52-138.26 3.67.02 7.33.06 11 .06 1.6 0 3.16-.3 4.63-.9l132.7-53.07a12.44 12.44 0 0 0-9.24-23.1l-86.56 34.62 33.86-40.58 63.7-38.17a12.44 12.44 0 0 0-12.78-21.35l-65.52 39.26c-1.2.72-2.26 1.63-3.16 2.7l-63.15 75.69-3.9-.03c-.02-.88-.05-1.72-.1-2.49-.19-2.91-.63-9.75-6.1-13.96-9.65-7.42-31.91-11.86-49.67-6.63-11.5 3.38-16 9.91-17.74 14.8a316.8 316.8 0 0 1-2.55 6.65c-26.05-1.02-51.8-2.52-77.13-4.46.5-.92.8-1.45.83-1.49a12.45 12.45 0 0 0-.76-14.06c-1.53-2-15.96-19.47-50.15-18.12-12.58.49-23.75 9.02-33.38 25.43a1805.57 1805.57 0 0 1-38.19-5.04c-.31-8.3-3.35-15.42-10.93-20.16-12.38-7.74-27.45-10.2-40.3-6.59-6.45 1.81-14.74 5.84-22.33 14.55-9.5-1.8-18.9-3.65-28.21-5.6.76-2.64.64-5.54-.49-8.23-.58-1.4-14.73-34.18-51.28-34.18-15.53 0-29.09 6.8-41.67 19.64C61.36 82.73 18.59 61.33 18.07 61.07A12.44 12.44 0 0 0 6.81 83.25c1.77.9 41.75 21 119.87 43.77-15.6 23.89-30.27 57.7-46.25 99.98-12.05 31.86-25.24 56.4-38 80.14C19.66 349.49 0 386.07 0 443.7c0 46.16 21.14 116.2 80.45 174.35 32.1 31.46 71.94 56.2 118.46 73.53 53.37 19.88 115.64 29.96 185.09 29.96 100.34 0 186.27-18.95 255.37-56.33 65.25-35.29 98.25-78.1 112.13-100.47 13-20.97 12.29-47.95-1.82-68.72-9.8-14.42-9.4-20.09-9.33-20.65 6.6-14.32 2.4-35.42-9.58-48.1-10.76-11.39-25.85-14.89-41.92-9.9-28.62-6.5-69.2 19.3-102.15 40.26l-4.34 2.75a26.86 26.86 0 0 1-23.42 2.5c2.47-7.42 5.76-19.28 10.36-38.76 6.03-25.53 13.14-59.33 20.03-95.17ZM450.29 183.93c25.35 2.05 51.14 3.64 77.23 4.77-14.22 35.4-37.5 92.39-53.42 129.08-5.23-20.17-11.65-38.07-17-52.97-3.23-9.05-6.04-16.87-8.12-23.74-6.3-20.87-3.27-41.63 1.31-57.14Zm-128.55 18.09c1.07-2.7 2.28-5.57 3.53-8.55 3-7.18 6.23-14.9 8.75-22.51a1809.7 1809.7 0 0 0 31.75 4.27 240 240 0 0 0-3.73 10.99c-9.87 31.48-16.07 72.02-17.02 111.23-.72 30.1-6.06 56.41-13.64 78.96a134.46 134.46 0 0 0-12.63-6.2c.13-7.75-.02-20.3-.26-38.85-.48-38.13-1.5-117.5 3.25-129.34Zm-44.94-40.26a1708 1708 0 0 0 32.16 5.4 378.18 378.18 0 0 1-6.64 16.7c-1.3 3.1-2.56 6.1-3.68 8.91-5.57 13.91-6.06 57.7-5.03 138.91.14 10.8.28 21.79.3 30.1-27.51-7.26-55.68-8.9-73.6-9.73a482.88 482.88 0 0 0-3.16-72.95c5.7-13.12 23.97-48.3 38.79-76.85 8.02-15.45 15.62-30.1 20.86-40.49Zm-57.82-11.43c10.65 2.31 21.43 4.53 32.34 6.66-4.86 9.52-11.03 21.4-17.47 33.8a6374.78 6374.78 0 0 0-24.42 47.35c-7.28-30.27-5.85-56.62 4.32-78.35a80.73 80.73 0 0 1 5.23-9.46Zm376.7 331.08 4.37-2.78c23.65-15.04 67.67-43.03 84.75-36.55a12.43 12.43 0 0 0 9.03-.08c8.11-3.25 14.28-2.48 18.85 2.37 5.92 6.25 6.96 16.55 5.06 20.63-5.26 11.28-1.55 26 11.35 45 8.6 12.66 9.1 29 1.26 41.64-12.56 20.27-42.64 59.15-102.81 91.7-65.43 35.39-147.37 53.33-243.54 53.33-66.47 0-125.82-9.55-176.4-28.4-43.23-16.1-80.15-38.97-109.73-67.98C44.06 547.53 24.9 484.82 24.9 443.71c0-51.37 17.41-83.77 39.46-124.8 12.53-23.3 26.73-49.72 39.35-83.11 33.48-88.54 57.02-124.66 81.26-124.66 11.8 0 19.5 6.48 23.85 11.86-14.7 15.57-40.81 54.77-22.63 124.8 14.92 57.43 9.7 146.24.92 163.81a12.44 12.44 0 1 0 22.25 11.13c5.25-10.49 8.03-29.04 9.5-45.85 23.7 1.1 72.28 4.06 103.33 22.96-12.88 28.5-28.64 49.19-40.29 62.06a12.44 12.44 0 1 0 18.45 16.7c25.02-27.66 67.33-87.9 69.57-180.56.89-36.98 6.68-75.03 15.88-104.4 10.86-34.66 21.9-42.58 25.23-42.71 11.28-.42 18.85 1.94 23.53 4.31-8 17.15-21.14 54.08-9.37 93.02 2.26 7.47 5.3 15.95 8.52 24.93 17.72 49.44 44.5 124.15 5.46 204.9a12.44 12.44 0 1 0 22.4 10.84 226.78 226.78 0 0 0 12.92-33.02c.78.15 1.59.24 2.42.24 16.5 0 54.06 20.28 66.4 26.95a51.88 51.88 0 0 0 52.38-1.7Zm-59.16-29.9c-25.64-12.86-43.2-19.12-56.13-20.09 4.57-25.12 4.45-49.2 1.79-71.55 12.98-25.03 53.2-123.73 71.74-170.18 10.94.34 21.93.58 32.95.75-2.92 25.5-9.48 67.69-19.95 123.15-12.67 67.18-24.22 117.6-30.4 137.92Zm0 0"/>',
};

module.exports = {

  name: 'Species',
  purpose: 'Manage animal species',
  version: '1.0.0',
  author: 'Romein van Buren',
  vendor: 'Smart Yellow',
  icon: icons.sloth,
  requires: [ 'webdesq/storage', 'smartyellow/multicolor' ],

  features: {
    seeAllSpecies: {
      description: 'See all species',
    },
    editSpecies: {
      description: 'Edit species',
      requires: [ 'seeAllSpecies' ],
    },
    createSpecies: {
      description: 'Create species',
      requires: 'editSpecies',
    },
    deleteSpecies: {
      description: 'Delete species',
      requires: 'createSpecies',
    },
  },

  settings: {
    channels: {
      type: 'keys',
      label: 'channels',
      default: {},
    },
  },

  entities: {
    species: 'species.js',
  },

  gui: {
    modules: () => ([
      { path: 'species.svelte',
        requires: [ 'seeAllSpecies' ],
        menu: {
          cluster: 'content',
          icon: icons.sloth,
          title: 'species',
        },
      },
    ]),
  },

  routes: ({ server, settings }) => [

    // Get all species I'm allowed to see
    { route: '/species',
      method: 'get',
      requires: 'smartyellow/species/seeAllSpecies',
      handler: async (req, res, user) => {
        const q = server.storage({ user }).store('smartyellow/species').find().sort({ 'log.created.on': -1 });
        const result = await (req.headers['format'] == 'object' ? q.toObject() : q.toArray());
        res.json(result);
      },
    },

    { route: '/species/settings',
      method: 'get',
      purpose: 'Receive all predefined settings for species',
      requires: 'smartyellow/species/seeAllSpecies',
      handler: async (req, res) => {
        res.json({
          previewUrl: settings.preview,
        });
      },
    },

    // Get specific species
    { route: '/species/:id',
      method: 'get',
      requires: 'smartyellow/species/seeAllSpecies',
      handler: async (req, res, user) => {
        const doc = await server.storage({ user }).store('smartyellow/species').get(req.params[0]);
        if (!doc) {
          res.error(404);
          return;
        }
        if (user.cannot('smartyellow/species/seeAllSpecies')) {
          const set = [ user.id, ...(user.coworkers || []) ];
          if (!set.includes(doc.log.created.by)) {
            // no access to this species, send 'not authorized' error
            res.error(401);
            return;
          }
        }
        // validate item
        const result = await server.validateEntity({
          entity: 'smartyellow/species',
          id: req.params[0],
          data: doc,
          validateOnly: true,
          user: user,
          isNew: false,
        });
        res.json(result);
      },
    },

    // Create new species
    { route: '/species',
      method: 'post',
      requires: 'smartyellow/species/createSpecies',
      handler: async (req, res, user) => {

        let result = await server.validateEntity({
          validateOnly: req.headers['init'],
          isNew: true,
          entity: 'smartyellow/species',
          user: user,
          data: req.body,
        });

        // If validation was OK and we're not in initMode, store the new values
        if (result.store) {
          result = await result.store();
          delete result.store;
          // broadcast reload trigger
          server.publish('cms', 'smartyellow/species/reload');
        }

        res.json(result);
      },
    },

    // Update existing species
    { route: '/species/:id',
      method: 'put',
      requires: 'smartyellow/species/editSpecies',
      handler: async (req, res, user) => {

        const result = await server.validateEntity({
          entity: 'smartyellow/species',
          id: req.params[0],
          data: req.body,
          isNew: false,
          storeIfValid: true,
          validateOnly: req.headers['init'],
          user: user,
        });

        if (!result.errors) {
          // broadcast reload trigger
          server.publish('cms', 'smartyellow/species/reload');
        }

        res.json(result);
      },
    },

    // Delete specific species
    { route: '/species/:id',
      method: 'delete',
      requires: 'smartyellow/species/deleteSpecies',
      handler: async (req, res, user) => {
        // Check if user is allowed to see species to be deleted
        const species = await server.storage({ user }).store('smartyellow/species').find().toObject();
        if (species[req.params[0]]) {
          // User is allowed to see the species to be deleted, continue
          await server.storage({ user }).store('smartyellow/species').delete({ id: req.params[0] });
          // broadcast reload trigger
          server.publish('cms', 'smartyellow/species/reload');
        }
        else {
          // Not authorized
          res.error(401);
        }
      },
    },

    { route: '/species/filters',
      method: 'get',
      requires: 'smartyellow/species/seeAllSpecies',
      handler: async (req, res, user) => {
        const filters = await server.getFilters({
          entity: 'smartyellow/species',
          user: user,
        });
        res.json(filters);
      },
    },

    { route: '/species/formats',
      method: 'get',
      purpose: 'Get columns defined for entity smartyellow/species',
      handler: async (req, res, user) => {
        const formats = await server.getFormats({
          entity: 'smartyellow/species',
          user: user,
        });
        res.json(formats);
      },
    },

    { route: '/species/search',
      method: 'post',
      requires: 'smartyellow/species/seeAllSpecies',
      handler: async (req, res, user) => {
        // Get query and language from posted data
        const { query } = req.body;
        const filters = await server.getFilters({
          entity: 'smartyellow/species',
          user: user,
        });
        const storageQuery = server.storage({ user }).prepareQuery(filters, query, req.body.languages || false);
        const find = server.storage({ user }).store('smartyellow/species').find(storageQuery);
        const result = await (req.headers['format'] == 'object' ? find.toObject() : find.toArray());
        res.json(result);
      },
    },
  ],

};
